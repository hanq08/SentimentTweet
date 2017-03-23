webpackJsonp([1,4],{

/***/ 1092:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(116)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1093:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(116)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1094:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(116)();
// imports


// module
exports.push([module.i, ".tweet {\r\n  margin-top: 5px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1099:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 1100:
/***/ (function(module, exports) {

module.exports = "<div class = \"container\">\n    <div class=\"col-md-12\">\n        <label for=\"term\">Track Most Recent Tweets containing</label>\n        <input type=\"text\" id=\"term\" name=\"term\" [(ngModel)]=\"term\" placeholder=\"search term\" required/>\n        <button color=\"primary\" (click)=\"setSearchTerm(term)\">Search</button>\n        <p>Calculation may take 10 to 20 seconds</p>\n    </div>\n<div class=\"container\">\n  <div class=\"col-md-6\">\n      <tweet-component [twitterState]=\"twitterState\"></tweet-component>\n  </div>\n  <div id=\"scatterplot\" class=\"col-md-6\">\n      <scatterplot-component [twitterState]=\"twitterState\"></scatterplot-component>\n      <div>\n      <h3>What does the graph mean?</h3>\n      <p> Dot Radius: User statuses count (How active the user is?)</p>\n      <p> Green: This is a positive tweet about the query term </p>\n      <p> Red: This is a negative tweet about the query term </p>\n      </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ 1101:
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let tweet of latestTweets\" class=\"tweet\">\r\n    <md-card-header>\r\n      <img md-card-avatar [src]=\"tweet.profile_image_url\">\r\n      <md-card-title><a href=\"http://twitter.com/{{tweet.username}}\" target=\"_blank\">@{{tweet.username}}</a></md-card-title>\r\n      <md-card-subtitle>{{tweet.created_at | date: 'medium'}}</md-card-subtitle>\r\n    </md-card-header>\r\n    <md-card-content>\r\n      <p>{{tweet.text}}</p>\r\n      <p>Sentiment result: {{tweet.sentiment_result}}</p>\r\n    </md-card-content>\r\n</div>"

/***/ }),

/***/ 1156:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1157:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(591);


/***/ }),

/***/ 478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TwitterState; });
var TwitterState = (function () {
    function TwitterState() {
    }
    return TwitterState;
}());
//# sourceMappingURL=twitterState.js.map

/***/ }),

/***/ 590:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 590;


/***/ }),

/***/ 591:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(717);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(739);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(742);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 737:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_index__ = __webpack_require__(568);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_twitterState__ = __webpack_require__(478);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScatterPlotComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ScatterPlotComponent = (function () {
    function ScatterPlotComponent(_element) {
        this._element = _element;
        this.host = __WEBPACK_IMPORTED_MODULE_1_d3_index__["select"](this._element.nativeElement);
    }
    ScatterPlotComponent.prototype.ngOnChanges = function () {
        this.setup();
        this.buildSVG();
        this.populate();
        this.drawXAxis();
        this.drawYAxis();
    };
    ScatterPlotComponent.prototype.setup = function () {
        this.margin = {
            top: 15,
            right: 50,
            bottom: 40,
            left: 50
        };
        this.width = document.querySelector('#scatterplot').clientWidth - this.margin.left - this.margin.right;
        this.height = this.width * 0.6 - this.margin.bottom - this.margin.top;
        this.xScale = __WEBPACK_IMPORTED_MODULE_1_d3_index__["scaleLinear"]().range([0, this.width]);
        this.yScale = __WEBPACK_IMPORTED_MODULE_1_d3_index__["scaleLinear"]().range([this.height, 0]);
        this.zScale = __WEBPACK_IMPORTED_MODULE_1_d3_index__["scaleLinear"]().range([2, 15]);
    };
    ScatterPlotComponent.prototype.buildSVG = function () {
        this.host.html('');
        this.svg = this.host.append('svg')
            .attr('width', this.width + this.margin.left + this.margin.right)
            .attr('height', this.height + this.margin.top + this.margin.bottom)
            .append('g')
            .attr('transform', "translate(" + this.margin.left + "," + this.margin.top + ")");
    };
    ScatterPlotComponent.prototype.drawXAxis = function () {
        this.xAxis = __WEBPACK_IMPORTED_MODULE_1_d3_index__["axisBottom"](this.xScale)
            .ticks(5)
            .tickPadding(15);
        this.svg.append('g')
            .attr('class', 'x axis')
            .attr('transform', "translate(0," + this.height + ")")
            .call(this.xAxis)
            .append('text')
            .attr('class', 'label')
            .attr('x', this.width)
            .attr('y', -6)
            .style('text-anchor', 'end')
            .style('fill', 'grey')
            .text('Followers');
    };
    ScatterPlotComponent.prototype.drawYAxis = function () {
        this.yAxis = __WEBPACK_IMPORTED_MODULE_1_d3_index__["axisLeft"](this.yScale)
            .ticks(5)
            .tickPadding(10);
        this.svg.append('g')
            .attr('class', 'y axis')
            .call(this.yAxis)
            .append('text')
            .attr('class', 'label')
            .attr('transform', 'rotate(-90)')
            .attr('y', 6)
            .attr('dy', '.71em')
            .style('text-anchor', 'end')
            .style('fill', 'grey')
            .text('Following');
    };
    ScatterPlotComponent.prototype.getMax = function (metric) {
        var metricArray = [];
        if (this.twitterState.tweets) {
            this.twitterState.tweets.forEach(function (tweet) {
                metricArray.push(tweet[metric]);
            });
            return __WEBPACK_IMPORTED_MODULE_1_d3_index__["max"](metricArray);
        }
    };
    ScatterPlotComponent.prototype.getColor = function (sentiment) {
        return sentiment == 'positive' ? 'green' : 'red';
    };
    ScatterPlotComponent.prototype.populate = function () {
        var _this = this;
        if (this.twitterState.tweets) {
            this.xScale.domain([0, this.getMax('followers_count') > 10000 ? 10000 : this.getMax('followers_count')]);
            this.yScale.domain([0, this.getMax('following_count')]);
            this.zScale.domain([0, this.getMax('statuses_count')]);
            this.svg.selectAll('.dot')
                .data(this.twitterState.tweets)
                .enter().append('circle')
                .attr('class', 'dot')
                .attr('r', function (d) { return _this.zScale(d.statuses_count); })
                .attr('cx', function (d) { return _this.xScale(d.followers_count > 10000 ? 10000 : d.followers_count); })
                .attr('cy', function (d) { return _this.yScale(d.following_count); })
                .style('fill', function (d) { return _this.getColor(d.sentiment_result); })
                .style('opacity', 0.4)
                .style('cursor', 'pointer')
                .on('click', function (d) {
                window.open("http://twitter.com/" + d.username);
            })
                .append('title')
                .text(function (d) { return ("Followers: " + d.followers_count + ",\n              Following: " + d.following_count + ",\n              Tweets: " + d.statuses_count); });
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_twitterState__["a" /* TwitterState */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_twitterState__["a" /* TwitterState */]) === 'function' && _a) || Object)
    ], ScatterPlotComponent.prototype, "twitterState", void 0);
    ScatterPlotComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Component */])({
            selector: 'scatterplot-component',
            template: __webpack_require__(1099),
            styles: [__webpack_require__(1092)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ElementRef */]) === 'function' && _b) || Object])
    ], ScatterPlotComponent);
    return ScatterPlotComponent;
    var _a, _b;
}());
//# sourceMappingURL=scatterplot.component.js.map

/***/ }),

/***/ 738:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_index__ = __webpack_require__(568);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_tweet_service__ = __webpack_require__(740);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(_element, _tweetService) {
        this._element = _element;
        this._tweetService = _tweetService;
        this.stream = null;
        this.tweets = [];
        this.twitterState = {};
        this.host = __WEBPACK_IMPORTED_MODULE_1_d3_index__["select"](this._element.nativeElement);
    }
    AppComponent.prototype.close = function () {
        console.log("closed");
        this.tweets = [];
        this.twitterState.tweets = [];
        this._tweetService.closeStream().subscribe();
    };
    AppComponent.prototype.ngOnInit = function () {
        this.buildSVG();
        //this.connectToTweetStream();
    };
    AppComponent.prototype.connectToTweetStream = function () {
        var _this = this;
        this.connect = this._tweetService.connectToStream()
            .subscribe(function (tweet) {
            _this.tweets.push(tweet);
            if (_this.tweets.length > 200) {
                _this.tweets = [];
            }
            _this.twitterState = {
                tweets: _this.tweets
            };
        }, function (error) { return _this.errorMessage = error; });
    };
    AppComponent.prototype.buildSVG = function () {
        this.streamContainer = this.host.append('div');
    };
    AppComponent.prototype.connectSearchTerm = function (term) {
        var _this = this;
        this._tweetService.connectSearchTerm(term)
            .subscribe(function (tweet) {
            _this.tweets.push(tweet);
            _this.twitterState = {
                tweets: _this.tweets
            };
        }, function (error) { return _this.errorMessage = error; });
    };
    AppComponent.prototype.setSearchTerm = function (term) {
        if (this.stream) {
            this._tweetService.disconnectToStream();
            this.stream.unsubscribe();
            this.tweets = [];
            this.twitterState.tweets = [];
        }
        this.connectSearchTerm(term);
        this.stream = this._tweetService.setSearchTerm(term).subscribe();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* HostListener */])('window:beforeunload'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], AppComponent.prototype, "close", null);
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(1100),
            styles: [__webpack_require__(1093)],
            providers: [__WEBPACK_IMPORTED_MODULE_2__shared_tweet_service__["a" /* TweetService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ElementRef */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_tweet_service__["a" /* TweetService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_tweet_service__["a" /* TweetService */]) === 'function' && _b) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 739:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(701);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(738);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tweetComponent_tweet_component__ = __webpack_require__(741);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ScatterPlotComponent_scatterplot_component__ = __webpack_require__(737);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__tweetComponent_tweet_component__["a" /* TweetComponent */],
                __WEBPACK_IMPORTED_MODULE_7__ScatterPlotComponent_scatterplot_component__["a" /* ScatterPlotComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MaterialModule */].forRoot()
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 740:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_socket_io_client__ = __webpack_require__(1148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(577);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TweetService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TweetService = (function () {
    function TweetService(_http) {
        this._http = _http;
    }
    TweetService.prototype.connectToStream = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
            _this.socket = __WEBPACK_IMPORTED_MODULE_3_socket_io_client__();
            _this.socket.on('tweet', function (tweet) {
                observer.next(tweet);
            });
            return function () {
                console.log("disconnected");
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    TweetService.prototype.disconnectToStream = function () {
        this.socket.disconnect();
    };
    TweetService.prototype.connectSearchTerm = function (term) {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
            _this.socket = __WEBPACK_IMPORTED_MODULE_3_socket_io_client__();
            _this.socket.on(term, function (tweet) {
                observer.next(tweet);
            });
        });
        return observable;
    };
    TweetService.prototype.setSearchTerm = function (searchTerm) {
        console.log("/stream/" + searchTerm);
        return this._http.get("/stream/" + searchTerm)
            .map(this.extractData)
            .catch(this.handleError);
    };
    TweetService.prototype.closeStream = function () {
        console.log("closing");
        return this._http.get("/close");
    };
    TweetService.prototype.extractData = function (res) {
        console.log(res);
        var body = res.json();
        return body.text || {};
    };
    TweetService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg);
        return Promise.reject(errMsg);
    };
    TweetService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], TweetService);
    return TweetService;
    var _a;
}());
//# sourceMappingURL=tweet.service.js.map

/***/ }),

/***/ 741:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_twitterState__ = __webpack_require__(478);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TweetComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TweetComponent = (function () {
    function TweetComponent() {
    }
    TweetComponent.prototype.ngOnChanges = function () {
        if (this.twitterState.tweets) {
            this.twitterState.tweets.sort(function (a, b) { return new Date(b.created_at).getTime() - new Date(a.created_at).getTime(); });
            this.latestTweets = this.twitterState.tweets.slice(0, 10);
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Input */])(), 
        __metadata('design:type', Array)
    ], TweetComponent.prototype, "tweets", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_twitterState__["a" /* TwitterState */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_twitterState__["a" /* TwitterState */]) === 'function' && _a) || Object)
    ], TweetComponent.prototype, "twitterState", void 0);
    TweetComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Component */])({
            selector: 'tweet-component',
            template: __webpack_require__(1101),
            styles: [__webpack_require__(1094)],
            animations: [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* trigger */])('flyInOut', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* state */])('in', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* style */])({ transform: 'translateX(0)' })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* transition */])('void => *', [
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* style */])({ transform: 'translateX(-100%)' }),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* animate */])(600)
                    ]),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* transition */])('* => void', [
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* animate */])(600, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* style */])({ transform: 'translateX(100%)' }))
                    ])
                ])
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], TweetComponent);
    return TweetComponent;
    var _a;
}());
//# sourceMappingURL=tweet.component.js.map

/***/ }),

/***/ 742:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ })

},[1157]);
//# sourceMappingURL=main.bundle.js.map