import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { TweetComponent } from './tweetComponent/tweet.component'
import { ScatterPlotComponent } from './ScatterPlotComponent/scatterplot.component'

@NgModule({
  declarations: [
    AppComponent,
    TweetComponent,
    ScatterPlotComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
