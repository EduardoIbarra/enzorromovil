webpackJsonp([9],{

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(450);
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

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_services__ = __webpack_require__(208);
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
    function LoginPage(navCtrl, navParams, fb, httpClient, toastCtrl, loadingCtrl, appService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.httpClient = httpClient;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.appService = appService;
        this.fbResponse = {};
        this.user = {};
        this.api_url = 'http://infoxsoft.com/app/';
        this.operation = 'login';
        this.countries = [];
        this.states = [];
        this.cities = [];
        this.appService.getCountries().subscribe(function (data) {
            _this.countries = JSON.parse(data._body);
            console.log(_this.countries);
        }, function (error) {
            console.log(error);
        });
        if (localStorage.getItem('infox_user')) {
            this.user = JSON.parse(localStorage.getItem('infox_user')).user;
        }
    }
    LoginPage.prototype.countryChanged = function () {
        var _this = this;
        this.appService.getStates(this.user.pais).subscribe(function (data) {
            _this.states = JSON.parse(data._body);
            console.log(_this.states);
        }, function (error) {
            console.log(error);
        });
    };
    LoginPage.prototype.stateChanged = function () {
        var _this = this;
        this.appService.getCities(this.user.estado).subscribe(function (data) {
            _this.cities = JSON.parse(data._body);
            console.log(_this.cities);
        }, function (error) {
            console.log(error);
        });
    };
    LoginPage.prototype.facebookLogin = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Por favor espere...",
            duration: 3000
        });
        this.fb.login(['public_profile', 'email'])
            .then(function (res) {
            console.log('Logged into Facebook!', res);
            _this.fbResponse = res;
            _this.fb.api('me?fields=id,name,email,first_name,last_name,picture.width(720).height(720).as(picture_large)', []).then(function (fbData) {
                var userObject = {
                    nombres: fbData.first_name,
                    apellidos: fbData.last_name,
                    email: fbData.email,
                    user_facebook_id: res.authResponse.userID,
                    facebook_object: JSON.stringify(res),
                    facebook_photo: fbData.picture_large.data.url
                };
                console.log(userObject);
                _this.registerFromFacebook(userObject).subscribe(function (user) {
                    alert('Ingresado con éxito');
                    localStorage.setItem('infox_user', JSON.stringify(user));
                    console.log(user);
                    _this.user = user.user;
                    loader.dismissAll();
                });
                loader.dismissAll();
            });
        })
            .catch(function (e) {
            console.log('Error logging into Facebook', e);
            loader.dismissAll();
        });
    };
    LoginPage.prototype.registerFromFacebook = function (fbOject) {
        var params = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpParams */]({
            fromObject: fbOject
        });
        return this.httpClient.get(this.api_url + 'registro_facebook.php', { params: params });
    };
    LoginPage.prototype.emailLogin = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Por favor espere..."
        });
        loader.present();
        var params = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpParams */]({
            fromObject: this.user
        });
        this.httpClient.get(this.api_url + 'login.php', { params: params }).subscribe(function (data) {
            if (data.error) {
                alert(data.error);
                loader.dismissAll();
            }
            else {
                _this.user.password = null;
                _this.user.password2 = null;
                localStorage.setItem('infox_user', JSON.stringify(data));
                var toast = _this.toastCtrl.create({
                    message: 'Loggeado con éxito',
                    duration: 3000,
                    position: 'top'
                });
                toast.present();
                loader.dismissAll();
            }
        }, function (error) {
            console.log(error);
            loader.dismissAll();
        });
    };
    LoginPage.prototype.emailRegister = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Por favor espere..."
        });
        loader.present();
        var params = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpParams */]({
            fromObject: this.user
        });
        this.httpClient.get(this.api_url + 'registro_facebook.php', { params: params }).subscribe(function (data) {
            if (data.error) {
                alert(data.error);
                loader.dismissAll();
                return;
            }
            var toast = _this.toastCtrl.create({
                message: 'Registrado con éxito',
                duration: 3000,
                position: 'top'
            });
            toast.present();
            _this.operation = 'login';
            loader.dismissAll();
        }, function (error) {
            console.log(error);
            loader.dismissAll();
        });
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.isLoggedIn = function () {
        return (JSON.parse(localStorage.getItem('infox_user')));
    };
    LoginPage.prototype.logout = function () {
        if (confirm('Seguro que desea salir?')) {
            localStorage.removeItem('infox_user');
            this.user.password = null;
            this.user.password2 = null;
        }
    };
    LoginPage.prototype.updateProfile = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Por favor espere...",
            duration: 3000
        });
        loader.present();
        var params = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpParams */]({
            fromObject: this.user
        });
        this.httpClient.get(this.api_url + 'editar_usuario.php', { params: params }).subscribe(function (data) {
            if (data.error) {
                alert(data.error);
            }
            var toast = _this.toastCtrl.create({
                message: 'Guardado con éxito',
                duration: 3000,
                position: 'top'
            });
            toast.present();
            loader.dismissAll();
        }, function (error) {
            console.log(error);
            loader.dismissAll();
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/ed/Library/Mobile Documents/com~apple~CloudDocs/Projects/enzorromovil/infox-v3/src/pages/login/login.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n        <ion-title *ngIf="!isLoggedIn()">Ingresar</ion-title>\n        <ion-title *ngIf="isLoggedIn()">Perfil</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <div *ngIf="!isLoggedIn()">\n        <ion-list>\n            <ion-item *ngIf="operation === \'register\'">\n                <ion-label floating>Nombre</ion-label>\n                <ion-input type="text" [(ngModel)]="user.nombres"></ion-input>\n            </ion-item>\n            <ion-item *ngIf="operation === \'register\'">\n                <ion-label floating>Apellido(s)</ion-label>\n                <ion-input type="text" [(ngModel)]="user.apellidos"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label floating>Email</ion-label>\n                <ion-input type="text" [(ngModel)]="user.email"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label floating>Contraseña</ion-label>\n                <ion-input type="password" [(ngModel)]="user.password"></ion-input>\n            </ion-item>\n            <ion-item *ngIf="operation === \'register\'">\n                <ion-label floating>Confirmar</ion-label>\n                <ion-input type="password" [(ngModel)]="user.password2"></ion-input>\n            </ion-item>\n        </ion-list>\n        <p>\n            <small *ngIf="operation === \'register\'">Ya tienes cuenta? <b><a (click)="operation = \'login\'">Ingresa</a></b></small>\n            <small *ngIf="operation === \'login\'">Aún no tienes cuenta? <b><a (click)="operation = \'register\'">Regístrate</a></b></small>\n        </p>\n        <hr />\n        <button *ngIf="operation === \'register\'" ion-button full (click)="emailRegister()" icon-start color="light"><ion-icon name="mail"></ion-icon> Registro con Email</button>\n        <button *ngIf="operation === \'login\'" ion-button full (click)="emailLogin()" icon-start color="light"><ion-icon name="mail"></ion-icon> Login con Email</button>\n        <div align-items-center>\n            <hr />\n        </div>\n        <button ion-button full (click)="facebookLogin()" icon-start><ion-icon name="logo-facebook"></ion-icon> Login con Facebook</button>\n    </div>\n    <div *ngIf="isLoggedIn()">\n        <div *ngIf="user">\n            <h2>¡Bienvenido {{user.nombres}}!</h2>\n\n            <ion-list>\n                <ion-item>\n                    <ion-label floating>Nombre</ion-label>\n                    <ion-input type="text" [(ngModel)]="user.nombres"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label floating>Apellido(s)</ion-label>\n                    <ion-input type="text" [(ngModel)]="user.apellidos"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label floating>Email</ion-label>\n                    <ion-input type="text" [(ngModel)]="user.email"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label floating>Contraseña</ion-label>\n                    <ion-input type="password" [(ngModel)]="user.password"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label floating>Confirmar</ion-label>\n                    <ion-input type="password" [(ngModel)]="user.password2"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label>País</ion-label>\n                    <ion-select [(ngModel)]="user.pais" (ionChange)="countryChanged()">\n                        <ion-option value="{{c.idpais}}" *ngFor="let c of countries">{{c.pais}}</ion-option>\n                    </ion-select>\n                </ion-item>\n                <ion-item>\n                    <ion-label>Estado</ion-label>\n                    <ion-select [(ngModel)]="user.estado" (ionChange)="stateChanged()">\n                        <ion-option value="{{c.idestado}}" *ngFor="let c of states">{{c.estado}}</ion-option>\n                    </ion-select>\n                </ion-item>\n                <ion-item>\n                    <ion-label>Municipio</ion-label>\n                    <ion-select [(ngModel)]="user.municipio">\n                        <ion-option value="{{c.idciudad}}" *ngFor="let c of cities">{{c.ciudad}}</ion-option>\n                    </ion-select>\n                </ion-item>\n                <ion-item>\n                    <ion-label>Sexo</ion-label>\n                    <ion-select [(ngModel)]="user.sexo">\n                        <ion-option value="hombre">Hombre</ion-option>\n                        <ion-option value="mujer">Mujer</ion-option>\n                        <ion-option value="otro">Otro</ion-option>\n                    </ion-select>\n                </ion-item>\n                <ion-item>\n                    <ion-label floating>Teléfono</ion-label>\n                    <ion-input type="number" [(ngModel)]="user.telefono"></ion-input>\n                </ion-item>\n            </ion-list>\n            <button ion-button full (click)="updateProfile()" icon-start><ion-icon name="exit"></ion-icon> Actualizar Perfil</button>\n        </div>\n        <button ion-button full (click)="logout()" icon-start color="danger"><ion-icon name="exit"></ion-icon> Cerrar Sesión</button>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/ed/Library/Mobile Documents/com~apple~CloudDocs/Projects/enzorromovil/infox-v3/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__["a" /* Facebook */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__["a" /* Facebook */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ToastController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* LoadingController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__services_services__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_services__["a" /* AppService */]) === "function" && _g || Object])
    ], LoginPage);
    return LoginPage;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=9.js.map