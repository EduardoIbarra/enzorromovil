webpackJsonp([4],{

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageModule", function() { return SearchPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_offline_offline_module__ = __webpack_require__(311);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SearchPageModule = /** @class */ (function () {
    function SearchPageModule() {
    }
    SearchPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__search__["a" /* SearchPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__search__["a" /* SearchPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_offline_offline_module__["a" /* OfflineComponentModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__search__["a" /* SearchPage */]
            ]
        })
    ], SearchPageModule);
    return SearchPageModule;
}());

//# sourceMappingURL=search.module.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OfflineComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__offline__ = __webpack_require__(312);
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

/***/ 312:
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
            selector: 'offline',template:/*ion-inline-start:"/Users/ed/Downloads/enzorromovil/infox-v3/src/components/offline/offline.html"*/'<ion-grid>\n    <ion-row justify-content-center align-items-center >\n        <div class="offline-content" text-center text-wrap>\n            <img src="assets/img/offline.png" >\n            <br />\n            No hay conexión a internet\n        </div>\n    </ion-row>\n</ion-grid>'/*ion-inline-end:"/Users/ed/Downloads/enzorromovil/infox-v3/src/components/offline/offline.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], OfflineComponent);
    return OfflineComponent;
}());

//# sourceMappingURL=offline.js.map

/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_services__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__general_global_variables__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__general_general__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_place_clasification__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pipes_order_by_order_by__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SearchPage = /** @class */ (function () {
    function SearchPage(navCtrl, navParams, modalCtrl, globalVariables, general, placeClasification, appService, orderBy, httpClient) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.globalVariables = globalVariables;
        this.general = general;
        this.placeClasification = placeClasification;
        this.appService = appService;
        this.orderBy = orderBy;
        this.httpClient = httpClient;
        this.showData = false;
        this.form = { page: 1 };
        this.places = [];
        this.order = 'plan';
        this.api_url = 'http://infox.mx/apps/';
        this.myFavorites = [];
        this.searchQuery = globalVariables.searchParams || null;
        this.getPlaces(false);
        if (this.globalVariables.goToPlace) {
            this.navCtrl.push('PlacePage', {}, { animate: false });
        }
        this.getFavorites();
    }
    SearchPage.prototype.viewWillEnter = function () {
        this.recentSearch = this.general.getLastSearch();
    };
    SearchPage.prototype.getPlaces = function (scrollToTop) {
        var _this = this;
        if (!this.globalVariables.isConnected) {
            this.general.showNetworkConnectionAlert();
            return;
        }
        if (scrollToTop) {
            this.content.scrollToTop(1000);
        }
        if (this.searchQuery) {
            this.recentSearch = this.general.getLastSearch();
            this.general.presentLoadingMask();
            this.emptyMessage = "Espera por favor, estamos buscando ";
            this.appService.getPlaces(this.searchQuery, this.form.page, this.globalVariables.getDay()).subscribe(function (response) {
                _this.places = [];
                _this.records = response.json().filas;
                _this.places = _this.placeClasification.sortClasification(response.json().data) || [];
                if (_this.places.length > 0) {
                    if (_this.places[0].plan !== '4') {
                        _this.places = _this.orderBy.transform(_this.places, _this.order);
                    }
                }
                if (_this.refresher) {
                    _this.refresher.complete();
                }
                console.log(_this.places);
                _this.showData = true;
                _this.general.dismissLoadingMask();
                _this.emptyMessage = "No hay resultados en este momento para ";
            }, function (error) {
                console.log(error);
                if (_this.refresher) {
                    _this.refresher.complete();
                }
                _this.places = [];
                _this.showData = true;
            });
        }
        else {
            this.emptyMessage = "No hay resultados en este momento";
        }
    };
    SearchPage.prototype.refresh = function (refresher) {
        this.refresher = refresher;
        this.getPlaces(false);
    };
    SearchPage.prototype.calculatePages = function () {
        return Math.floor(this.records / 15);
    };
    SearchPage.prototype.getPlaceDetails = function (placeId) {
        if (!this.globalVariables.isConnected) {
            this.general.showNetworkConnectionAlert();
            return;
        }
        this.globalVariables.placeId = placeId;
        this.navCtrl.push('PlacePage');
    };
    SearchPage.prototype.openSearchModal = function () {
        var _this = this;
        if (!this.globalVariables.isConnected) {
            this.general.showNetworkConnectionAlert();
            return;
        }
        var modal = this.modalCtrl.create('SearchPlacePage', { samePage: true });
        modal.present();
        modal.onDidDismiss(function (data) {
            if (data) {
                _this.places = [];
                _this.searchQuery = data;
                _this.content.scrollToTop(1000);
                _this.getPlaces(false);
            }
        });
    };
    SearchPage.prototype.openSpeechModal = function () {
        var _this = this;
        if (!this.globalVariables.isConnected) {
            this.general.showNetworkConnectionAlert();
            return;
        }
        var modal = this.modalCtrl.create('SpeechModalPage', { samePageSearch: true });
        modal.present();
        modal.onWillDismiss(function (data) {
            console.log(data);
            if (data) {
                _this.places = [];
                _this.searchQuery = data;
                _this.content.scrollToTop(1000);
                _this.getPlaces(false);
            }
        });
    };
    SearchPage.prototype.isLoggedIn = function () {
        return (JSON.parse(localStorage.getItem('infox_user')));
    };
    SearchPage.prototype.getStarName2 = function (starN, rate) {
        return (starN <= rate) ? 'star' : 'star-outline';
    };
    SearchPage.prototype.getFavorites = function () {
        var _this = this;
        if (!JSON.parse(localStorage.getItem('infox_user'))) {
            return;
        }
        this.user = JSON.parse(localStorage.getItem('infox_user')).user;
        if (!JSON.parse(localStorage.getItem('infox_user'))) {
            return;
        }
        var favoritos = {
            id_usuario: this.user.id
        };
        var params = new __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["c" /* HttpParams */]({
            fromObject: favoritos
        });
        this.httpClient.get(this.api_url + 'consulta_favoritos.php', { params: params }).subscribe(function (data) {
            _this.favorites = data.favoritos_info;
            _this.myFavorites = data.negociosFav;
            localStorage.setItem('my_favorites', JSON.stringify(data.negociosFav));
            console.log(data.negociosFav);
            if (data.error) {
                alert(data.error);
            }
        }, function (error) {
            console.log(error);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Content */])
    ], SearchPage.prototype, "content", void 0);
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search',template:/*ion-inline-start:"/Users/ed/Downloads/enzorromovil/infox-v3/src/pages/search/search.html"*/'<ion-header>\n\n    <ion-toolbar color="primary">\n        <ion-title>\n            <div text-center>\n                <img src="assets/img/logo_infox_white.png" class="mainLogo"/>\n            </div>\n        </ion-title>\n        <ion-buttons end>\n          <span id="loggedUserName" *ngIf="isLoggedIn()">\n            <ion-icon name="contact" class="white-color"></ion-icon>\n          </span>\n        </ion-buttons>\n    </ion-toolbar>\n    <ion-navbar color="primary">\n        <ion-input mode="ios" placeholder="Buscar..." value="{{recentSearch}}" (ionFocus)="openSearchModal()" readonly>\n            <ion-icon name="md-mic"></ion-icon>\n        </ion-input>\n        <ion-buttons end>\n            <button item-right ion-button color="light" class="mic-button" (click)="openSpeechModal()">\n                <ion-icon name="md-mic"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content no-padding>\n    <ion-refresher (ionRefresh)="refresh($event)" *ngIf="searchQuery && globalVariables.isConnected">\n        <ion-refresher-content\n                pullingIcon="md-arrow-down"\n                pullingText="Estira Para Actualizar...">\n        </ion-refresher-content>\n    </ion-refresher>\n\n    <offline *ngIf="!globalVariables.isConnected && places.length === 0"></offline>\n\n    <div no-lines text-center text-wrap padding-top class="simple-message" *ngIf="places.length <= 0 && globalVariables.isConnected">{{emptyMessage}} <b>{{searchQuery}}</b></div>\n    <div [ngClass]="{\'animate-fade-item\': showData, \'fadeOut\': !showData}" *ngIf="globalVariables.isConnected || places.length > 0">\n        <ion-list>\n            <button ion-item detail-none *ngFor="let place of places" [ngClass]="{\'item-featured\': place.plan == 4, \'item-starred\': myFavorites.includes(place.idnum)}" (click)="getPlaceDetails(place.idnum)">\n                <ion-icon class="addedAsFavorite" *ngIf="myFavorites.includes(place.idnum)" name="star"></ion-icon>\n                <ion-avatar item-start *ngIf="place.banner && place.plan !== \'\'" class="list-place-img">\n                    <img [src]="\'http://infox.mx/\' + place.banner">\n                    <!--<img style="background-image: url(http://infox.mx/{{place.banner}})">-->\n                </ion-avatar>\n                <ion-avatar item-start *ngIf="!place.banner || place.plan === \'\'" class="list-place-img">\n                    <img src="assets/img/logo_infox_big.png">\n                    <!--<img style="background-image: url(assets/img/logo_infox_big.png); background-size: contain;">-->\n                </ion-avatar>\n                <div class="itemPadding">\n                    <h2 class="search-list-place-name">{{place.nombre | lowercase}}</h2>\n\n                    <div class="rate-stars" *ngIf="place.num_resenas !== 0">\n                        <span color="infox">{{place.promedio_calificacion | number: \'1.0-2\'}}</span>\n                        <ion-icon style="font-size: 1.2em" name="{{getStarName2(1, place.promedio_calificacion)}}"></ion-icon>\n                        <ion-icon style="font-size: 1.2em" name="{{getStarName2(2, place.promedio_calificacion)}}"></ion-icon>\n                        <ion-icon style="font-size: 1.2em" name="{{getStarName2(3, place.promedio_calificacion)}}"></ion-icon>\n                        <ion-icon style="font-size: 1.2em" name="{{getStarName2(4, place.promedio_calificacion)}}"></ion-icon>\n                        <ion-icon style="font-size: 1.2em" name="{{getStarName2(5, place.promedio_calificacion)}}"></ion-icon>\n                        <span>({{place.num_resenas}})</span>\n                    </div>\n\n\n                    <span class="category">\n                    <ion-icon name="{{place.iconStyle}}"></ion-icon>\n                    {{place.clasificacion | lowercase}}\n                 </span>\n                    <p *ngIf="place.casa || place.otrosdatos">\n                        <ion-icon name="md-information-circle"></ion-icon>\n                        {{place.casa || place.otrosdatos}}\n                    </p>\n                    <p class="textCapitalize bigIcon">\n                        <b>\n                            <ion-icon name="ios-pin" *ngIf="place.latitud && place.longitud"></ion-icon>\n                            {{place.ciudad}}, {{place.estado}}\n                        </b>\n                    </p>\n                    <p *ngIf="place.horarios" class="textCapitalize hours-text">\n                        <ion-icon name="md-time"></ion-icon>\n                        {{place.horarios}}\n                    </p>\n                    <br *ngIf="place.promos.length > 0"/>\n                    <div *ngIf="place.promos.length > 0" class="promo-ribbon">\n                        <ion-icon name="md-pricetag"></ion-icon>\n                        {{place.promos[0].descripcion}}\n                    </div>\n                </div>\n            </button>\n        </ion-list>\n        <div *ngIf="places.length > 0" text-center padding>\n            <span *ngIf="calculatePages() > 0">Página\n                <strong>{{form.page}}</strong> de\n                <strong> {{calculatePages()}}</strong> |\n            </span><span><strong>{{records}}</strong>\n            <span *ngIf="records == 1"> Resultado</span>\n            <span *ngIf="records > 1">Resultados</span>\n\n        </span>\n        </div>\n        <div text-center *ngIf="places.length > 0 && (places.length > 14 || form.page !== 1) " class="buttonGroup" no-padding>\n            <button ion-button full icon-left (click)="form.page = 1 ; getPlaces(true)" [disabled]="form.page == 1" color="light">\n                <ion-icon name="home"></ion-icon>\n                Primera\n            </button>\n            <button ion-button full icon-left (click)="globalVariables.isConnected ? form.page = form.page - 1: \'\' ; getPlaces(true)" [disabled]="form.page <= 1" color="light">\n                <ion-icon name="ios-arrow-back"></ion-icon>\n                Atrás\n            </button>\n            <button ion-button full icon-right (click)="globalVariables.isConnected ?form.page = form.page + 1:\'\' ; getPlaces(true)" [disabled]="places.length < 14" color="primary">\n                Siguiente\n                <ion-icon name="ios-arrow-forward"></ion-icon>\n            </button>\n        </div>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/ed/Downloads/enzorromovil/infox-v3/src/pages/search/search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__general_global_variables__["a" /* GlobalVariables */],
            __WEBPACK_IMPORTED_MODULE_4__general_general__["a" /* General */],
            __WEBPACK_IMPORTED_MODULE_5__services_place_clasification__["a" /* PlaceClasification */],
            __WEBPACK_IMPORTED_MODULE_2__services_services__["a" /* AppService */],
            __WEBPACK_IMPORTED_MODULE_6__pipes_order_by_order_by__["a" /* OrderByPipe */],
            __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["a" /* HttpClient */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ })

});
//# sourceMappingURL=4.js.map