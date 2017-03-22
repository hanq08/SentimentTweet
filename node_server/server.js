var express = require('express');
var https = require('https');
var http = require('http');
var path = require('path');
var twit = require('twitter');
var unirest = require('unirest');
var destroy = require('destroy');
var fs = require('fs');

var app = express();
var port = process.env.PORT || 3000;
var router = express.Router();
var staticRoot = __dirname;
var twitter = new twit({
  consumer_key: "UpYOyN12AEXJm3UPYvMDjvSXD",
  consumer_secret: "RQZGFb80WaKUB4DQNyuqwRZtjGSUmgslx1HlWMBNMgUogsp7FC",
  access_token_key: "3432137266-Ub9DPta0CGptkfMGl98a7ALzfEtmvf3xaRThqAZ",
  access_token_secret: "ZJ5qVlBEUvNDzWTTcu5cURGnR39iBYsGg1OKyeIEwonxl"
});

app.set('port', (port));
app.use(express.static(staticRoot));

app.get('/', function(req, res) {
  res.sendFile('index.html');
});
var options = {
  key: privateKey,
  cert: certificate
}

//var server = https.createServer(options, app).listen(port);
var server = app.listen(port);
var io = require('socket.io').listen(server);

var streams;
app.get('/stream/:query', function(req, res, next) {
  if (twit.currentTwitStream){
     destroy(twit.currentTwitStream);
     twit.currentTwitStream.destroy();
     streams.destroy();
     destroy(streams);
  }
 twitter.stream('statuses/filter', {track: req.params.query}, function(stream) {
    streams = stream;
    console.log(req.params.query);
    twit.currentTwitStream = stream;
    stream.on('data', function(data) {
          data.location = data.geo ? data.geo.cordinates:[];
          unirest.get("https://twinword-sentiment-analysis.p.mashape.com/analyze/?text=" + data.text)
         .header("X-Mashape-Key", "1GdkjEbc1vmshMnacXuIohzpHNgGp1KeB4EjsnK4XgDmeJyoOt")
         .header("Accept", "application/json")
         .end(function (result) {
           if (result.status == 200){
              var tweet = {
                  created_at: data.created_at,
                  text: data.text,
                  username: data.user ? data.user.screen_name : '',
                  followers_count: data.user ? data.user.followers_count : '',
                  following_count: data.user ? data.user.friends_count : '',
                  statuses_count: data.user ? data.user.statuses_count : '',
                  profile_image_url: data.user ? data.user.profile_image_url : '',
                  coordinates: data.location,
                  sentiment_result: result.body['type']
            }
            io.emit('tweet', tweet);
           }
            
       });
   });

    stream.on('error', function(error) {
      
    });
  });
});

// These code snippets use an open-source library. http://unirest.io/nodejs
