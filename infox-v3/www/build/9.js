webpackJsonp([9],{

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(344);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(212);
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
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, fb, httpClient, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.httpClient = httpClient;
        this.toastCtrl = toastCtrl;
        this.fbResponse = {};
        this.user = {};
        this.api_url = 'http://infoxsoft.com/app/';
        this.operation = 'login';
    }
    LoginPage.prototype.facebookLogin = function () {
        var _this = this;
        this.fb.login(['public_profile', 'email'])
            .then(function (res) {
            console.log('Logged into Facebook!', res);
            _this.fbResponse = res;
            _this.fb.api('me?fields=id,name,email,first_name,last_name,picture.width(720).height(720).as(picture_large)', []).then(function (fbData) {
                var userObject = {
                    nombre: fbData.first_name,
                    apellidos: fbData.last_name,
                    email: fbData.email,
                    user_facebook_id: res.authResponse.userID,
                    facebook_object: JSON.stringify(res),
                    facebook_photo: fbData.picture_large.data.url
                };
                _this.registerFromFacebook(userObject).subscribe(function (user) {
                    alert('Ingresado con éxito');
                    localStorage.setItem('infox_user', JSON.stringify(user));
                });
            });
        })
            .catch(function (e) { return console.log('Error logging into Facebook', e); });
    };
    LoginPage.prototype.registerFromFacebook = function (fbOject) {
        var params = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpParams */]({
            fromObject: fbOject
        });
        return this.httpClient.get(this.api_url + 'registro_facebook.php', { params: params });
    };
    LoginPage.prototype.emailLogin = function () {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpParams */]({
            fromObject: this.user
        });
        this.httpClient.get(this.api_url + 'login.php', { params: params }).subscribe(function (data) {
            if (data.error) {
                alert(data.error);
            }
            else {
                localStorage.setItem('infox_user', JSON.stringify(data));
                var toast = _this.toastCtrl.create({
                    message: 'Loggeado con éxito',
                    duration: 3000,
                    position: 'top'
                });
                toast.present();
            }
        }, function (error) {
            console.log(error);
        });
    };
    LoginPage.prototype.emailRegister = function () {
        var params = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpParams */]({
            fromObject: this.user
        });
        this.httpClient.get(this.api_url + 'registro_facebook.php', { params: params }).subscribe(function (data) {
            if (data.error) {
                alert(data.error);
            }
        }, function (error) {
            console.log(error);
        });
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.isLoggedIn = function () {
        this.user = JSON.parse(localStorage.getItem('infox_user')).user;
        return (JSON.parse(localStorage.getItem('infox_user')));
    };
    LoginPage.prototype.logout = function () {
        if (confirm('Seguro que desea salir?')) {
            localStorage.removeItem('infox_user');
        }
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/ed/Library/Mobile Documents/com~apple~CloudDocs/Projects/enzorromovil/infox-v3/src/pages/login/login.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n        <ion-title>login</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <div *ngIf="!isLoggedIn()">\n        <ion-list>\n            <ion-item *ngIf="operation === \'register\'">\n                <ion-label floating>Nombre</ion-label>\n                <ion-input type="text" [(ngModel)]="user.nombre"></ion-input>\n            </ion-item>\n            <ion-item *ngIf="operation === \'register\'">\n                <ion-label floating>Apellido(s)</ion-label>\n                <ion-input type="text" [(ngModel)]="user.apellidos"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label floating>Email</ion-label>\n                <ion-input type="text" [(ngModel)]="user.email"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label floating>Contraseña</ion-label>\n                <ion-input type="password" [(ngModel)]="user.password"></ion-input>\n            </ion-item>\n            <ion-item *ngIf="operation === \'register\'">\n                <ion-label floating>Confirmar</ion-label>\n                <ion-input type="password" [(ngModel)]="user.password2"></ion-input>\n            </ion-item>\n        </ion-list>\n        <p>\n            <small *ngIf="operation === \'register\'">Ya tienes cuenta? <b><a (click)="operation = \'login\'">Ingresa</a></b></small>\n            <small *ngIf="operation === \'login\'">Aún no tienes cuenta? <b><a (click)="operation = \'register\'">Regístrate</a></b></small>\n        </p>\n        <hr />\n        <button *ngIf="operation === \'register\'" ion-button full (click)="emailRegister()" icon-start color="light"><ion-icon name="mail"></ion-icon> Registro con Email</button>\n        <button *ngIf="operation === \'login\'" ion-button full (click)="emailLogin()" icon-start color="light"><ion-icon name="mail"></ion-icon> Login con Email</button>\n        <div align-items-center>\n            <hr />\n        </div>\n        <button ion-button full (click)="facebookLogin()" icon-start><ion-icon name="logo-facebook"></ion-icon> Login con Facebook</button>\n    </div>\n    <div *ngIf="isLoggedIn()">\n        <h2>¡Bienvenido {{user.nombres}}!</h2>\n        <button ion-button full (click)="logout()" icon-start color="danger"><ion-icon name="exit"></ion-icon> Cerrar Sesión</button>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/ed/Library/Mobile Documents/com~apple~CloudDocs/Projects/enzorromovil/infox-v3/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__["a" /* Facebook */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__["a" /* Facebook */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ToastController */]) === "function" && _e || Object])
    ], LoginPage);
    return LoginPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=9.js.map