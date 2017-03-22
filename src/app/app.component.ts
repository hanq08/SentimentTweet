import { Component, ElementRef, OnInit } from '@angular/core';
import * as D3 from 'd3/index';
import { Tweet } from './shared/tweet';
import { TweetService } from './shared/tweet.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[TweetService]
})
export class AppComponent implements OnInit{
  errorMessage: string;
  term:string;
  host;
  svg;
  streamContainer;
  stream = null;
  socket;
  tweets: Tweet[] = [];
  twitterState:any={};

  constructor(private _element:ElementRef, private _tweetService: TweetService){
    this.host = D3.select(this._element.nativeElement);
  }

  ngOnInit(){
    this.buildSVG();
    this.connectToTweetStream();
  }

   connectToTweetStream() {
    this._tweetService.connectToStream()
      .subscribe(
        tweet => {
          this.tweets.push(tweet as Tweet);
          if (this.tweets.length > 200){
            this.tweets = [];
          }
          this.twitterState = {
            tweets: this.tweets
          };
        },  
        error => this.errorMessage = <any>error
      );
  }

  buildSVG(): void{
   this.streamContainer = this.host.append('div');
  }

  setSearchTerm(term:string){
    if (this.stream){
      this.stream.unsubscribe();
      this.tweets=[];
    }
    this.stream = this._tweetService.setSearchTerm(term)
    .subscribe(
      ()=>console.log('search term set'),
      error => this.errorMessage = <any>error
    );
  }
}
