webpackJsonp([1,4],{

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__model_user_info__ = __webpack_require__(317);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};






let UserService = class UserService {
    constructor(http, af) {
        this.http = http;
        this.af = af;
    }
    getUserInfo() {
        if (localStorage.getItem('uid')) {
            if (!this.userInfo) {
                this.userInfo = new __WEBPACK_IMPORTED_MODULE_5__model_user_info__["a" /* UserInfo */]();
            }
            this.userInfo.uid = localStorage.getItem('uid');
        }
        else {
            this.userInfo = null;
        }
        return this.userInfo;
    }
    login(loginInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.af.auth.login({
                    email: loginInfo.email,
                    password: loginInfo.password
                }, {
                    provider: __WEBPACK_IMPORTED_MODULE_2_angularfire2__["a" /* AuthProviders */].Password,
                    method: __WEBPACK_IMPORTED_MODULE_2_angularfire2__["b" /* AuthMethods */].Password,
                }).then(res => {
                    return res;
                });
            }
            catch (error) {
                return Promise.resolve(error.code);
            }
        });
    }
    logout() {
        console.log('get in user service to logout');
        localStorage.removeItem('uid');
        return true;
    }
};
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
    __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2__["d" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angularfire2__["d" /* AngularFire */]) === 'function' && _b) || Object])
], UserService);
var _a, _b;
//# sourceMappingURL=/Users/idlefox/Documents/nodejs/TaiwanHolic-angular/src/user.service.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__(136);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let LogoutComponent = class LogoutComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    ngOnInit() {
        console.log("logout");
        this.userService.logout();
        this.router.navigate(['index']);
    }
};
LogoutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
        selector: 'app-logout',
        template: __webpack_require__(580),
        styles: [__webpack_require__(568)]
    }), 
    __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
], LogoutComponent);
var _a, _b;
//# sourceMappingURL=/Users/idlefox/Documents/nodejs/TaiwanHolic-angular/src/logout.component.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class UserInfo {
}
/* harmony export (immutable) */ __webpack_exports__["a"] = UserInfo;

//# sourceMappingURL=/Users/idlefox/Documents/nodejs/TaiwanHolic-angular/src/user-info.js.map

/***/ }),

/***/ 352:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 352;


/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(471);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/idlefox/Documents/nodejs/TaiwanHolic-angular/src/main.js.map

/***/ }),

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index_index_component__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__logout_logout_component__ = __webpack_require__(316);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





const routes = [
    { path: 'index', component: __WEBPACK_IMPORTED_MODULE_3__index_index_component__["a" /* IndexComponent */] },
    { path: 'logout', component: __WEBPACK_IMPORTED_MODULE_4__logout_logout_component__["a" /* LogoutComponent */] },
    { path: '', redirectTo: 'index', pathMatch: 'full' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(routes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__index_index_component__["a" /* IndexComponent */]
        ],
        providers: [],
    }), 
    __metadata('design:paramtypes', [])
], AppRoutingModule);
//# sourceMappingURL=/Users/idlefox/Documents/nodejs/TaiwanHolic-angular/src/app-routing.module.js.map

/***/ }),

/***/ 470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__(136);
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



let AppComponent = class AppComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
        router.events.subscribe((val) => {
            if (!val.urlAfterRedirects) {
                console.log(val);
                this.userInfo = this.userService.getUserInfo();
                console.log(this.userInfo);
            }
        });
    }
    ngOnInit() {
        if (!this.userInfo) {
            this.userInfo = this.userService.getUserInfo();
        }
    }
};
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(569),
        styles: [__webpack_require__(557)]
    }), 
    __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
], AppComponent);
var _a, _b;
//# sourceMappingURL=/Users/idlefox/Documents/nodejs/TaiwanHolic-angular/src/app.component.js.map

/***/ }),

/***/ 471:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__user_service__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__header_header_component__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__footer_footer_component__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_routing_module__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__city_city_module__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__itinerary_itinerary_module__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__login_login_module__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__logout_logout_component__ = __webpack_require__(316);
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
















const myFirebaseConfig = {
    apiKey: 'AIzaSyC8wDUxTI7ufGGE9dvuB0IWIOIQn0rEer8',
    authDomain: 'taiwanholic-ff917.firebaseapp.com',
    databaseURL: 'https://taiwanholic-ff917.firebaseio.com',
    storageBucket: 'taiwanholic-ff917.appspot.com',
    messagingSenderId: '1063761420061'
};
const myFirebaseAuthConfig = {
    provider: __WEBPACK_IMPORTED_MODULE_5_angularfire2__["a" /* AuthProviders */].Google,
    method: __WEBPACK_IMPORTED_MODULE_5_angularfire2__["b" /* AuthMethods */].Redirect
};
let AppModule = class AppModule {
};
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_10__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_15__logout_logout_component__["a" /* LogoutComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_11__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_12__city_city_module__["a" /* CityModule */],
            __WEBPACK_IMPORTED_MODULE_13__itinerary_itinerary_module__["a" /* ItineraryModule */],
            __WEBPACK_IMPORTED_MODULE_14__login_login_module__["a" /* LoginModule */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2__["c" /* AngularFireModule */].initializeApp(myFirebaseConfig, myFirebaseAuthConfig)
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__app_service__["a" /* AppService */],
            __WEBPACK_IMPORTED_MODULE_8__user_service__["a" /* UserService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    }), 
    __metadata('design:paramtypes', [])
], AppModule);
//# sourceMappingURL=/Users/idlefox/Documents/nodejs/TaiwanHolic-angular/src/app.module.js.map

/***/ }),

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service__ = __webpack_require__(56);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let ActivityComponent = class ActivityComponent {
    constructor(router, appService) {
        this.router = router;
        this.appService = appService;
        this.arr = Array;
        router.events.subscribe((event) => {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* NavigationEnd */]) {
                this.getUrlParams();
                this.getActivities();
            }
        });
    }
    ngOnInit() {
        this.getUrlParams();
        this.getActivities();
    }
    getUrlParams() {
        let url = this.router.url;
        let lastSlashIndex = url.lastIndexOf('/') + 1;
        this.activity = url.substring(lastSlashIndex) || 'food';
        let secondLastSlashIndex = url.lastIndexOf('/', lastSlashIndex - 2);
        this.area = url.substring(secondLastSlashIndex + 1, lastSlashIndex - 1);
    }
    getActivities() {
        let options = {};
        options.area = this.area;
        switch (this.activity) {
            case "food":
                this.appService.getRestaurants(options).subscribe(res => this.itemList = res);
                break;
            case "fun":
                console.log('fun');
                this.appService.getSpots(options).subscribe(res => this.itemList = res);
                break;
            case "stay":
                console.log('stay');
                this.appService.getStays(options).subscribe(res => this.itemList = res);
                break;
            case "transport":
                break;
            default:
                break;
        }
    }
};
ActivityComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
        selector: 'app-activity',
        template: __webpack_require__(570),
        styles: [__webpack_require__(558)]
    }), 
    __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppService */]) === 'function' && _b) || Object])
], ActivityComponent);
var _a, _b;
//# sourceMappingURL=/Users/idlefox/Documents/nodejs/TaiwanHolic-angular/src/activity.component.js.map

/***/ }),

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service__ = __webpack_require__(56);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AreaComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let AreaComponent = class AreaComponent {
    constructor(router, appService) {
        this.router = router;
        this.appService = appService;
        this.arr = Array;
        this.restaurants = [];
        this.spots = [];
        this.stays = [];
        router.events.subscribe((val) => {
            if (!val.urlAfterRedirects) {
                this.area = this.getArea(val.url);
                this.initData();
            }
        });
    }
    ngOnInit() {
        this.area = this.getArea();
        this.initData();
    }
    initData() {
        this.getRestaurants();
        this.getSpots();
        this.getStays();
    }
    getArea(url_string) {
        let url = url_string || this.router.url;
        let areaParam = url.substring(url.lastIndexOf('/') + 1) || 'northern';
        return areaParam;
    }
    getRestaurants() {
        let options = {};
        options.area = this.area;
        this.appService.getRestaurants(options).subscribe(res => this.restaurants = res);
    }
    getSpots() {
        let options = {};
        options.area = this.area;
        this.appService.getSpots(options).subscribe(res => this.spots = res);
    }
    getStays() {
        let options = {};
        options.area = this.area;
        this.appService.getStays(options).subscribe(res => this.stays = res);
    }
};
AreaComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
        selector: 'app-city-area',
        template: __webpack_require__(571),
        styles: [__webpack_require__(559)]
    }), 
    __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppService */]) === 'function' && _b) || Object])
], AreaComponent);
var _a, _b;
//# sourceMappingURL=/Users/idlefox/Documents/nodejs/TaiwanHolic-angular/src/area.component.js.map

/***/ }),

/***/ 474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CityComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let CityComponent = class CityComponent {
    constructor() {
    }
    ngOnInit() {
    }
};
CityComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
        template: __webpack_require__(572),
        styles: [__webpack_require__(560)]
    }), 
    __metadata('design:paramtypes', [])
], CityComponent);
//# sourceMappingURL=/Users/idlefox/Documents/nodejs/TaiwanHolic-angular/src/city.component.js.map

/***/ }),

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__city_component__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__area_area_component__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__activity_activity_component__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__detail_detail_component__ = __webpack_require__(476);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CityModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







const routes = [
    { path: 'city', component: __WEBPACK_IMPORTED_MODULE_3__city_component__["a" /* CityComponent */] },
    { path: 'city/:area', component: __WEBPACK_IMPORTED_MODULE_4__area_area_component__["a" /* AreaComponent */] },
    { path: 'city/:area/:activity', component: __WEBPACK_IMPORTED_MODULE_5__activity_activity_component__["a" /* ActivityComponent */] },
    { path: 'detail/:activity/:id', component: __WEBPACK_IMPORTED_MODULE_6__detail_detail_component__["a" /* DetailComponent */] }
];
let CityModule = class CityModule {
};
CityModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forChild(routes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__city_component__["a" /* CityComponent */],
            __WEBPACK_IMPORTED_MODULE_4__area_area_component__["a" /* AreaComponent */],
            __WEBPACK_IMPORTED_MODULE_5__activity_activity_component__["a" /* ActivityComponent */],
            __WEBPACK_IMPORTED_MODULE_6__detail_detail_component__["a" /* DetailComponent */]
        ]
    }), 
    __metadata('design:paramtypes', [])
], CityModule);
//# sourceMappingURL=/Users/idlefox/Documents/nodejs/TaiwanHolic-angular/src/city.module.js.map

/***/ }),

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_activity__ = __webpack_require__(485);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let DetailComponent = class DetailComponent {
    constructor(router, appService) {
        this.router = router;
        this.appService = appService;
        this.arr = Array;
        this.activity = new __WEBPACK_IMPORTED_MODULE_3__model_activity__["a" /* Activity */]();
    }
    ngOnInit() {
        this.getUrlParams();
        this.getActivity();
    }
    getUrlParams() {
        let url = this.router.url;
        let lastSlashIndex = url.lastIndexOf('/') + 1;
        this.activityId = parseInt(url.substring(lastSlashIndex));
        let secondLastSlashIndex = url.lastIndexOf('/', lastSlashIndex - 2);
        this.activityType = url.substring(secondLastSlashIndex + 1, lastSlashIndex - 1);
    }
    getActivity() {
        let options = {};
        options.id = this.activityId;
        switch (this.activityType) {
            case "food":
                this.appService.getRestaurants(options).subscribe(res => {
                    this.activity = res[0];
                });
                break;
            case "fun":
                this.appService.getSpots(options).subscribe(res => this.activity = res[0]);
                break;
            case "stay":
                this.appService.getStays(options).subscribe(res => this.activity = res[0]);
                break;
            case "transport":
                break;
            default:
                break;
        }
    }
};
DetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
        selector: 'app-detail',
        template: __webpack_require__(573),
        styles: [__webpack_require__(561)]
    }), 
    __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppService */]) === 'function' && _b) || Object])
], DetailComponent);
var _a, _b;
//# sourceMappingURL=/Users/idlefox/Documents/nodejs/TaiwanHolic-angular/src/detail.component.js.map

/***/ }),

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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

let FooterComponent = class FooterComponent {
    constructor() {
    }
    ngOnInit() {
    }
};
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__(574),
        styles: [__webpack_require__(562)]
    }), 
    __metadata('design:paramtypes', [])
], FooterComponent);
//# sourceMappingURL=/Users/idlefox/Documents/nodejs/TaiwanHolic-angular/src/footer.component.js.map

/***/ }),

/***/ 478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let HeaderComponent = class HeaderComponent {
    constructor() {
    }
    ngOnInit() {
    }
};
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Input */])(), 
    __metadata('design:type', Object)
], HeaderComponent.prototype, "userInfo", void 0);
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__(575),
        styles: [__webpack_require__(563)]
    }), 
    __metadata('design:paramtypes', [])
], HeaderComponent);
//# sourceMappingURL=/Users/idlefox/Documents/nodejs/TaiwanHolic-angular/src/header.component.js.map

/***/ }),

/***/ 479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(56);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let IndexComponent = class IndexComponent {
    constructor(appService) {
        this.appService = appService;
        this.itineraries = [];
        this.comments = [];
        this.questions = [];
        this.arr = Array;
    }
    ngOnInit() {
        this.getItinerary();
        this.getComments();
        this.getQuestions();
    }
    getItinerary() {
        this.appService.getItineraries()
            .subscribe(res => this.itineraries = res);
    }
    getComments() {
        this.appService.getComments()
            .subscribe(res => this.comments = res);
    }
    getQuestions() {
        let options = {
            limit: 2
        };
        this.appService.getQuestions(options)
            .subscribe(res => this.questions = res);
    }
};
IndexComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
        selector: 'app-index',
        template: __webpack_require__(576),
        styles: [__webpack_require__(564)]
    }), 
    __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]) === 'function' && _a) || Object])
], IndexComponent);
var _a;
//# sourceMappingURL=/Users/idlefox/Documents/nodejs/TaiwanHolic-angular/src/index.component.js.map

/***/ }),

/***/ 480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_itinerary__ = __webpack_require__(486);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let DetailComponent = class DetailComponent {
    constructor(router, appService, domSanitizer) {
        this.router = router;
        this.appService = appService;
        this.domSanitizer = domSanitizer;
        this.arr = Array;
        this.itinerary = new __WEBPACK_IMPORTED_MODULE_4__model_itinerary__["a" /* Itinerary */]();
        // this.itinerary = {
        //   banner_url : "",
        //   file: ""
        // }
    }
    ngOnInit() {
        this.getUrlParams();
        this.getItinerary();
    }
    getUrlParams() {
        let url = this.router.url;
        let lastSlashIndex = url.lastIndexOf('/') + 1;
        this.itineraryId = parseInt(url.substring(lastSlashIndex));
    }
    getItinerary() {
        let options = {};
        options.id = this.itineraryId;
        this.appService.getItineraries(options).subscribe(res => {
            this.itinerary = res[0];
        });
    }
};
DetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
        selector: 'app-detail',
        template: __webpack_require__(577),
        styles: [__webpack_require__(565)]
    }), 
    __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__app_service__["a" /* AppService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__app_service__["a" /* AppService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]) === 'function' && _c) || Object])
], DetailComponent);
var _a, _b, _c;
//# sourceMappingURL=/Users/idlefox/Documents/nodejs/TaiwanHolic-angular/src/detail.component.js.map

/***/ }),

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(56);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItineraryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let ItineraryComponent = class ItineraryComponent {
    constructor(appService) {
        this.appService = appService;
        this.arr = Array;
    }
    ngOnInit() {
        this.getItineraryList();
    }
    getItineraryList() {
        this.appService.getItineraries()
            .subscribe(res => {
            this.itineraryList = res;
        });
    }
};
ItineraryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
        selector: 'app-itinerary',
        template: __webpack_require__(578),
        styles: [__webpack_require__(566)]
    }), 
    __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]) === 'function' && _a) || Object])
], ItineraryComponent);
var _a;
//# sourceMappingURL=/Users/idlefox/Documents/nodejs/TaiwanHolic-angular/src/itinerary.component.js.map

/***/ }),

/***/ 482:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__itinerary_component__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__detail_detail_component__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pipe_safe_url_pipe__ = __webpack_require__(487);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItineraryModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






const routes = [
    { path: 'itinerary', component: __WEBPACK_IMPORTED_MODULE_3__itinerary_component__["a" /* ItineraryComponent */] },
    { path: 'itinerary/:id', component: __WEBPACK_IMPORTED_MODULE_4__detail_detail_component__["a" /* DetailComponent */] }
];
let ItineraryModule = class ItineraryModule {
};
ItineraryModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forChild(routes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__itinerary_component__["a" /* ItineraryComponent */],
            __WEBPACK_IMPORTED_MODULE_4__detail_detail_component__["a" /* DetailComponent */],
            __WEBPACK_IMPORTED_MODULE_5__pipe_safe_url_pipe__["a" /* SafePipe */]
        ]
    }), 
    __metadata('design:paramtypes', [])
], ItineraryModule);
//# sourceMappingURL=/Users/idlefox/Documents/nodejs/TaiwanHolic-angular/src/itinerary.module.js.map

/***/ }),

/***/ 483:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_user_info__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__(136);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let LoginComponent = class LoginComponent {
    constructor(router, userService) {
        this.router = router;
        this.userService = userService;
        this.loginInfo = new __WEBPACK_IMPORTED_MODULE_2__model_user_info__["a" /* UserInfo */]();
        this.isValid = false;
        this.hint = '';
    }
    ngOnInit() {
    }
    verifyForm() {
        if (!this.loginInfo.email) {
            this.isValid = false;
            this.hint = 'Please type your email and password';
            return;
        }
        if (!this.loginInfo.password) {
            this.isValid = false;
            this.hint = 'Please type your email and password';
            return;
        }
        this.isValid = true;
    }
    loginLocal(form) {
        this.userService.login(this.loginInfo)
            .then(res => {
            if (res.uid) {
                localStorage.setItem('uid', res.uid);
                this.router.navigate(['index']);
            }
            else {
                console.log(res);
            }
        });
    }
    loginFacebook() {
        console.log("login facebook");
    }
};
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__(579),
        styles: [__webpack_require__(567)]
    }), 
    __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */]) === 'function' && _b) || Object])
], LoginComponent);
var _a, _b;
//# sourceMappingURL=/Users/idlefox/Documents/nodejs/TaiwanHolic-angular/src/login.component.js.map

/***/ }),

/***/ 484:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_component__ = __webpack_require__(483);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





const routes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_4__login_component__["a" /* LoginComponent */] }
];
let LoginModule = class LoginModule {
};
LoginModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forChild(routes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__login_component__["a" /* LoginComponent */]
        ]
    }), 
    __metadata('design:paramtypes', [])
], LoginModule);
//# sourceMappingURL=/Users/idlefox/Documents/nodejs/TaiwanHolic-angular/src/login.module.js.map

/***/ }),

/***/ 485:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Activity {
    constructor() {
        this.id = 0;
        this.area = "";
        this.city = "";
        this.name = "";
        this.banner_url = "";
        this.photo_url = "";
        this.stars = 1;
        this.price = "low";
        this.pictures = [];
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Activity;

//# sourceMappingURL=/Users/idlefox/Documents/nodejs/TaiwanHolic-angular/src/activity.js.map

/***/ }),

/***/ 486:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Itinerary {
    constructor() {
        this.id = 0;
        this.name = "";
        this.banner_url = "";
        this.photo_url = "";
        this.stars = 1;
        this.area = "";
        this.city = "";
        this.pictures = [];
        this.file = "";
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Itinerary;

//# sourceMappingURL=/Users/idlefox/Documents/nodejs/TaiwanHolic-angular/src/itinerary.js.map

/***/ }),

/***/ 487:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(54);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let SafePipe = class SafePipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
};
SafePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* Pipe */])({ name: 'safe' }), 
    __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]) === 'function' && _a) || Object])
], SafePipe);
var _a;
//# sourceMappingURL=/Users/idlefox/Documents/nodejs/TaiwanHolic-angular/src/safe-url.pipe.js.map

/***/ }),

/***/ 488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
const environment = {
    production: false
};
/* harmony export (immutable) */ __webpack_exports__["a"] = environment;

//# sourceMappingURL=/Users/idlefox/Documents/nodejs/TaiwanHolic-angular/src/environment.js.map

/***/ }),

/***/ 557:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 558:
/***/ (function(module, exports) {

module.exports = ".container {\n  padding: 80px 0; }\n\n.nav-area {\n  padding: 10px;\n  border-top: 1px solid #000000;\n  border-bottom: 2px solid #000000;\n  margin-bottom: 30px; }\n  .nav-area ul,\n  .nav-area li {\n    padding: 0;\n    margin: 0; }\n  .nav-area li {\n    display: inline-block;\n    margin-right: 10px;\n    padding-right: 1em;\n    list-style: none; }\n    .nav-area li a {\n      color: #000000;\n      font-size: 1.5em;\n      font-family: 'Fjalla One', sans-serif;\n      margin: 10px; }\n\n#filter-input .cube-title {\n  text-transform: uppercase;\n  color: #000000;\n  border-top: 4px solid #133d7b;\n  padding-top: 5px;\n  padding-left: 5px;\n  border-left: 1px solid #133d7b;\n  max-width: 100px; }\n\n#filter-input select,\n#filter-input button {\n  display: inline-block; }\n\n#filter-input select {\n  background-color: #FFFFFF;\n  border: 1px solid #BBBBBB;\n  border-radius: 0px;\n  padding-left: 10px; }\n\n.item-list .item {\n  border: 1px solid #bbb;\n  padding: 10px;\n  color: #000;\n  background-color: #fff;\n  margin: 5px 0px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: flex;\n  justify-content: flex-start; }\n  .item-list .item div {\n    line-height: 1.5em; }\n  .item-list .item .glyphicon {\n    margin-right: 0.5em; }\n  .item-list .item .thumbnail {\n    margin-bottom: 0px;\n    -webkit-box-flex: 3;\n        -ms-flex: 3;\n            flex: 3; }\n  .item-list .item .info {\n    margin-left: 2em;\n    -webkit-box-flex: 7;\n        -ms-flex: 7;\n            flex: 7; }\n    .item-list .item .info .title {\n      font-size: 1.125em;\n      font-weight: bold;\n      margin: 1em 0px; }\n    .item-list .item .info .action {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex; }\n      .item-list .item .info .action .pointer {\n        cursor: pointer;\n        color: #0f3e86;\n        font-weight: 500; }\n      .item-list .item .info .action .read-more {\n        margin-left: 0.5em;\n        border-left: 2px solid #000;\n        padding-left: 0.5em; }\n\n#recommends .cube-title {\n  text-transform: uppercase;\n  color: #000000;\n  border-top: 4px solid #133d7b;\n  padding-top: 5px;\n  padding-left: 5px;\n  border-left: 1px solid #133d7b;\n  max-width: 80%; }\n\n#recommends img {\n  width: 100%; }\n"

/***/ }),

/***/ 559:
/***/ (function(module, exports) {

module.exports = ".container {\n  padding: 80px 0; }\n\n.nav-area {\n  padding: 10px;\n  border-top: 1px solid #000000;\n  border-bottom: 2px solid #000000;\n  margin-bottom: 30px; }\n  .nav-area ul,\n  .nav-area li {\n    padding: 0;\n    margin: 0; }\n  .nav-area li {\n    display: inline-block;\n    margin-right: 10px;\n    padding-right: 1em;\n    list-style: none; }\n    .nav-area li a {\n      color: #000000;\n      font-size: 1.5em;\n      font-family: 'Fjalla One', sans-serif;\n      margin: 10px; }\n\n#city-activities {\n  margin-top: 2em;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around; }\n  #city-activities .city-activity {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    padding: 1.5em; }\n    #city-activities .city-activity img {\n      width: 100%; }\n\n#foods .section-title,\n#spots .section-title,\n#stays .section-title {\n  font-size: 1.8em;\n  text-transform: uppercase; }\n\n#foods .flex-justify,\n#spots .flex-justify,\n#stays .flex-justify {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n  #foods .flex-justify .flex-item,\n  #spots .flex-justify .flex-item,\n  #stays .flex-justify .flex-item {\n    width: 33.33%;\n    margin: 0 auto; }\n    #foods .flex-justify .flex-item .photo,\n    #spots .flex-justify .flex-item .photo,\n    #stays .flex-justify .flex-item .photo {\n      height: 180px;\n      text-align: center; }\n      #foods .flex-justify .flex-item .photo img,\n      #spots .flex-justify .flex-item .photo img,\n      #stays .flex-justify .flex-item .photo img {\n        max-height: 100%;\n        width: auto; }\n    #foods .flex-justify .flex-item .name,\n    #spots .flex-justify .flex-item .name,\n    #stays .flex-justify .flex-item .name {\n      max-width: 80%;\n      font-size: 1.2em;\n      margin: 0 auto;\n      margin-top: 1em; }\n    #foods .flex-justify .flex-item .stars,\n    #spots .flex-justify .flex-item .stars,\n    #stays .flex-justify .flex-item .stars {\n      text-align: center;\n      margin: 0.3em; }\n    #foods .flex-justify .flex-item .action,\n    #spots .flex-justify .flex-item .action,\n    #stays .flex-justify .flex-item .action {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      margin-top: 1em; }\n      #foods .flex-justify .flex-item .action .to-list,\n      #foods .flex-justify .flex-item .action .to-read,\n      #spots .flex-justify .flex-item .action .to-list,\n      #spots .flex-justify .flex-item .action .to-read,\n      #stays .flex-justify .flex-item .action .to-list,\n      #stays .flex-justify .flex-item .action .to-read {\n        background-color: rgba(19, 61, 134, 0.72);\n        border-radius: 10px;\n        font-size: 0.8em;\n        color: #fff;\n        border: 0px;\n        margin: 0.3em;\n        padding: 0.3em 1em 0.3em 0.6em; }\n        #foods .flex-justify .flex-item .action .to-list .glyphicon,\n        #foods .flex-justify .flex-item .action .to-read .glyphicon,\n        #spots .flex-justify .flex-item .action .to-list .glyphicon,\n        #spots .flex-justify .flex-item .action .to-read .glyphicon,\n        #stays .flex-justify .flex-item .action .to-list .glyphicon,\n        #stays .flex-justify .flex-item .action .to-read .glyphicon {\n          margin: 0 3px; }\n"

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let AppService = class AppService {
    constructor(http) {
        this.http = http;
        this.host_url = "https://warm-coast-59773.herokuapp.com/webapi/";
        this.monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    }
    getData() {
        return this.http.get('https://warm-coast-59773.herokuapp.com/city/northern/food');
    }
    getItineraries(options) {
        let url = this.host_url + "itinerary";
        let params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        let requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]();
        for (let key in options) {
            params.set(key, options[key]);
        }
        requestOptions.search = params;
        return this.http.get(url, requestOptions)
            .map(res => {
            return res.json();
        });
    }
    getComments() {
        let url = this.host_url + "comment";
        return this.http.get(url)
            .map(res => res.json());
    }
    getQuestions(options) {
        let url = this.host_url + "question";
        return this.http.get(url, { search: 'limit=2' })
            .map(function (res) {
            return res.json();
        });
    }
    getRestaurants(options) {
        let url = this.host_url + "restaurant";
        let params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        let requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]();
        for (let key in options) {
            params.set(key, options[key]);
        }
        requestOptions.search = params;
        return this.http.get(url, requestOptions)
            .map(res => {
            return res.json();
        });
    }
    getSpots(options) {
        let url = this.host_url + "spot";
        let params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        let requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]();
        for (let key in options) {
            params.set(key, options[key]);
        }
        requestOptions.search = params;
        return this.http.get(url, requestOptions)
            .map(res => {
            return res.json();
        });
    }
    getStays(options) {
        let url = this.host_url + "stay";
        let params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        let requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]();
        for (let key in options) {
            params.set(key, options[key]);
        }
        requestOptions.search = params;
        return this.http.get(url, requestOptions)
            .map(res => {
            return res.json();
        });
    }
};
AppService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
    __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
], AppService);
var _a;
//# sourceMappingURL=/Users/idlefox/Documents/nodejs/TaiwanHolic-angular/src/app.service.js.map

/***/ }),

/***/ 560:
/***/ (function(module, exports) {

module.exports = ".container {\n  padding: 80px 0; }\n\n#feature-nav {\n  padding: 10px;\n  border-top: 1px solid #000000;\n  border-bottom: 2px solid #000000;\n  margin-bottom: 30px; }\n  #feature-nav ul li {\n    display: inline-block;\n    margin-right: 10px;\n    padding-right: 1em; }\n    #feature-nav ul li a {\n      color: #000000;\n      font-size: 1.2em;\n      font-family: 'Fjalla One', sans-serif;\n      text-transform: uppercase;\n      margin: 10px; }\n\n.city {\n  margin-bottom: 30px; }\n  .city a img {\n    width: 100%;\n    height: auto;\n    opacity: 0.7; }\n  .city a img:hover {\n    opacity: 1; }\n  .city h3.city-title {\n    margin-top: 1em;\n    margin-bottom: 1em;\n    color: #222;\n    font-family: 'Open Sans Condensed', sans-serif;\n    font-size: 2em;\n    text-align: center;\n    font-weight: bold; }\n  .city p.city-paragraph {\n    color: #666; }\n"

/***/ }),

/***/ 561:
/***/ (function(module, exports) {

module.exports = ".cover {\n  height: 270px;\n  width: 100%;\n  background-size: cover;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.cover-title h2 {\n  font-size: 2.5em;\n  color: white; }\n\n.area-title {\n  font-family: 'Fjalla One', sans-serif;\n  font-size: 1.5em;\n  font-weight: bold;\n  text-transform: uppercase;\n  width: 100%;\n  padding-bottom: 5px;\n  border-bottom: 3px solid black; }\n\n.info {\n  margin-top: 4em;\n  margin-bottom: 4em; }\n  .info .basic-info .info-content {\n    padding: 30px;\n    line-height: 2em; }\n    .info .basic-info .info-content .action {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex; }\n    .info .basic-info .info-content div:not(:first-child) {\n      padding-left: 0.5em; }\n    .info .basic-info .info-content .pointer {\n      cursor: pointer;\n      color: #0f3e86;\n      font-weight: 500; }\n\n.pictures .picture {\n  margin: 10px; }\n  .pictures .picture img {\n    width: 100%; }\n"

/***/ }),

/***/ 562:
/***/ (function(module, exports) {

module.exports = ".footer {\n  background-color: #000;\n  padding: 4em; }\n\n.center {\n  margin: 0 auto;\n  text-align: center; }\n\n.social-links {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  margin: 0 0 1.5em 0; }\n  .social-links .social-link {\n    margin: 0 1em; }\n\n.contact span {\n  color: #fff; }\n\n.contact .glyphicon-envelope {\n  margin: 0 0.5em; }\n\n.contact .mail-action {\n  color: #444444;\n  text-transform: uppercase; }\n"

/***/ }),

/***/ 563:
/***/ (function(module, exports) {

module.exports = "#top-bar {\n  background-color: #133d7b;\n  padding: 1em; }\n  #top-bar .justify {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between; }\n\n.logo {\n  height: 20px;\n  width: 160px; }\n  .logo img {\n    width: 100%;\n    height: 100%; }\n\n.top-nav ul,\n.top-nav li {\n  padding: 0;\n  margin: 0; }\n\n.top-nav li {\n  list-style: none;\n  padding: 0 1.5em;\n  border-left: 1px solid rgba(255, 255, 255, 0.3); }\n  .top-nav li a {\n    color: #fff;\n    font-weight: bold;\n    font-size: 0.8em;\n    text-transform: uppercase; }\n  .top-nav li a:hover {\n    color: rgba(255, 255, 255, 0.5);\n    cursor: pointer; }\n\n.top-nav li:first-child {\n  border-left: 0; }\n\n.top-nav ul {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n"

/***/ }),

/***/ 564:
/***/ (function(module, exports) {

module.exports = ".container {\n  text-align: center; }\n\n.cover {\n  background-image: url(\"assets/images/index_cover.png\");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  height: 600px;\n  position: relative; }\n\n.signup {\n  position: absolute;\n  bottom: 3em;\n  left: 50%;\n  background-color: #133D7B;\n  padding: 20px;\n  display: inline-block;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  color: #fff;\n  text-decoration: none; }\n\n#itineraries .itinerary {\n  position: relative;\n  opacity: 0.7;\n  -webkit-transition: opacity 500ms ease;\n  transition: opacity 500ms ease;\n  cursor: pointer; }\n  #itineraries .itinerary .hint {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    color: #fff;\n    font-size: 1.5em;\n    text-align: center; }\n\n#itineraries .itinerary:hover {\n  opacity: 1; }\n\n.order,\n.explore {\n  margin-top: 2em;\n  margin-bottom: 2em;\n  background-color: #133D7B;\n  padding: 20px;\n  display: inline-block;\n  color: #fff;\n  text-decoration: none;\n  -webkit-transition: opacity 500ms ease;\n  transition: opacity 500ms ease;\n  opacity: 1; }\n\n.order:hover,\n.explore:hover {\n  text-decoration: none;\n  color: #fff;\n  opacity: 1; }\n\n#comments {\n  background-color: #eaeaea; }\n  #comments .comment {\n    position: relative;\n    text-align: center;\n    padding: 20px;\n    background-color: #fff;\n    margin: 0 10px; }\n    #comments .comment .title {\n      font-size: 1.125em;\n      font-weight: 500;\n      margin: 5px auto;\n      letter-spacing: 0px; }\n    #comments .comment .content {\n      padding: 10px;\n      text-align: left;\n      margin-bottom: 50px; }\n    #comments .comment .footer {\n      position: absolute;\n      bottom: 20px;\n      left: 50%;\n      width: 100%;\n      -webkit-transform: translate(-50%, 0%);\n              transform: translate(-50%, 0%); }\n      #comments .comment .footer img {\n        border: 1px solid #E0E0E0;\n        padding: 3px;\n        width: 50px;\n        height: 50px;\n        border-radius: 50%;\n        margin-right: 5px; }\n      #comments .comment .footer div {\n        display: inline;\n        margin: 0px 3px; }\n      #comments .comment .footer .username {\n        font-weight: 600;\n        color: #133D7B; }\n      #comments .comment .footer .stars {\n        color: #EDD353; }\n\n#communities {\n  background-image: url(\"assets/images/index_community.jpg\");\n  background-size: cover; }\n  #communities .mask {\n    background-color: rgba(19, 61, 123, 0.5); }\n  #communities .section-title {\n    color: #fff;\n    margin-bottom: 1.5em; }\n  #communities .section-sub-title {\n    font-size: 1.5em;\n    font-family: 'Lora', serif;\n    letter-spacing: 2px;\n    font-weight: bold;\n    color: #fff;\n    margin-bottom: 1.5em; }\n  #communities .question {\n    background: #fff;\n    margin: 0px 15px;\n    padding: 30px 50px;\n    position: relative; }\n    #communities .question .title {\n      font-size: 1em;\n      letter-spacing: 0px;\n      font-weight: 300;\n      margin: 10px 0px 20px 0px;\n      padding-top: 10px;\n      border-top: 5px solid #133D7B; }\n    #communities .question .content {\n      margin-bottom: 50px; }\n    #communities .question .footer {\n      text-align: left;\n      position: absolute;\n      height: 50px;\n      bottom: 20px;\n      width: 80%; }\n      #communities .question .footer img {\n        border: 1px solid #E0E0E0;\n        padding: 3px;\n        width: 50px;\n        height: 50px;\n        border-radius: 50%;\n        margin-right: 10px; }\n      #communities .question .footer div {\n        display: inline; }\n      #communities .question .footer .datetime {\n        float: right;\n        position: relative;\n        top: 50%;\n        -webkit-transform: translate(-50%, -50%);\n                transform: translate(-50%, -50%); }\n"

/***/ }),

/***/ 565:
/***/ (function(module, exports) {

module.exports = ".cover {\n  height: 270px;\n  width: 100%;\n  background-size: cover;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.cover-title h2 {\n  font-size: 2.5em;\n  color: white; }\n\n.area-title {\n  font-family: 'Fjalla One', sans-serif;\n  font-size: 1.5em;\n  font-weight: bold;\n  text-transform: uppercase;\n  width: 100%;\n  padding-bottom: 5px;\n  border-bottom: 3px solid black; }\n\n.info {\n  margin-top: 4em;\n  margin-bottom: 4em; }\n  .info .basic-info .info-content {\n    padding: 30px;\n    line-height: 2em; }\n    .info .basic-info .info-content .action {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex; }\n    .info .basic-info .info-content div:not(:first-child) {\n      padding-left: 0.5em; }\n    .info .basic-info .info-content .pointer {\n      cursor: pointer;\n      color: #0f3e86;\n      font-weight: 500; }\n\n.pictures .picture {\n  margin: 10px; }\n  .pictures .picture img {\n    width: 100%; }\n\n.overview {\n  padding: 80px;\n  background-image: url(\"../assets/images/overview.jpg\"); }\n  .overview h2 {\n    font-size: 2.5em;\n    font-family: sans-serif;\n    margin-bottom: 0px; }\n  .overview .container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between; }\n  .overview .introduce,\n  .overview .equipment {\n    background-color: black;\n    color: white;\n    padding: 30px;\n    line-height: 30px; }\n  .overview .introduce {\n    background-color: black;\n    color: white;\n    padding: 30px;\n    line-height: 30px;\n    -webkit-box-flex: 2;\n        -ms-flex: 2;\n            flex: 2; }\n  .overview .equipment {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1; }\n\n.download-area {\n  text-align: center;\n  margin-bottom: 40px; }\n  .download-area .pdf-view {\n    width: 100%;\n    min-height: 800px;\n    margin: 40px 0; }\n  .download-area button {\n    color: white;\n    background-color: #133D7B;\n    padding: 10px;\n    font-family: 'Montserrat', sans-serif;\n    border: 0px; }\n\n.comments {\n  margin: 40px auto; }\n"

/***/ }),

/***/ 566:
/***/ (function(module, exports) {

module.exports = ".container {\n  padding: 80px 0; }\n\n.nav-area {\n  padding: 10px;\n  border-top: 1px solid #000000;\n  border-bottom: 2px solid #000000;\n  margin-bottom: 30px; }\n  .nav-area ul,\n  .nav-area li {\n    padding: 0;\n    margin: 0; }\n  .nav-area li {\n    display: inline-block;\n    margin-right: 10px;\n    padding-right: 1em;\n    list-style: none; }\n    .nav-area li a {\n      color: #000000;\n      font-size: 1.5em;\n      font-family: 'Fjalla One', sans-serif;\n      margin: 10px; }\n\n#filter-input .cube-title {\n  text-transform: uppercase;\n  color: #000000;\n  border-top: 4px solid #133d7b;\n  padding-top: 5px;\n  padding-left: 5px;\n  border-left: 1px solid #133d7b;\n  max-width: 100px; }\n\n#filter-input select,\n#filter-input button {\n  display: inline-block; }\n\n#filter-input select {\n  background-color: #FFFFFF;\n  border: 1px solid #BBBBBB;\n  border-radius: 0px;\n  padding-left: 10px; }\n\n.itinerary-list .itinerary {\n  border: 1px solid #bbb;\n  padding: 10px;\n  color: #000;\n  background-color: #fff;\n  margin: 5px 0px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  align-itinerarys: center;\n  display: flex;\n  justify-content: flex-start; }\n  .itinerary-list .itinerary div {\n    line-height: 1.5em; }\n  .itinerary-list .itinerary .glyphicon {\n    margin-right: 0.5em; }\n  .itinerary-list .itinerary .thumbnail {\n    margin-bottom: 0px;\n    -webkit-box-flex: 3;\n        -ms-flex: 3;\n            flex: 3; }\n  .itinerary-list .itinerary .info {\n    margin-left: 2em;\n    -webkit-box-flex: 7;\n        -ms-flex: 7;\n            flex: 7; }\n    .itinerary-list .itinerary .info .title {\n      font-size: 1.125em;\n      font-weight: bold;\n      margin: 1em 0px; }\n    .itinerary-list .itinerary .info .action {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex; }\n      .itinerary-list .itinerary .info .action .pointer {\n        cursor: pointer;\n        color: #0f3e86;\n        font-weight: 500; }\n      .itinerary-list .itinerary .info .action .read-more {\n        margin-left: 0.5em;\n        border-left: 2px solid #000;\n        padding-left: 0.5em; }\n\n#recommends .cube-title {\n  text-transform: uppercase;\n  color: #000000;\n  border-top: 4px solid #133d7b;\n  padding-top: 5px;\n  padding-left: 5px;\n  border-left: 1px solid #133d7b;\n  max-width: 80%; }\n\n#recommends img {\n  width: 100%; }\n"

/***/ }),

/***/ 567:
/***/ (function(module, exports) {

module.exports = ".cover {\n  background-image: url(\"assets/images/signup.jpg\");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center; }\n  .cover .mask {\n    background-color: rgba(0, 0, 0, 0.3);\n    padding: 80px; }\n\n#localLogin {\n  background-color: #fff;\n  padding: 40px; }\n  #localLogin .form-title {\n    font-size: 2em;\n    text-transform: uppercase;\n    color: #666; }\n  #localLogin .p {\n    color: #133d78;\n    margin: 30px 0; }\n  #localLogin .input-username,\n  #localLogin .input-password {\n    border: 1px solid #E0E0E0;\n    color: #666666;\n    height: 40px;\n    padding: 7px;\n    margin: 20px 0;\n    width: 80%; }\n    #localLogin .input-username input,\n    #localLogin .input-password input {\n      border: 0;\n      outline: none;\n      width: 100%; }\n  #localLogin .input-username:hover,\n  #localLogin .input-password:hover {\n    border-radius: 20px;\n    border: 1px solid #133D7B; }\n  #localLogin .input-submit,\n  #localLogin .input-signup {\n    display: inline-block;\n    margin: 0px 10px; }\n    #localLogin .input-submit button,\n    #localLogin .input-signup button {\n      border: 0;\n      background-color: #133D7B;\n      color: #FFFFFF;\n      padding: 15px;\n      font-size: 1em;\n      text-transform: uppercase;\n      border-radius: 30px; }\n    #localLogin .input-submit .disabled,\n    #localLogin .input-signup .disabled {\n      background-color: #aaa;\n      cursor: not-allowed; }\n  #localLogin .hint {\n    margin: 20px 0;\n    color: red; }\n\n#thirdLogin {\n  padding: 40px; }\n  #thirdLogin p {\n    color: #fff;\n    font-size: 1.3em; }\n  #thirdLogin button {\n    border: 0;\n    background-color: #133D7B;\n    color: #FFFFFF;\n    padding: 15px;\n    border-radius: 30px;\n    font-size: 1em;\n    text-transform: uppercase; }\n"

/***/ }),

/***/ 568:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 569:
/***/ (function(module, exports) {

module.exports = "<app-header [userInfo]=\"userInfo\"></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>"

/***/ }),

/***/ 570:
/***/ (function(module, exports) {

module.exports = "<div class='container'>\n    <h2 class=\"page-title\">{{activity}} in {{area}} Taiwan</h2>\n\n    <div class=\"nav-area\">\n        <ul class=\"center\">\n            <li><a routerLink=\"/city/{{area}}/food\" routerLinkActive=\"active\">food</a></li>\n            <li><a routerLink=\"/city/{{area}}/fun\" routerLinkActive=\"active\">fun</a></li>\n            <li><a routerLink=\"/city/{{area}}/stay\" routerLinkActive=\"active\">stay</a></li>\n            <li><a routerLink=\"/city/{{area}}/trans\" routerLinkActive=\"active\">transport</a></li>\n        </ul>\n    </div>\n\n    <div class=\"content\">\n        <div id=\"activities\" class=\"col-sm-9\">\n            <div id=\"filter-input\">\n                <p class=\"cube-title\">Filter by</p>\n                <select name=\"area\">\n                    <option value=\"\">--select area--</option>\n                    <option value=\"Northern\">Northern Taiwan</option>\n                    <option value=\"Mid -\">Mid - Taiwan</option>\n                    <option value=\"Southern\">Southern Taiwan</option>\n                    <option value=\"Eastern\">Eastern Taiwan</option>\n                </select>\n                <!--<select name=\"category\">\n                    <option value=\"\">--select category</option>\n                    <option value=\"1\"></option>\n                    <option value=\"2\">Day2</option>\n                </select>-->\n                <button class=\"btn btn-default\">Search</button>\n            </div>\n            <div class=\"item-list\">\n                <div class=\"item\" *ngFor=\"let item of itemList\">\n                    <div class=\"thumbnail\">\n                        <a routerLink=\"../../../detail/{{activity}}/{{item.id}}\" routerLinkActive=\"active\">\n                            <img src=\"assets/{{item.photo_url}}\">\n                        </a>\n                    </div>\n                    <div class=\"info\">\n                        <h5 class=\"title\">\n                            {{item.name}}\n                        </h5>\n                        <div class=\"stars\">\n                            <span *ngFor=\"let i of arr(item.stars).fill(1)\" class=\"glyphicon glyphicon-star\"></span>\n                        </div>\n                        <div class=\"tags\">\n                            <span class=\"glyphicon glyphicon-tag\"></span>\n                            <span>{{item.tags}}</span>\n                        </div>\n                        <div class=\"tellphone\">\n                            <span class=\"glyphicon glyphicon-earphone\"></span>\n                            <span>{{item.tellphone}}</span>\n                        </div>\n                        <div class=\"address\">\n                            <span class=\"glyphicon glyphicon-map-marker\"></span>\n                            <span>{{item.address}}</span>\n                        </div>\n                        <div class=\"action\">\n                            <div class=\"bookmark\">\n                                <span class=\"glyphicon glyphicon-bookmark\"></span>\n                                <span class=\"pointer\">Add To List</span>\n                            </div>\n                            <div class=\"read-more\">\n                                <span class=\"pointer\">Read More</span>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div id=\"recommends\" class=\"col-sm-3\">\n            <p class=\"cube-title\">Recommend for you</p>\n            <div class=\"recommend\">\n                <a href=\"#\">\n                    <img src=\"assets/images/test.png\">\n                </a>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 571:
/***/ (function(module, exports) {

module.exports = "<div class='container'>\n    <h2 class=\"page-title\">{{area}} Taiwan</h2>\n\n    <div class=\"nav-area\">\n        <ul class=\"center\">\n            <li><a routerLink=\"/city/northern\" routerLinkActive=\"active\">Northern Taiwan</a></li>\n            <li><a routerLink=\"/city/mid\" routerLinkActive=\"active\">Mid Taiwan</a></li>\n            <li><a routerLink=\"/city/southern\" routerLinkActive=\"active\">Southern Taiwan</a></li>\n            <li><a routerLink=\"/city/eastern\" routerLinkActive=\"active\">Estern Taiwan</a></li>\n        </ul>\n    </div>\n\n    <div id=\"city-activities\">\n        <div class=\"city-activity\">\n            <a routerLink=\"/city/{{area}}/food\">\n                <img src=\"assets/images/food.png\">\n            </a>\n        </div>\n        <div class=\"city-activity\">\n            <a routerLink=\"/city/{{area}}/fun\">\n                <img src=\"assets/images/fun.png\">\n            </a>\n        </div>\n        <div class=\"city-activity\">\n            <a routerLink=\"/city/{{area}}/stay\">\n                <img src=\"assets/images/stay.png\">\n            </a>\n        </div>\n        <div class=\"city-activity\">\n            <a routerLink=\"/city/{{area}}/trans\">\n                <img src=\"assets/images/trans.png\">\n            </a>\n        </div>\n    </div>\n\n\n    <section id=\"foods\">\n        <p class=\"center section-title\">RECOMMENDED FOODS</p>\n        <div class=\"flex-justify\">\n            <div class=\"flex-item food\" *ngFor=\"let restaurant of restaurants\">\n                <div class=\"photo\">\n                    <img src=\"assets/{{restaurant.photo_url}}\">\n                </div>\n                <div class=\"name\">{{restaurant.name}}</div>\n                <div class=\"stars\">\n                    <span *ngFor=\"let i of arr(restaurant.stars).fill(1)\" class=\"glyphicon glyphicon-star\"></span>\n                </div>\n                <div class=\"tags\">\n                    <span class=\"glyphicon glyphicon-tag\"></span> {{restaurant.tags}}\n                </div>\n                <div class=\"phone\">\n                    <span class=\"glyphicon glyphicon-earphone\"></span> {{restaurant.tellphone}}\n                </div>\n                <div class=\"action\">\n                    <button class=\"to-list\">\n                        <span class=\"glyphicon glyphicon-bookmark\"></span>Add To List\n                    </button>\n                    <a class=\"to-read\" routerLink=\"#\">\n                        <span class=\"glyphicon glyphicon-play\"></span>Read More\n                    </a>\n                </div>\n            </div>\n        </div>\n    </section>\n\n    <section id=\"spots\">\n        <p class=\"center section-title\">RECOMMENDED FUN</p>\n        <div class=\"flex-justify\">\n            <div class=\"flex-item food\" *ngFor=\"let spot of spots\">\n                <div class=\"photo\">\n                    <img src=\"assets/{{spot.photo_url}}\">\n                </div>\n                <div class=\"name\">{{spot.name}}</div>\n                <div class=\"stars\">\n                    <span *ngFor=\"let i of arr(spot.stars).fill(1)\" class=\"glyphicon glyphicon-star\"></span>\n                </div>\n                <div class=\"tags\">\n                    <span class=\"glyphicon glyphicon-tag\"></span> {{spot.tags}}\n                </div>\n                <div class=\"phone\">\n                    <span class=\"glyphicon glyphicon-earphone\"></span> {{spot.tellphone}}\n                </div>\n                <div class=\"action\">\n                    <button class=\"to-list\">\n                        <span class=\"glyphicon glyphicon-bookmark\"></span>Add To List\n                    </button>\n                    <a class=\"to-read\" routerLink=\"#\">\n                        <span class=\"glyphicon glyphicon-play\"></span>Read More\n                    </a>\n                </div>\n            </div>\n        </div>\n    </section>\n\n    <section id=\"stays\">\n        <p class=\"center section-title\">RECOMMENDED STAY</p>\n        <div class=\"flex-justify\">\n            <div class=\"flex-item food\" *ngFor=\"let stay of stays\">\n                <div class=\"photo\">\n                    <img src=\"assets/{{stay.photo_url}}\">\n                </div>\n                <div class=\"name\">{{stay.name}}</div>\n                <div class=\"stars\">\n                    <span *ngFor=\"let i of arr(stay.stars).fill(1)\" class=\"glyphicon glyphicon-star\"></span>\n                </div>\n                <div class=\"tags\">\n                    <span class=\"glyphicon glyphicon-tag\"></span> {{stay.tags}}\n                </div>\n                <div class=\"phone\">\n                    <span class=\"glyphicon glyphicon-earphone\"></span> {{stay.tellphone}}\n                </div>\n                <div class=\"action\">\n                    <button class=\"to-list\">\n                        <span class=\"glyphicon glyphicon-bookmark\"></span>Add To List\n                    </button>\n                    <a class=\"to-read\" routerLink=\"#\">\n                        <span class=\"glyphicon glyphicon-play\"></span>Read More\n                    </a>\n                </div>\n            </div>\n        </div>\n    </section>\n\n</div>"

/***/ }),

/***/ 572:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n    <h2 class=\"page-title center\">Explore Taiwan</h2>\n\n    <div id=\"feature-nav\">\n        <nav class=\"center\">\n            <ul>\n                <li><a routerLink=\"northern/food\">Food</a></li>\n                <li><a routerLink=\"northern/fun\">Fun</a></li>\n                <li><a routerLink=\"northern/stay\">Stay</a></li>\n                <li><a routerLink=\"northern/trans\">Transportation</a></li>\n            </ul>\n        </nav>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-md-6 city\">\n            <a routerLink=\"northern\"><img src=\"assets/images/north.jpg\"></a>\n            <h3 class=\"city-title\">Northern Taiwan</h3>\n            <div>\n                <p class=\"city-paragraph\">Here, you can enjoy the cityscape (Taipei), different types of hot spring, the special landscape of rocky coast, and maybe experience Hakka culture (Hsinchu).</p>\n            </div>\n        </div>\n\n        <div class=\"col-md-6 city\">\n            <a routerLink=\"mid\"><img src=\"assets/images/mid.jpg\"></a>\n            <h3 class=\"city-title\">Mid-Taiwan</h3>\n            <div>\n                <p class=\"city-paragraph\">This area is famous for Hakka Culture (Miaoli), nature landscapes (Nantou and Yunlin), nature-related museums (Taichung), and of course cityscape (Taichung).</p>\n            </div>\n        </div>\n\n        <div class=\"col-md-6 city\">\n            <a routerLink=\"southern\"><img src=\"assets/images/south.jpg\"></a>\n            <h3 class=\"city-title\">Southern Taiwan</h3>\n            <div>\n                <p class=\"city-paragraph\">Southern Taiwan is very famous for the delicacies (Tainan and Kaohsiung), nature landscapes (Alishan, Chiayi), and water activities (Kenting, Pingtung), history and culture (Tainan).</p>\n            </div>\n        </div>\n\n        <div class=\"col-md-6 city\">\n            <a routerLink=\"eastern\"><img src=\"assets/images/east.jpg\"></a>\n            <h3 class=\"city-title\">Eastern TAIWAN</h3>\n            <div>\n                <p class=\"city-paragraph\">Eastern Taiwan is famous for the astonishing landscapes and the relaxing atmosphere. The must-visited spot is of course Taroko Gorge, but there’s still lots of places worth going!</p>\n            </div>\n        </div>\n\n        <div class=\"col-md-6 city\">\n            <a routerLink=\"eastern\"><img src=\"assets/images/offshore.jpg\"></a>\n            <h3 class=\"city-title\">Offshore Island <small>(Comming soon...)</small></h3>\n            <div class=\"city-paragraph\">\n                <p>There are five main outlying islands that you must visit in Taiwan. The scenery of the outlying islands is different from the Main Island.</p>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 573:
/***/ (function(module, exports) {

module.exports = "<div class=\"cover\" [ngStyle]=\"{'background-image': 'url(assets/' + activity.banner_url + ')'}\">\n    <div class=\"cover-title\">\n        <h2>{{activity.name}}</h2>\n    </div>\n</div>\n\n<div class=\"info container\">\n    <div class=\"basic-info col-sm-9\">\n        <div class=\"area-title\">\n            basic info\n        </div>\n        <div class=\"info-content\">\n            <div class=\"stars\">\n                <span *ngFor=\"let i of arr(activity.stars).fill(1)\" class=\"glyphicon glyphicon-star\"></span>\n            </div>\n            <div class=\"tags\">\n                <span class=\"glyphicon glyphicon-tag\"></span>\n                <span>{{activity.tags}}</span>\n            </div>\n            <div class=\"calendar\">\n                <span class=\"glyphicon glyphicon-calendar\"></span>\n                <span>{{activity.day}} days</span>\n                <span>{{activity.suggest_time}}</span>\n            </div>\n            <div class=\"address\">\n                <span class=\"glyphicon glyphicon-map-marker\"></span>\n                <span>{{activity.city}}</span>\n                <span>{{activity.area}}&nbsp;Taiwan</span>\n            </div>\n            <div class=\"action\">\n                <div class=\"bookmark\">\n                    <span class=\"glyphicon glyphicon-bookmark\"></span>\n                    <span class=\"pointer\">Add To List</span>\n                </div>\n                <div class=\"\">\n                    <span>|</span>\n                    <span class=\"glyphicon glyphicon-comment\"></span>\n                    <span class=\"pointer\">Comment</span>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"pictures col-sm-3\">\n        <div class=\"area-title\">\n            pictures\n        </div>\n        <div *ngFor=\"let picture of activity.pictures\" class=\"picture\">\n            <img [src]=\"'assets/'+picture\">\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 574:
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\n    <div class=\"container\">\n        <div class=\"social-links center\">\n            <div class=\"social-link\">\n                <a href=\"https://www.facebook.com/taiwanholic.trip/\">\n                    <img src=\"assets/images/facebook.png\">\n                </a>\n            </div>\n            <div class=\"social-link\">\n                <a href=\"https://twitter.com/taiwanholic\">\n                    <img src=\"assets/images/twitter.png\">\n                </a>\n            </div>\n            <div class=\"social-link\">\n                <a href=\"https://www.instagram.com/taiwan.holic/?hl=enc\">\n                    <img src=\"assets/images/instagram.png\">\n                </a>\n            </div>\n            <div class=\"social-link\">\n                <a href=\"#\">\n                    <img src=\"assets/images/youtube.png\">\n                </a>\n            </div>\n        </div>\n\n        <div class=\"contact center\">\n            <span>CONTACT US｜</span>\n            <span class=\"mail-action\">\n                <i class=\"glyphicon glyphicon-envelope\"></i> taiwanholicmister@gmail.com\n            </span>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 575:
/***/ (function(module, exports) {

module.exports = "<div id=\"top-bar\">\n    <div class=\"container\">\n        <div class=\"justify\">\n            <div class=\"logo\">\n                <a routerLink=\"/index\">\n                    <img src=\"assets/images/logo.png\">\n                </a>\n            </div>\n            <div class=\"top-nav\">\n                <ul>\n                    <li><a routerLink=\"/city\">City</a></li>\n                    <li><a routerLink=\"/itinerary\">Itinerary</a></li>\n                    <li><a routerLink=\"/community\">Community</a></li>\n                    <li *ngIf=\"!userInfo\"><a routerLink=\"/login\">Login</a></li>\n                    <li *ngIf=\"userInfo\"><a routerLink=\"/user\">Profile</a></li>\n                    <li *ngIf=\"userInfo\"><a routerLink=\"/logout\">Logout</a></li>\n                </ul>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 576:
/***/ (function(module, exports) {

module.exports = "<div class=\"cover\">\n    <div>\n        <a routerLink=\"/signup\" class=\"signup\">SIGN UP FOR FREE</a>\n    </div>\n</div>\n<!-- Itinerary -->\n<section id=\"itineraries\">\n    <div class=\"container\">\n        <h2 class=\"center section-title\">Things to do</h2>\n        <div class=\"justify\">\n            <div *ngFor=\"let itinerary of itineraries\" class=\"flex-item itinerary\">\n                <a routerLink=\"/itinerary/{{itinerary.id}}\">\n                    <img src=\"assets/{{itinerary.photo_url}}\" alt=\"test\" />\n                    <div class=\"hint\">{{itinerary.name}}</div>\n                </a>\n            </div>\n        </div>\n        <div class=\"center\">\n            <a href=\"#\" class=\"order\">MORE THINGS TO DO</a>\n        </div>\n    </div>\n</section>\n<!-- End Itinerary -->\n\n<!-- Comment -->\n<section id=\"comments\">\n    <div class=\"container\">\n        <h2 class=\"center section-title\">LOOK WHAT THEY SAID</h2>\n        <div class=\"justify\">\n            <div *ngFor=\"let comment of comments\" class=\"comment flex-item\">\n                <a href=\"#\">\n                    <img src=\"assets/{{comment.images[0]}}\" alt=\"comment\" />\n                </a>\n                <div class=\"title\">{{comment.comment_title}}</div>\n                <div class=\"content\">{{comment.comment_content}}</div>\n                <div class=\"footer\">\n                    <img *ngIf=\"comment.comment_username\" src=\"assets/images/user/user_photo/{{comment.comment_username}}.jpg\" alt=\"{{comment.comment_username}}\" />\n                    <img *ngIf=\"!comment.comment_username\" src=\"assets/images/user/user_photo/manager.jpg\" alt=\"photo\" />\n                    <div> From\n                        <div class=\"username\">{{comment.comment_username}}</div>\n                        <span class=\"stars\">\n                            <span *ngFor=\"let i of arr(comment.star).fill(1)\" class=\"glyphicon glyphicon-star\"></span>\n                        </span>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"center\">\n            <a href=\"/city\" class=\"explore\">EXPLORE TAIWAN</a>\n        </div>\n    </div>\n</section>\n<!-- End Comment-->\n\n<!-- Community -->\n<section id=\"communities\">\n    <div class=\"mask\">\n        <div class=\"container\">\n            <h2 class=\"center section-title\">Need someone's help?</h2>\n            <h2 class=\"center section-sub-title\">Solve any problem traveling in Taiwan.</h2>\n            <div class=\"justify\">\n                <div *ngFor=\"let question of questions\" class=\"question flex-item\">\n                    <p class=\"title\">{{question.title}}</p>\n                    <p class=\"content\">{{question.content}}</p>\n                    <div class=\"footer\">\n                        <img src=\"assets/images/user/user_photo/{{question.username}}.jpg\" />\n                        <div> From </div>\n                        <div class=\"username\">{{question.username}}</div>\n                        <div class=\"datetime\">{{question.datetime | date: 'MMM dd'}}</div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"content center\">\n                <a href=\"Community\" class=\"explore\">GO ASK QUESTION</a>\n            </div>\n        </div>\n    </div>\n</section>\n<!-- End Community -->"

/***/ }),

/***/ 577:
/***/ (function(module, exports) {

module.exports = "<div class=\"cover\" [ngStyle]=\"{'background-image': 'url(assets/' + itinerary.banner_url + ')'}\">\n    <div class=\"cover-title\">\n        <h2>{{itinerary.name}}</h2>\n    </div>\n</div>\n\n<div class=\"info container\">\n    <div class=\"basic-info col-sm-8\">\n        <div class=\"area-title\">\n            basic info\n        </div>\n        <div class=\"info-content\">\n            <div class=\"stars\">\n                <span *ngFor=\"let i of arr(itinerary.stars).fill(1)\" class=\"glyphicon glyphicon-star\"></span>\n            </div>\n            <div class=\"tags\">\n                <span class=\"glyphicon glyphicon-tag\"></span>\n                <span>{{itinerary.tags}}</span>\n            </div>\n            <div class=\"calendar\">\n                <span class=\"glyphicon glyphicon-calendar\"></span>\n                <span>{{itinerary.day}} days</span>\n                <span>{{itinerary.suggest_time}}</span>\n            </div>\n            <div class=\"address\">\n                <span class=\"glyphicon glyphicon-map-marker\"></span>\n                <span>{{itinerary.city}}</span>\n                <span>{{itinerary.area}}&nbsp;Taiwan</span>\n            </div>\n            <div class=\"action\">\n                <div class=\"bookmark\">\n                    <span class=\"glyphicon glyphicon-bookmark\"></span>\n                    <span class=\"pointer\">Add To List</span>\n                </div>\n                <div class=\"\">\n                    <span>|</span>\n                    <span class=\"glyphicon glyphicon-comment\"></span>\n                    <span class=\"pointer\">Comment</span>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"pictures col-sm-4\">\n        <div class=\"area-title\">\n            pictures\n        </div>\n        <div *ngFor=\"let picture of itinerary.pictures\" class=\"picture\">\n            <img [src]=\"'assets/'+picture\">\n        </div>\n    </div>\n</div>\n\n<div class=\"overview\">\n    <div class=\"container\">\n        <div class=\"introduce\">\n            <h2>Overview</h2>\n            <p>{{itinerary.overview}}</p>\n        </div>\n\n        <div class=\"equipment\">\n            <h2>Equipment</h2>\n            <a *ngIf=\"itinerary.book_url\" routerLink=\"{{itinerary.book_url}}\" class=\"book\">book package</a>\n            <p *ngIf=\"!itinerary.book_url\">This itenarary doesn't have a package to go alone with.</p>\n        </div>\n    </div>\n</div>\n\n<div class=\"download-area container\">\n    <object class=\"pdf-view\" [data]=\"'assets/'+itinerary.file | safe\" type=\"application/pdf\">\n        <embed [src]=\"'assets/'+itinerary.file | safe\" type=\"application/pdf\" />\n    </object>\n    <a href=\"assets/{{itinerary.file}}\" target=\"_blank\">\n        <button>Open a new Tab to Read</button>\n    </a>\n</div>\n\n<div class=\"comments container\">\n    <div class=\"area-title\">\n        Comments\n    </div>\n    Coming soon...\n</div>"

/***/ }),

/***/ 578:
/***/ (function(module, exports) {

module.exports = "<div class='container'>\n    <h2 class=\"page-title\">itinerary searchig</h2>\n\n    <div class=\"nav-area\">\n        <ul class=\"center\">\n            <li><a routerLink=\"/city/northern\" routerLinkActive=\"active\">Northern Taiwan</a></li>\n            <li><a routerLink=\"/city/mid\" routerLinkActive=\"active\">Mid Taiwan</a></li>\n            <li><a routerLink=\"/city/southern\" routerLinkActive=\"active\">Southern Taiwan</a></li>\n            <li><a routerLink=\"/city/eastern\" routerLinkActive=\"active\">Estern Taiwan</a></li>\n        </ul>\n    </div>\n    <div class=\"content\">\n        <div id=\"itineraries\" class=\"col-sm-9\">\n            <div id=\"filter-input\">\n                <p class=\"cube-title\">Filter by</p>\n                <select name=\"area\">\n                    <option value=\"\">--select area--</option>\n                    <option value=\"Northern\">Northern Taiwan</option>\n                    <option value=\"Mid -\">Mid - Taiwan</option>\n                    <option value=\"Southern\">Southern Taiwan</option>\n                    <option value=\"Eastern\">Eastern Taiwan</option>\n                </select>\n                <select name=\"category\">\n                    <option value=\"\">--select category</option>\n                    <option value=\"1\">Day1</option>\n                    <option value=\"2\">Day2</option>\n                </select>\n                <button class=\"btn btn-default\">Search</button>\n            </div>\n            <div class=\"itinerary-list\">\n                <div class=\"itinerary\" *ngFor=\"let itinerary of itineraryList\">\n                    <div class=\"thumbnail\">\n                        <a routerLink=\"{{itinerary.id}}\" routerLinkActive=\"active\">\n                            <img src=\"assets/{{itinerary.photo_url}}\">\n                        </a>\n                    </div>\n                    <div class=\"info\">\n                        <h5 class=\"title\">\n                            {{itinerary.name}}\n                        </h5>\n                        <div class=\"tags\">\n                            <span class=\"glyphicon glyphicon-tag\"></span>\n                            <span>{{itinerary.tags}}</span>\n                        </div>\n                        <div class=\"calendar\">\n                            <span class=\"glyphicon glyphicon-calendar\"></span>\n                            <span>{{itinerary.day}} days</span>\n                            <span>{{itinerary.suggest_time}}</span>\n                        </div>\n                        <div class=\"address\">\n                            <span class=\"glyphicon glyphicon-map-marker\"></span>\n                            <span>{{itinerary.city}}</span>\n                            <span>{{itinerary.area}}&nbsp;Taiwan</span>\n                        </div>\n                        <div class=\"action\">\n                            <div class=\"bookmark\">\n                                <span class=\"glyphicon glyphicon-bookmark\"></span>\n                                <span class=\"pointer\">Add To List</span>\n                            </div>\n                            <div class=\"read-more\">\n                                <span class=\"pointer\">Read More</span>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div id=\"recommends\" class=\"col-sm-3\">\n            <p class=\"cube-title\">Recommend for you</p>\n            <div class=\"recommend\">\n                <a href=\"#\">\n                    <img src=\"assets/images/test.png\">\n                </a>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 579:
/***/ (function(module, exports) {

module.exports = "<div class=\"cover\">\n    <div class=\"mask\">\n        <div class=\"container\">\n            <div id=\"localLogin\" class=\"col-md-8\">\n                <form #loginForm>\n                    <h3 class=\"form-title\">taiwan holic</h3>\n                    <p>Log in with your username and password</p>\n                    <div class=\"input-username\">\n                        <input type=\"email\" require placeholder=\"Email\" name=\"email\" (blur)=\"verifyForm()\" [(ngModel)]=\"loginInfo.email\">\n                    </div>\n                    <div class=\"input-password\">\n                        <input type=\"password\" require placeholder=\"Password\" name=\"password\" (blur)=\"verifyForm()\" [(ngModel)]=\"loginInfo.password\">\n                    </div>\n                    <div class=\"hint\" *ngIf=\"hint.length > 0\">{{hint}}</div>\n                    <div class=\"input-submit\">\n                        <button (click)=\"loginLocal(loginForm)\" [disabled]=\"!isValid\" [ngClass]=\"{'disabled': !isValid}\" type=\"button\">Log in</button>\n                    </div>\n                    <div class=\"input-signup\">\n                        <a class=\"\" routerLink=\"signup\" routerLinkActive=\"true\">\n                            <button>Sign Up</button>\n                        </a>\n                    </div>\n                </form>\n            </div>\n            <div id=\"thirdLogin\" class=\"col-md-4\">\n                <p>Or log in with Facebook?</p>\n                <button type=\"button\" (click)=\"loginFacebook()\">log in with facebook</button>\n            </div>\n        </div>\n\n    </div>"

/***/ }),

/***/ 580:
/***/ (function(module, exports) {

module.exports = "<p>\n  logout works!\n</p>\n"

/***/ }),

/***/ 604:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(353);


/***/ })

},[604]);
//# sourceMappingURL=main.bundle.map