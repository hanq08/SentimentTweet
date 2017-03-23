import { Component, ElementRef, OnInit, HostListener } from '@angular/core';
import * as D3 from 'd3/index';
import { Http, Response } from '@angular/http';
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
  connect;

  constructor(private _element:ElementRef, private _tweetService: TweetService){
    this.host = D3.select(this._element.nativeElement);
  }
  @HostListener('window:beforeunload')
  close(){
    console.log("closed");
    this.tweets = [];
    this.twitterState.tweets = [];
    this._tweetService.closeStream().subscribe();
  }
  ngOnInit(){
    this.buildSVG();
    //this.connectToTweetStream();
  }

   connectToTweetStream() {
    this.connect = this._tweetService.connectToStream()
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

  connectSearchTerm(term: string){
    this._tweetService.connectSearchTerm(term)
    .subscribe(
      tweet => {
          this.tweets.push(tweet as Tweet);
          this.twitterState = {
            tweets: this.tweets
          };
        },  
        error => this.errorMessage = <any>error
    );
  }

  setSearchTerm(term:string){
    if (this.stream){
      this._tweetService.disconnectToStream();
      this.stream.unsubscribe();
      this.tweets=[];
      this.twitterState.tweets = [];
    }
    this.connectSearchTerm(term);
    this.stream = this._tweetService.setSearchTerm(term).subscribe();
  }
}
