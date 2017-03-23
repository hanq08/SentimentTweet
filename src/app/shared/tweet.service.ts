import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

@Injectable()
export class TweetService {
  private socket;
  
  constructor (private _http: Http) { }

  connectToStream() {
    let observable = new Observable(observer => {
      this.socket = io();
      this.socket.on('tweet', (tweet) => {
        observer.next(tweet);
      });
      return () => {
        console.log("disconnected");
        this.socket.disconnect();
      }; 
    })
    return observable;
  }
  disconnectToStream(){
    this.socket.disconnect();
  }

  connectSearchTerm(term: string) : Observable<any>{
    let observable = new Observable(observer => {
      this.socket = io();
      this.socket.on(term, (tweet) => {
        observer.next(tweet);
      });
    })
    return observable;
  }

  setSearchTerm(searchTerm: string): Observable<any> {
    console.log(`/stream/${searchTerm}`);
    return this._http.get(`/stream/${searchTerm}`)
      .map(this.extractData)
      .catch(this.handleError);
  }

  closeStream(){
    console.log("closing");
    return this._http.get(`/close`);
  }
  private extractData(res: Response) {
    console.log(res);
    let body = res.json();
    return body.text || {};
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Promise.reject(errMsg);
  }
}