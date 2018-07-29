webpackJsonp([6],{

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_offline_offline_module__ = __webpack_require__(312);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_offline_offline_module__["a" /* OfflineComponentModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OfflineComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__offline__ = __webpack_require__(313);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OfflineComponentModule = /** @class */ (function () {
    function OfflineComponentModule() {
    }
    OfflineComponentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__offline__["a" /* OfflineComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__offline__["a" /* OfflineComponent */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__offline__["a" /* OfflineComponent */]
            ]
        })
    ], OfflineComponentModule);
    return OfflineComponentModule;
}());

//# sourceMappingURL=offline.module.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OfflineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OfflineComponent = /** @class */ (function () {
    function OfflineComponent() {
    }
    OfflineComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'offline',template:/*ion-inline-start:"/Users/ed/Library/Mobile Documents/com~apple~CloudDocs/Projects/enzorromovil/infox-v3/src/components/offline/offline.html"*/'<ion-grid>\n    <ion-row justify-content-center align-items-center >\n        <div class="offline-content" text-center text-wrap>\n            <img src="assets/img/offline.png" >\n            <br />\n            No hay conexión a internet\n        </div>\n    </ion-row>\n</ion-grid>'/*ion-inline-end:"/Users/ed/Library/Mobile Documents/com~apple~CloudDocs/Projects/enzorromovil/infox-v3/src/components/offline/offline.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], OfflineComponent);
    return OfflineComponent;
}());

//# sourceMappingURL=offline.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_services__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__general_global_variables__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__general_general__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tabs_tabs__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_network_interface__ = __webpack_require__(117);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, appService, globalVariables, networkInterface, general, app, modalCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.appService = appService;
        this.globalVariables = globalVariables;
        this.networkInterface = networkInterface;
        this.general = general;
        this.app = app;
        this.modalCtrl = modalCtrl;
        // //Get initial network state checking for an ip address
        this.networkInterface.getIPAddress().then(function (ip) {
            _this.globalVariables.isConnected = true;
        }, function (error) {
            //this.globalVariables.isConnected = false;
            _this.globalVariables.isConnected = true;
        });
        this.advertisement = {
            img: null,
            enlace: null,
            idnegocio: null,
            url: null
        };
    }
    HomePage.prototype.ionViewWillLoad = function () {
        this.getAdvertisement();
    };
    HomePage.prototype.getAdvertisement = function () {
        var _this = this;
        this.appService.getAdvertisement().subscribe(function (response) {
            _this.advertisement = response.json().data[0];
            console.log(_this.advertisement);
        }, function (error) {
            console.log(error);
            _this.advertisement = {
                img: null,
                enlace: null,
                idnegocio: null,
                url: null
            };
        });
    };
    HomePage.prototype.openSearchModal = function () {
        var _this = this;
        if (!this.globalVariables.isConnected) {
            this.general.showNetworkConnectionAlert();
            return;
        }
        var modal = this.modalCtrl.create('SearchPlacePage', { samePage: true });
        modal.present();
        modal.onWillDismiss(function (data) {
            if (data) {
                // console.log(data);
                var nav = _this.app.getRootNavById('n4');
                nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__tabs_tabs__["a" /* TabsPage */], { search: data, tabIndex: 3 }, { animate: false });
            }
        });
    };
    HomePage.prototype.goToPlaceDetails = function (PlaceId) {
        if (!this.globalVariables.isConnected) {
            this.general.showNetworkConnectionAlert();
            return;
        }
        this.globalVariables.placeId = PlaceId;
        var nav = this.app.getRootNavById('n4');
        nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__tabs_tabs__["a" /* TabsPage */], { tabIndex: 2, goToPlace: true }, { animate: false });
    };
    HomePage.prototype.openSpeechModal = function () {
        if (!this.globalVariables.isConnected) {
            this.general.showNetworkConnectionAlert();
            return;
        }
        var modal = this.modalCtrl.create('SpeechModalPage');
        modal.present();
    };
    HomePage.prototype.get = function () {
        this.general.getLocationPermission();
    };
    HomePage.prototype.go = function () {
        this.navCtrl.push('SpeechModalPage');
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/ed/Library/Mobile Documents/com~apple~CloudDocs/Projects/enzorromovil/infox-v3/src/pages/home/home.html"*/'<ion-header>\n    <ion-toolbar color="primary">\n        <ion-title *ngIf="advertisement.img || !globalVariables.isConnected">\n            <div text-center>\n                <img src="assets/img/logo_infox_white.png" class="mainLogo"/>\n            </div>\n        </ion-title>\n    </ion-toolbar>\n    <ion-navbar color="primary" *ngIf="advertisement.img">\n        <ion-input mode="ios" placeholder="Buscar..." (focus)="openSearchModal()" readonly>\n            <ion-icon name="md-mic"></ion-icon>\n        </ion-input>\n        <ion-buttons end>\n            <button item-right ion-button color="light" class="mic-button" (click)="openSpeechModal()">\n                <ion-icon name="md-mic"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <offline *ngIf="!globalVariables.isConnected"></offline>\n\n    <div *ngIf="globalVariables.isConnected">\n\n        <div class="big-search-container animate-fade" *ngIf="!advertisement.img">\n            <img src="assets/img/logo_infox_big.png"/>\n            <form class="searchInput">\n                <ion-item no-lines>\n                    <ion-input type="text" placeholder="Ingresa el Negocio que buscas" (ionFocus)="openSearchModal()" readonly></ion-input>\n                    <button item-right ion-button color="primary" class="mic-button" (click)="openSpeechModal()">\n                        <ion-icon name="md-mic"></ion-icon>\n                    </button>\n                </ion-item>\n            </form>\n        </div>\n\n        <div *ngIf="advertisement.img" class="advertisement animate-fade">\n            <a (click)="goToPlaceDetails(advertisement.idnegocio)" *ngIf="advertisement.enlace == \'1\'">\n                <!--<a (click)="goToPlaceDetails(\'55760\')" *ngIf="advertisement.enlace == \'1\'">-->\n                <img src="{{advertisement.url + advertisement.img}}">\n            </a>\n            <a href="{{advertisement.url}}" onclick="window.open(this.href, \'_blank\'); return false;" *ngIf="advertisement.enlace == \'2\'">\n                <img src="{{advertisement.url + advertisement.img}}">\n            </a>\n            <a *ngIf="advertisement.enlace != \'1\' && advertisement.enlace != \'2\'">\n                <img src="{{advertisement.url + advertisement.img}}">\n            </a>\n        </div>\n\n    </div>\n\n    <!--<button ion-button (click)="goToPlaceDetails(\'55760\')"> Negocio</button>-->\n    <!--<button ion-button (click)="get()"> PERMISOSSSS</button>-->\n    <!--<button ion-button (click)="go()"> MAP</button>-->\n</ion-content>\n'/*ion-inline-end:"/Users/ed/Library/Mobile Documents/com~apple~CloudDocs/Projects/enzorromovil/infox-v3/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__services_services__["a" /* AppService */],
            __WEBPACK_IMPORTED_MODULE_3__general_global_variables__["a" /* GlobalVariables */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_network_interface__["a" /* NetworkInterface */],
            __WEBPACK_IMPORTED_MODULE_4__general_general__["a" /* General */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ModalController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=6.js.map