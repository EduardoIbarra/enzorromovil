webpackJsonp([9],{

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesPageModule", function() { return FavoritesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__favorites__ = __webpack_require__(342);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FavoritesPageModule = /** @class */ (function () {
    function FavoritesPageModule() {
    }
    FavoritesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__favorites__["a" /* FavoritesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__favorites__["a" /* FavoritesPage */]),
            ],
        })
    ], FavoritesPageModule);
    return FavoritesPageModule;
}());

//# sourceMappingURL=favorites.module.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__general_global_variables__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the FavoritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FavoritesPage = /** @class */ (function () {
    function FavoritesPage(navCtrl, navParams, httpClient, globalVariables) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpClient = httpClient;
        this.globalVariables = globalVariables;
        this.api_url = 'http://infoxsoft.com/app/';
        if (globalVariables.loggedIn()) {
            this.user = JSON.parse(localStorage.getItem('infox_user')).user;
            var favoritos = {
                id_usuario: this.user.id
            };
            var params = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpParams */]({
                fromObject: favoritos
            });
            this.httpClient.get(this.api_url + 'consulta_favoritos.php', { params: params }).subscribe(function (data) {
                _this.favorites = data.favoritos_info;
                console.log(_this.favorites);
                if (data.error) {
                    alert(data.error);
                }
            }, function (error) {
                console.log(error);
            });
        }
    }
    FavoritesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FavoritesPage');
    };
    FavoritesPage.prototype.isLoggedIn = function () {
        return (JSON.parse(localStorage.getItem('infox_user')));
    };
    FavoritesPage.prototype.getUserName = function () {
        var user = JSON.parse(localStorage.getItem('infox_user')).user;
        return user.nombres + ' ' + user.apellidos;
    };
    FavoritesPage.prototype.goToLogin = function () {
        this.navCtrl.parent.select(4);
    };
    FavoritesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-favorites',template:/*ion-inline-start:"/Users/rafaelramirez/Documents/sites/enzorromovil/infox-v3/src/pages/favorites/favorites.html"*/'<!--\n  Generated template for the FavoritesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Mis Favoritos</ion-title>\n    <ion-buttons end>\n      <span id="loggedUserName" *ngIf="isLoggedIn()">\n        <ion-icon name="contact" class="white-color"></ion-icon>\n      </span>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content no-padding>\n  <ion-list>\n    <button ion-item detail-none *ngFor="let place of favorites" [ngClass]="(place.data[0].plan == 4) ? \'item-featured\' : \'\'" (click)="getPlaceDetails(place.data[0].idnum)">\n      <ion-avatar item-start *ngIf="place.data[0].banner && place.data[0].plan !== \'\'" class="list-place-img">\n        <img [src]="\'http://infox.mx/\' + place.data[0].banner">\n        <!--<img style="background-image: url(http://infox.mx/{{place.data[0].banner}})">-->\n      </ion-avatar>\n      <ion-avatar item-start *ngIf="!place.data[0].banner || place.data[0].plan === \'\'" class="list-place-img">\n        <img src="assets/img/logo_infox_big.png">\n        <!--<img style="background-image: url(assets/img/logo_infox_big.png); background-size: contain;">-->\n      </ion-avatar>\n      <div class="itemPadding">\n        <h2 class="search-list-place-name">{{place.data[0].nombre | lowercase}}</h2>\n        <span class="category">\n                    <ion-icon name="{{place.data[0].iconStyle}}"></ion-icon>\n                    {{place.data[0].clasificacion | lowercase}}\n                 </span>\n        <p *ngIf="place.data[0].casa || place.data[0].otrosdatos">\n          <ion-icon name="md-information-circle"></ion-icon>\n          {{place.data[0].casa || place.data[0].otrosdatos}}\n        </p>\n        <p class="textCapitalize bigIcon">\n          <b>\n            <ion-icon name="ios-pin" *ngIf="place.data[0].latitud && place.data[0].longitud"></ion-icon>\n            {{place.data[0].ciudad}}, {{place.data[0].estado}}\n          </b>\n        </p>\n        <p *ngIf="place.data[0].horarios" class="textCapitalize hours-text">\n          <ion-icon name="md-time"></ion-icon>\n          {{place.data[0].horarios}}\n        </p>\n      </div>\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/rafaelramirez/Documents/sites/enzorromovil/infox-v3/src/pages/favorites/favorites.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__general_global_variables__["a" /* GlobalVariables */]])
    ], FavoritesPage);
    return FavoritesPage;
}());

//# sourceMappingURL=favorites.js.map

/***/ })

});
//# sourceMappingURL=9.js.map