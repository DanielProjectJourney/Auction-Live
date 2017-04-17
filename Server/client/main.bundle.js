webpackJsonp([1,5],{

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebSocketService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WebSocketService = (function () {
    function WebSocketService() {
    }
    WebSocketService.prototype.createObservableSocket = function (url, id) {
        var _this = this;
        this.ws = new WebSocket(url);
        return new __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["Observable"](function (observer) {
            _this.ws.onmessage = function (event) { return observer.next(event.data); };
            _this.ws.onerror = function (event) { return observer.error(event); };
            _this.ws.onclose = function (event) { return observer.complete(); };
            _this.ws.onopen = function (event) { return _this.sendMessage({ productId: id }); };
            return function () { return _this.ws.close(); };
        }).map(function (message) { return JSON.parse(message); });
    };
    WebSocketService.prototype.sendMessage = function (message) {
        this.ws.send(JSON.stringify(message));
    };
    return WebSocketService;
}());
WebSocketService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["e" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], WebSocketService);

//# sourceMappingURL=/Users/daniel/Downloads/Magic PI CMS/auction/src/web-socket.service.js.map

/***/ }),

/***/ 194:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 194;


/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(204);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/daniel/Downloads/Magic PI CMS/auction/src/main.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Hi I am daniel!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(380),
        styles: [__webpack_require__(367)]
    })
], AppComponent);

//# sourceMappingURL=/Users/daniel/Downloads/Magic PI CMS/auction/src/app.component.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__navbar_navbar_component__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__footer_footer_component__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__search_search_component__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__product_product_component__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__stars_stars_component__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__product_detail_product_detail_component__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__home_home_component__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_product_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_web_socket_service__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pipe_filter_pipe__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__video_video_component__ = __webpack_require__(213);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var routeConfig = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_13__home_home_component__["a" /* HomeComponent */] },
    { path: 'product/:productId', component: __WEBPACK_IMPORTED_MODULE_12__product_detail_product_detail_component__["a" /* ProductDetailComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_8__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_9__search_search_component__["a" /* SearchComponent */],
            __WEBPACK_IMPORTED_MODULE_10__product_product_component__["a" /* ProductComponent */],
            __WEBPACK_IMPORTED_MODULE_11__stars_stars_component__["a" /* StarsComponent */],
            __WEBPACK_IMPORTED_MODULE_12__product_detail_product_detail_component__["a" /* ProductDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_13__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_16__pipe_filter_pipe__["a" /* FilterPipe */],
            __WEBPACK_IMPORTED_MODULE_17__video_video_component__["a" /* VideoComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routeConfig),
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* ReactiveFormsModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_14__shared_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_15__shared_web_socket_service__["a" /* WebSocketService */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_common__["a" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* HashLocationStrategy */] }],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=/Users/daniel/Downloads/Magic PI CMS/auction/src/app.module.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__(381),
        styles: [__webpack_require__(368)]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=/Users/daniel/Downloads/Magic PI CMS/auction/src/footer.component.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__(382),
        styles: [__webpack_require__(369)]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=/Users/daniel/Downloads/Magic PI CMS/auction/src/home.component.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-navbar',
        template: __webpack_require__(383),
        styles: [__webpack_require__(370)]
    }),
    __metadata("design:paramtypes", [])
], NavbarComponent);

//# sourceMappingURL=/Users/daniel/Downloads/Magic PI CMS/auction/src/navbar.component.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (list, filterField, keyword) {
        if (!filterField || !keyword) {
            return list;
        }
        return list.filter(function (item) {
            var fieldValue = item[filterField];
            return fieldValue.indexOf(keyword) >= 0;
        });
    };
    return FilterPipe;
}());
FilterPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Pipe */])({
        name: 'filter'
    })
], FilterPipe);

//# sourceMappingURL=/Users/daniel/Downloads/Magic PI CMS/auction/src/filter.pipe.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_product_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_web_socket_service__ = __webpack_require__(116);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductDetailComponent = (function () {
    function ProductDetailComponent(routeInfo, productService, wsService) {
        this.routeInfo = routeInfo;
        this.productService = productService;
        this.wsService = wsService;
        this.newRating = 0;
        this.newComment = "";
        this.isCommentHidden = true;
        this.isWatched = false;
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var productId = this.routeInfo.snapshot.params["productId"];
        this
            .productService
            .getProduct(productId)
            .subscribe(function (product) {
            _this.product = product;
            _this.currentBid = product.price;
        });
        this
            .productService
            .getCommentsForProductId(productId)
            .subscribe(function (comments) { return _this.comments = comments; });
    };
    ProductDetailComponent.prototype.addComment = function () {
        var comment = new __WEBPACK_IMPORTED_MODULE_2__shared_product_service__["b" /* Comment */](0, this.product.id, new Date().toISOString(), "SomeOne", this.newRating, this.newComment);
        this
            .comments
            .unshift(comment);
        var sum = this
            .comments
            .reduce(function (sum, comment) { return sum + comment.rating; }, 0);
        this.product.rating = sum / this.comments.length;
        this.newComment = null;
        this.newRating = 0;
        this.isCommentHidden = true;
    };
    ProductDetailComponent.prototype.watchProduct = function () {
        var _this = this;
        if (this.subscription) {
            this
                .subscription
                .unsubscribe();
            this.isWatched = false;
            this.subscription = null;
        }
        else {
            this.isWatched = true;
            this.isWatched = !this.isWatched;
            this.subscription = this
                .wsService
                .createObservableSocket("ws://localhost:8085", this.product.id)
                .subscribe(function (products) {
                var product = products.find(function (p) { return p.productId === _this.product.id; });
                _this.currentBid = product.bid;
            });
        }
    };
    return ProductDetailComponent;
}());
ProductDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({ selector: 'app-product-detail', template: __webpack_require__(384), styles: [__webpack_require__(371)] }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_product_service__["a" /* ProductService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_web_socket_service__["a" /* WebSocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_web_socket_service__["a" /* WebSocketService */]) === "function" && _c || Object])
], ProductDetailComponent);

var _a, _b, _c;
//# sourceMappingURL=/Users/daniel/Downloads/Magic PI CMS/auction/src/product-detail.component.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_product_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductComponent = (function () {
    function ProductComponent(productService) {
        this.productService = productService;
        this.imgUrl = 'http://placehold.it/320x150';
    }
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.products = this.productService.getProducts();
        this.productService.searchEvent.subscribe(function (params) { return _this.products = _this.productService.search(params); });
    };
    return ProductComponent;
}());
ProductComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-product',
        template: __webpack_require__(385),
        styles: [__webpack_require__(372)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_product_service__["a" /* ProductService */]) === "function" && _a || Object])
], ProductComponent);

var _a;
//# sourceMappingURL=/Users/daniel/Downloads/Magic PI CMS/auction/src/product.component.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_product_service__ = __webpack_require__(64);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchComponent = (function () {
    function SearchComponent(productService) {
        this.productService = productService;
        var fb = new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* FormBuilder */]();
        this.formModel = fb.group({
            title: ['', __WEBPACK_IMPORTED_MODULE_0__angular_forms__["d" /* Validators */].minLength(3)],
            price: [null, this.positiveNumberValidator],
            category: ['-1']
        });
    }
    SearchComponent.prototype.ngOnInit = function () {
        this.categories = this.productService.getAllCategories();
    };
    SearchComponent.prototype.positiveNumberValidator = function (control) {
        if (!control.value) {
            return null;
        }
        var price = parseInt(control.value);
        if (price > 0) {
            return null;
        }
        else {
            return { positiveNumber: true };
        }
    };
    SearchComponent.prototype.onSearch = function () {
        if (this.formModel.valid) {
            console.log(this.formModel.value);
            this.productService.searchEvent.emit(this.formModel.value);
        }
    };
    return SearchComponent;
}());
SearchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_13" /* Component */])({
        selector: 'app-search',
        template: __webpack_require__(386),
        styles: [__webpack_require__(373)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_product_service__["a" /* ProductService */]) === "function" && _a || Object])
], SearchComponent);

var _a;
//# sourceMappingURL=/Users/daniel/Downloads/Magic PI CMS/auction/src/search.component.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StarsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StarsComponent = (function () {
    function StarsComponent() {
        this.rating = 0;
        this.ratingChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */]();
        this.readonly = true;
    }
    StarsComponent.prototype.ngOnInit = function () { };
    StarsComponent.prototype.ngOnChanges = function (changes) {
        this.stars = [];
        for (var i = 1; i <= 5; i++) {
            this
                .stars
                .push(i > this.rating);
        }
    };
    StarsComponent.prototype.clickStar = function (index) {
        if (!this.readonly) {
            this.rating = index + 1;
            this.ngOnInit();
            this
                .ratingChange
                .emit(this.rating);
        }
    };
    return StarsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Number)
], StarsComponent.prototype, "rating", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */]) === "function" && _a || Object)
], StarsComponent.prototype, "ratingChange", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Boolean)
], StarsComponent.prototype, "readonly", void 0);
StarsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({ selector: 'app-stars', template: __webpack_require__(387), styles: [__webpack_require__(374)] }),
    __metadata("design:paramtypes", [])
], StarsComponent);

var _a;
//# sourceMappingURL=/Users/daniel/Downloads/Magic PI CMS/auction/src/stars.component.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VideoComponent = (function () {
    function VideoComponent() {
    }
    VideoComponent.prototype.ngOnInit = function () {
    };
    return VideoComponent;
}());
VideoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-video',
        template: __webpack_require__(388),
        styles: [__webpack_require__(375)]
    }),
    __metadata("design:paramtypes", [])
], VideoComponent);

//# sourceMappingURL=/Users/daniel/Downloads/Magic PI CMS/auction/src/video.component.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/daniel/Downloads/Magic PI CMS/auction/src/environment.js.map

/***/ }),

/***/ 367:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(24)();
// imports


// module
exports.push([module.i, ".carousel-container {\n    margin-bottom: 40px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 368:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(24)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 369:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(24)();
// imports


// module
exports.push([module.i, ".carousel-container {\n    margin-bottom: 40px;\n}  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 370:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(24)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 371:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(24)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 372:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(24)();
// imports


// module
exports.push([module.i, "img {\n    height: 150px;\n    width: 300px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 373:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(24)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 374:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(24)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 375:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(24)();
// imports


// module
exports.push([module.i, "video {\n    height: 50%;\n    width: 100%;\n    -o-object-fit: fill;\n       object-fit: fill;\n\n}\n\n/*audio { \n   display:none;\n}*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 380:
/***/ (function(module, exports) {

module.exports = "\n  <app-navbar></app-navbar>\n  <div class=\"container\">\n    <div class=\"row\">\n \n      <div class=\"col-md-3\">\n        <app-search></app-search>\n      </div>\n      \n      <div class=\"col-md-9\">\n       <router-outlet></router-outlet>\n      </div>\n      \n    </div>\n  </div>\n\n  <app-footer></app-footer>"

/***/ }),

/***/ 381:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"> \n  <hr>\n  <footer>\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <p>Daniel Angular 4.0 Project</p>\n      </div>\n    </div>\n  </footer>\n</div>"

/***/ }),

/***/ 382:
/***/ (function(module, exports) {

module.exports = "<div class=\"row \">\n  <!--<app-carousel></app-carousel>-->\n  <app-video></app-video>\n</div>\n\n\n<div class=\"row\">\n  <app-product> </app-product>\n</div>"

/***/ }),

/***/ 383:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n \n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-ex1-collapse\">\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a href=\"#\" class=\"navbar-brand\">Auction Live</a>\n    </div>\n    \n    <div class=\"collapse navbar-collapse navbar-ex1-collapse\">\n      <ul class=\"nav navbar-nav\">\n      <li><a href=\"https://baniel.github.io/\" target=\"_blank\">My Website</a></li>\n      <li><a href=\"https://www.linkedin.com/feed/\" target=\"_blank\">My Linkedin</a></li>\n      <li><a href=\"https://github.com/Baniel\" target=\"_blank\">My Github</a></li>\n      </ul>\n    </div>\n  </div>\n\n</nav>"

/***/ }),

/***/ 384:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"thumbnail\">\n  <img [src]=\"product?.img\">\n  <div>\n    <h4 class=\"pull-right\">${{product?.price}} </h4>\n    <h4> {{product?.title}}</h4>\n    <p> {{product?.desc}}</p>\n  </div>\n  <div>\n    <p class=\"pull-right\">{{comments?.length}}</p>\n    <p>\n      <app-stars [rating]=\"product?.rating\"></app-stars>\n    </p>\n  </div>\n</div>\n\n<div class=\"thumbnail\"> \n  <button class=\"btn btn-default btn-lg\" [class.active]=\"isWatched\"\n  (click)=\"watchProduct()\">\n    {{isWatched? 'Cancel Subscribe': 'Subscribe'}}\n  </button>\n  <label >Last Price: ${{currentBid | number: '.2-2'}} </label>\n</div>\n\n\n<div class=\"well\">\n\n  <div>\n    <button class=\"btn btn-success\" (click)=\"isCommentHidden = !isCommentHidden\"> Say Someting...</button>\n  </div>\n\n  <div [hidden]=\"isCommentHidden\">\n    <div><app-stars [(rating)]=\"newRating\" [readonly]=\"false\"></app-stars></div>\n    <div>\n      <textarea [(ngModel)]=\"newComment\" cols=\"75\" rows=\"5\"></textarea>\n    </div>\n    <div>\n      <button class=\"btn\" (click)=\"addComment()\"> Submit</button>\n    </div>\n  </div>\n\n\n\n\n  <div class=\"row\" *ngFor=\"let comment of comments\">\n    <hr>\n    <div class=\"col-md-12\">\n      <app-stars [rating]=\"comment.rating\"></app-stars>\n      <span>{{comment.user}}</span>\n      <span class=\"pull-right\">{{comment.timestamp}}</span>\n      <p>{{comment.content}}</p>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 385:
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let product of products | async\" class=\"col-md-4 col-sm-4 col-lg-4\">\n  <div class=\"thumbnail\">\n    <img [src]=\"product.img\" >\n    <div class=\"caption\">\n      <h4 class=\"pull-right\">{{product.price}}</h4>\n      <h4><a [routerLink]=\"['/product',product.id]\">{{product.title }}</a></h4>\n      <p>{{product.desc}}</p>\n    </div>\n    <div>\n      <app-stars [rating] = \"product.rating\" ></app-stars>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 386:
/***/ (function(module, exports) {

module.exports = "<div>\n<form [formGroup]=\"formModel\" (ngSubmit)=\"onSearch()\" novalidate >\n\n  <div class=\"form-group\" [class.has-error]=\"formModel.hasError('minlength','title')\">\n    <label for=\"productTitle\">Nick Name</label>\n    <input formControlName=\"title\" type=\"text\" id=\"productTitle\" placeholder=\"Nick Name\" class=\"form-control\">\n    <span class=\"help-block\" [class.hidden]=\"!formModel.hasError('minlength','title')\">\n      At least 3 character!!!\n    </span>\n  </div>\n\n   <div class=\"form-group\" [class.has-error]=\"formModel.hasError('positiveNumber','price')\">\n    <label for=\"productTitle\"> Commission</label>\n    <input formControlName=\"price\" type=\"number\" id=\"productPrice\" placeholder=\"Price\" class=\"form-control\">\n     <span class=\"help-block\" [class.hidden]=\"!formModel.hasError('positiveNumber','price')\">\n     No Positive!!!\n    </span>\n   </div>\n\n  <div class=\"form-group\">\n    <label for=\"productCategory\"> Superpower Category</label>\n    <select formControlName=\"category\" id=\"productCategory\" class=\"form-control\">\n      <option value=\"-1\"> All Categories</option>\n      <option *ngFor=\"let category of categories\" [value]=\"category\">{{category}}</option>\n    </select>\n   </div>\n\n    <div class=\"form-group\">\n      <button type=\"submit\" class=\"btn btn-primary btn-block\">Search</button>\n    </div>\n\n</form>\n</div>"

/***/ }),

/***/ 387:
/***/ (function(module, exports) {

module.exports = "<p>\n  <span *ngFor=\"let star of stars; let i=index;\" class=\"glyphicon glyphicon-star \" [class.glyphicon-star-empty]=\"star\" (click)=\"clickStar(i)\"></span>\n  <span>{{rating}} star</span>\n\n</p>"

/***/ }),

/***/ 388:
/***/ (function(module, exports) {

module.exports = "\n<video autoplay loop >\n  <source src=\"../../assets/Video/SuperPower.mp4\" type=\"video/mp4\"> \n</video>\n\n<audio  autoplay loop>\n    <source src=\"../../assets/Music/Loop.m4a\" type=\"audio/mpeg\">\n</audio>"

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* unused harmony export ProductSearchParams */
/* unused harmony export Product */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Comment; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductService = (function () {
    function ProductService(http) {
        this.http = http;
        this.searchEvent = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["d" /* EventEmitter */]();
    }
    ProductService.prototype.getAllCategories = function () {
        return ["power", 'mind'];
    };
    ProductService.prototype.getProducts = function () {
        return this
            .http
            .get("/api/")
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.getProduct = function (id) {
        return this
            .http
            .get("/api/product/" + id)
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.getCommentsForProductId = function (id) {
        return this
            .http
            .get("/api/product/" + id + "/comments")
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.search = function (params) {
        return this.http.get("/api/products", { search: this.encodeParams(params) }).map(function (res) { return res.json(); });
    };
    ProductService.prototype.encodeParams = function (params) {
        return Object.keys(params)
            .filter(function (key) { return params[key]; })
            .reduce(function (sum, key) {
            sum.append(key, params[key]);
            return sum;
        }, new __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* URLSearchParams */]());
    };
    return ProductService;
}());
ProductService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["e" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Http */]) === "function" && _a || Object])
], ProductService);

var ProductSearchParams = (function () {
    function ProductSearchParams(title, price, category) {
        this.title = title;
        this.price = price;
        this.category = category;
    }
    return ProductSearchParams;
}());

var Product = (function () {
    function Product(id, title, price, rating, desc, categories) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.rating = rating;
        this.desc = desc;
        this.categories = categories;
    }
    return Product;
}());

var Comment = (function () {
    function Comment(id, productId, timestamp, user, rating, content) {
        this.id = id;
        this.productId = productId;
        this.timestamp = timestamp;
        this.user = user;
        this.rating = rating;
        this.content = content;
    }
    return Comment;
}());

var _a;
//# sourceMappingURL=/Users/daniel/Downloads/Magic PI CMS/auction/src/product.service.js.map

/***/ }),

/***/ 655:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(195);


/***/ })

},[655]);
//# sourceMappingURL=main.bundle.js.map