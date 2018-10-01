webpackJsonp([10],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return General; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_variables__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_diagnostic__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_open_native_settings__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_network__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var General = /** @class */ (function () {
    function General(loadingCtrl, globalVariables, network, toastCtrl, alertCtrl, diagnostic, openNativeSettings) {
        this.loadingCtrl = loadingCtrl;
        this.globalVariables = globalVariables;
        this.network = network;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.diagnostic = diagnostic;
        this.openNativeSettings = openNativeSettings;
    }
    General.prototype.removeAccents = function (str) {
        var accents = 'ÁáÉéÍíÓóÚú';
        var accentsOut = "AaEeIiOoUu";
        if (str === undefined)
            return;
        str = str.split('');
        var strLen = str.length;
        var i, x;
        for (i = 0; i < strLen; i++) {
            if ((x = accents.indexOf(str[i])) != -1) {
                str[i] = accentsOut[x];
            }
        }
        return str.join('');
    };
    General.prototype.presentLoadingMask = function () {
        this.loadingMask = this.loadingCtrl.create({
            spinner: 'hide',
            content: "<div class=\"loader circle\"></div>",
        });
        this.loadingMask.present();
    };
    General.prototype.dismissLoadingMask = function () {
        this.loadingMask.dismiss();
    };
    General.prototype.getLastSearch = function () {
        return this.globalVariables.recentSearch;
    };
    General.prototype.getLastNearbySearch = function () {
        return this.globalVariables.recentNearbySearch;
    };
    General.prototype.getLocationPermission = function () {
        var _this = this;
        this.diagnostic.isLocationAuthorized().then(function (authorized) {
            console.log(authorized);
            if (authorized) {
                _this.openNativeSettings.open('location').then(function (data) {
                    console.log('Settings opened');
                    console.log(data);
                });
            }
            else {
                _this.diagnostic.requestLocationAuthorization().then(function (authorized) {
                    console.log(authorized);
                    if (authorized) {
                        console.log('Proceed get places - location - etc');
                    }
                    else {
                        console.log('show aleertsssssss');
                    }
                });
            }
        }).catch(function (error) {
            console.log(error);
        });
    };
    General.prototype.displayNetworkUpdate = function (connectionState) {
        // let networkType = this.network.type;
        var message;
        message = connectionState === 'offline' ? 'Conexión a internet perdida' : 'Conexión a internet restablecida';
        this.toastCtrl.create({
            message: message,
            duration: 5000,
            position: 'top'
        }).present();
    };
    General.prototype.showNetworkConnectionAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'No se ha detectado conexión a internet',
            message: 'No es posible realizar esta acción, verifica tu conexión a la red',
            buttons: ['Cerrar']
        });
        alert.present();
    };
    General = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__global_variables__["a" /* GlobalVariables */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_diagnostic__["a" /* Diagnostic */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_open_native_settings__["a" /* OpenNativeSettings */]])
    ], General);
    return General;
}());

//# sourceMappingURL=general.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppService = /** @class */ (function () {
    function AppService(http, jsonp) {
        var _this = this;
        this.http = http;
        this.jsonp = jsonp;
        this.api_url = 'http://infoxsoft.com/app/';
        this.getAdvertisement = function () {
            return _this.jsonp.get('http://www.infox.mx/apps/consulta_anunciopor.php?&jsoncallback=JSONP_CALLBACK');
        };
        this.autocompleteSearch = function (query) {
            return _this.jsonp.get('http://www.infox.mx/apps/autocomplete.php?jsoncallback=JSONP_CALLBACK&termino=' + query);
        };
        this.getPlaces = function (query, page, day) {
            return _this.jsonp.get('http://infoxsoft.com/app/consulta_datos.php?termino=' + query + '&page=' + page + '&ciudad=0&dia=' + day + '&jsoncallback=JSONP_CALLBACK');
            //return this.jsonp.get('http://infox.mx/apps/consulta_datos.php?termino=' + query + '&page=' + page + '&ciudad=0&dia=' + day + '&jsoncallback=JSONP_CALLBACK');
        };
        this.getPlaceDetails = function (placeId) {
            return _this.jsonp.get('http://infoxsoft.com/app/consulta_info.php?idnum=' + placeId + '&jsoncallback=JSONP_CALLBACK');
            //return this.jsonp.get('http://infox.mx/apps/consulta_info.php?idnum=' + placeId + '&jsoncallback=JSONP_CALLBACK');
        };
        this.sendComments = function (placeId, comments) {
            return _this.jsonp.get('http://infox.mx/apps/datos_incorrectos.php?idnum=' + placeId + '&comentarios=' + comments + '&jsoncallback=JSONP_CALLBACK');
        };
        this.getNearbyPlaces = function (lat, lng, page, search) {
            return _this.jsonp.get('http://infox.mx/apps/georapp_json.php?callback=JSONP_CALLBACK&lat=' + lat + '&lng=' + lng + '&np=' + page + '&b=' + search).map(function (response) {
                return response.json();
            });
        };
        this.getGpsData = function (userLat, userLng, placeLat, placeLng, mode) {
            return _this.http.get('https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=' + userLat + ',' + userLng + '&destinations=' + placeLat + ',' + placeLng + '&mode=' + mode + '&language=es&key=AIzaSyDhHyggzzMjFmbrFXj-edhwN-xOJmuaT6g');
        };
        this.getCountries = function () {
            return _this.http.get(_this.api_url + 'manual_location.php?operation=countries');
        };
        this.getStates = function (country) {
            return _this.http.get(_this.api_url + 'manual_location.php?operation=states&country=' + country);
        };
        this.getCities = function (state) {
            return _this.http.get(_this.api_url + 'manual_location.php?operation=cities&state=' + state);
        };
    }
    AppService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Jsonp */]])
    ], AppService);
    return AppService;
}());

//# sourceMappingURL=services.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__general_global_variables__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(168);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage(navParams, navCtrl, app, globalVariables) {
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.app = app;
        this.globalVariables = globalVariables;
        this.tabNearbyInactive = true;
        this.tabIndex = this.navParams.get('tabIndex');
        this.searchParam = this.navParams.get('search');
        this.goToPlace = this.navParams.get('goToPlace');
        this.tab1Root = 'HomePage';
        this.tab2Root = 'FavoritesPage';
        this.tab3Root = 'NearbyPage';
        this.tab4Root = 'SearchPage';
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */];
        globalVariables.searchParams = this.searchParam;
        globalVariables.goToPlace = this.goToPlace;
    }
    TabsPage.prototype.getCurrentPage = function () {
        this.tabNearbyInactive = this.tabRef.getSelected().index != 2;
        this.globalVariables.nearbyTabActive = this.tabRef.getSelected().index == 2;
    };
    TabsPage.prototype.selectHome = function () {
        this.tabRef.select(0);
        // let nav = this.app.getRootNav();
        // nav.setRoot(TabsPage, {tabIndex: 0})
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('tabs'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Tabs */])
    ], TabsPage.prototype, "tabRef", void 0);
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/ed/Library/Mobile Documents/com~apple~CloudDocs/Projects/enzorromovil/infox-v3/src/pages/tabs/tabs.html"*/'<ion-tabs #tabs [ngClass]="{\'central-icon\' : tabNearbyInactive === true}" (ionChange)="getCurrentPage()" [selectedIndex]="tabIndex">\n    <ion-tab [root]="tab1Root" (click)="selectHome()" tabTitle="Inicio" tabIcon="home"></ion-tab>\n    <ion-tab [root]="tab2Root"  tabTitle="Favoritos" tabIcon="star"></ion-tab>\n    <ion-tab [root]="tab3Root"  tabTitle="Cercano" tabIcon="md-pin"></ion-tab>\n    <ion-tab [root]="tab4Root"  tabTitle="Buscar" tabIcon="search"></ion-tab>\n    <ion-tab [root]="tab5Root"  tabTitle="Login" tabIcon="cog"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"/Users/ed/Library/Mobile Documents/com~apple~CloudDocs/Projects/enzorromovil/infox-v3/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_2__general_global_variables__["a" /* GlobalVariables */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 123:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 123;

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/favorites/favorites.module": [
		301,
		9
	],
	"../pages/home/home.module": [
		302,
		6
	],
	"../pages/modals/dishes-modal/dishes-modal.module": [
		303,
		0
	],
	"../pages/modals/gps-modal/gps-modal.module": [
		304,
		2
	],
	"../pages/modals/incorrect-modal/incorrect-modal.module": [
		305,
		8
	],
	"../pages/modals/search-place/search-place.module": [
		306,
		7
	],
	"../pages/modals/speech-modal/speech-modal.module": [
		307,
		3
	],
	"../pages/nearby/nearby.module": [
		308,
		5
	],
	"../pages/place/place.module": [
		309,
		1
	],
	"../pages/search/search.module": [
		310,
		4
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 164;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_services__ = __webpack_require__(107);
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
            if (this.user.pais) {
                this.countryChanged();
            }
            if (this.user.estado) {
                this.stateChanged();
            }
            this.user.password = null;
            this.user.password2 = null;
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
                if (_this.user.pais) {
                    _this.countryChanged();
                }
                if (_this.user.estado) {
                    _this.stateChanged();
                }
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
            selector: 'page-login',template:/*ion-inline-start:"/Users/ed/Library/Mobile Documents/com~apple~CloudDocs/Projects/enzorromovil/infox-v3/src/pages/login/login.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n        <ion-title *ngIf="!isLoggedIn()">Ingresar</ion-title>\n        <ion-title *ngIf="isLoggedIn()">Perfil</ion-title>\n        <ion-buttons end>\n      <span id="loggedUserName" *ngIf="isLoggedIn()">\n        <ion-icon name="contact" class="white-color"></ion-icon>\n      </span>\n        </ion-buttons>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <div *ngIf="!isLoggedIn()">\n        <ion-list>\n            <ion-item *ngIf="operation === \'register\'">\n                <ion-label floating>Nombre</ion-label>\n                <ion-input type="text" [(ngModel)]="user.nombres"></ion-input>\n            </ion-item>\n            <ion-item *ngIf="operation === \'register\'">\n                <ion-label floating>Apellido(s)</ion-label>\n                <ion-input type="text" [(ngModel)]="user.apellidos"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label floating>Email</ion-label>\n                <ion-input type="text" [(ngModel)]="user.email"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label floating>Contraseña</ion-label>\n                <ion-input type="password" [(ngModel)]="user.password"></ion-input>\n            </ion-item>\n            <ion-item *ngIf="operation === \'register\'">\n                <ion-label floating>Confirmar</ion-label>\n                <ion-input type="password" [(ngModel)]="user.password2"></ion-input>\n            </ion-item>\n        </ion-list>\n        <p>\n            <small *ngIf="operation === \'register\'">Ya tienes cuenta? <b><a (click)="operation = \'login\'">Ingresa</a></b></small>\n            <small *ngIf="operation === \'login\'">Aún no tienes cuenta? <b><a (click)="operation = \'register\'">Regístrate</a></b></small>\n        </p>\n        <hr />\n        <button *ngIf="operation === \'register\'" ion-button full (click)="emailRegister()" icon-start color="light"><ion-icon name="mail"></ion-icon> Registro con Email</button>\n        <button *ngIf="operation === \'login\'" ion-button full (click)="emailLogin()" icon-start color="light"><ion-icon name="mail"></ion-icon> Login con Email</button>\n        <div align-items-center>\n            <hr />\n        </div>\n        <button ion-button full (click)="facebookLogin()" icon-start><ion-icon name="logo-facebook"></ion-icon> Login con Facebook</button>\n    </div>\n    <div *ngIf="isLoggedIn()">\n        <div *ngIf="user">\n            <h2>¡Bienvenido {{user.nombres}}!</h2>\n\n            <ion-list>\n                <ion-item>\n                    <ion-label floating>Nombre</ion-label>\n                    <ion-input type="text" [(ngModel)]="user.nombres"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label floating>Apellido(s)</ion-label>\n                    <ion-input type="text" [(ngModel)]="user.apellidos"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label floating>Email</ion-label>\n                    <ion-input type="text" [(ngModel)]="user.email"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label floating>Contraseña</ion-label>\n                    <ion-input type="password" [(ngModel)]="user.password"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label floating>Confirmar</ion-label>\n                    <ion-input type="password" [(ngModel)]="user.password2"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label>País</ion-label>\n                    <ion-select [(ngModel)]="user.pais" (ionChange)="countryChanged()">\n                        <ion-option value="{{c.idpais}}" *ngFor="let c of countries">{{c.pais}}</ion-option>\n                    </ion-select>\n                </ion-item>\n                <ion-item>\n                    <ion-label>Estado</ion-label>\n                    <ion-select [(ngModel)]="user.estado" (ionChange)="stateChanged()">\n                        <ion-option value="{{c.idestado}}" *ngFor="let c of states">{{c.estado}}</ion-option>\n                    </ion-select>\n                </ion-item>\n                <ion-item>\n                    <ion-label>Municipio</ion-label>\n                    <ion-select [(ngModel)]="user.ciudad">\n                        <ion-option value="{{c.idciudad}}" *ngFor="let c of cities">{{c.ciudad}}</ion-option>\n                    </ion-select>\n                </ion-item>\n                <ion-item>\n                    <ion-label>Sexo</ion-label>\n                    <ion-select [(ngModel)]="user.sexo">\n                        <ion-option value="hombre">Hombre</ion-option>\n                        <ion-option value="mujer">Mujer</ion-option>\n                        <ion-option value="otro">Otro</ion-option>\n                    </ion-select>\n                </ion-item>\n                <ion-item>\n                    <ion-label floating>Teléfono</ion-label>\n                    <ion-input type="number" [(ngModel)]="user.telefono"></ion-input>\n                </ion-item>\n            </ion-list>\n            <button ion-button full (click)="updateProfile()" icon-start><ion-icon name="exit"></ion-icon> Actualizar Perfil</button>\n        </div>\n        <button ion-button full (click)="logout()" icon-start color="danger"><ion-icon name="exit"></ion-icon> Cerrar Sesión</button>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/ed/Library/Mobile Documents/com~apple~CloudDocs/Projects/enzorromovil/infox-v3/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__["a" /* Facebook */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__services_services__["a" /* AppService */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaceClasification; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlaceClasification = /** @class */ (function () {
    function PlaceClasification() {
        this.sortClasification = function (clasifications) {
            for (var i = 0; i < clasifications.length; i++) {
                //Default icon
                clasifications[i].icon = 'infox.png';
                switch (clasifications[i].clasificacion) {
                    case 'ESCUELAS':
                        clasifications[i].iconStyle = 'ios-school';
                        clasifications[i].icon = 'school.png';
                        break;
                    case 'COMIDAS RAPIDAS':
                        clasifications[i].iconStyle = 'md-pizza';
                        clasifications[i].icon = 'restaurant.png';
                        break;
                    case 'RESTAURANTES':
                        clasifications[i].iconStyle = 'md-restaurant';
                        clasifications[i].icon = 'restaurant.png';
                        break;
                    case 'REFACCIONARIAS':
                        clasifications[i].iconStyle = 'ios-hammer';
                        break;
                    case 'SALONES':
                        clasifications[i].iconStyle = 'ios-musical-notes';
                        break;
                    case 'VENTA DE MATERIALES':
                        clasifications[i].iconStyle = 'ios-build';
                        break;
                    case 'AGENCIAS AUTOMOTRICES':
                        clasifications[i].iconStyle = 'md-car';
                        break;
                    case 'FERRETERIAS':
                        clasifications[i].iconStyle = 'ios-construct';
                        break;
                    case 'BANCOS':
                        clasifications[i].iconStyle = 'logo-usd';
                        clasifications[i].icon = 'banks.png';
                        break;
                    case 'TELEVISION SATELITAL':
                        clasifications[i].iconStyle = 'md-desktop';
                        break;
                    case 'IGLESIAS':
                        clasifications[i].iconStyle = 'ios-flower';
                        clasifications[i].icon = 'church.png';
                        break;
                    case 'GASES INDUSTRIALES':
                        clasifications[i].iconStyle = 'ios-flame';
                        clasifications[i].icon = 'gas-station.png';
                        break;
                    case 'GASOLINERAS':
                        clasifications[i].iconStyle = 'ios-water';
                        clasifications[i].icon = 'gas-station.png';
                        break;
                    case 'HOSPITALES':
                        clasifications[i].iconStyle = 'md-medkit';
                        clasifications[i].icon = 'hospital.png';
                        break;
                    case 'CENTROS MEDICOS':
                        clasifications[i].iconStyle = 'md-medkit';
                        clasifications[i].icon = 'hospital.png';
                        break;
                    case 'HOTELES':
                        clasifications[i].iconStyle = 'ios-briefcase';
                        clasifications[i].icon = 'hotel.png';
                        break;
                    case 'MUSEOS':
                        clasifications[i].iconStyle = 'md-color-palette';
                        clasifications[i].icon = 'museum.png';
                        break;
                    case 'CAJEROS AUTOMATICOS':
                        clasifications[i].iconStyle = 'ios-card';
                        clasifications[i].icon = 'atm.png';
                        break;
                    case 'COMPUTADORAS':
                        clasifications[i].iconStyle = 'md-desktop';
                        break;
                    case 'PASTELERIAS':
                        clasifications[i].iconStyle = 'ios-restaurant';
                        clasifications[i].icon = 'restaurant.png';
                        break;
                    case 'TIENDAS DEPARTAMENTALES':
                        clasifications[i].iconStyle = 'md-cart';
                        break;
                    case 'OPTICAS':
                        clasifications[i].iconStyle = 'md-glasses';
                        break;
                    case 'CONSTRUCTORAS':
                        clasifications[i].iconStyle = 'ios-construct';
                        break;
                    case 'VIDRIERIAS':
                        clasifications[i].iconStyle = 'logo-windows';
                        break;
                    case 'DOCTORES':
                        clasifications[i].iconStyle = 'md-medkit';
                        clasifications[i].icon = 'hospital.png';
                        break;
                    case 'GOBIERNO':
                        clasifications[i].iconStyle = 'ios-globe';
                        clasifications[i].icon = 'museum.png';
                        break;
                    case 'TAXIS':
                        clasifications[i].iconStyle = 'md-car';
                        break;
                    case 'MENSAJERIAS':
                        clasifications[i].iconStyle = 'logo-dropbox';
                        break;
                    case 'PERIODICOS':
                        clasifications[i].iconStyle = 'md-paper';
                        break;
                    case 'FOTOGRAFIA Y VIDEO':
                        clasifications[i].iconStyle = 'ios-camera';
                        break;
                    case 'VETERINARIAS':
                        clasifications[i].iconStyle = 'md-paw';
                        break;
                    case 'PAPELERIAS':
                        clasifications[i].iconStyle = 'md-print';
                        break;
                    case 'GIMNASIOS':
                        clasifications[i].iconStyle = 'md-bicycle';
                        break;
                    case 'EQUIPOS DE SONIDO':
                        clasifications[i].iconStyle = 'md-mic';
                        break;
                    case 'GRUAS':
                        clasifications[i].iconStyle = 'md-car';
                        break;
                    case 'FLORERIAS':
                        clasifications[i].iconStyle = 'ios-rose';
                        break;
                    case 'GRUPOS MUSICALES':
                        clasifications[i].iconStyle = 'ios-musical-notes';
                        break;
                    case 'TELEVISORAS':
                        clasifications[i].iconStyle = 'ios-desktop-outline';
                        break;
                    case 'ARTICULOS DE LIMPIEZA':
                        clasifications[i].iconStyle = 'ios-flask-outline';
                        break;
                    case 'COMERCIALIZADORA':
                        clasifications[i].iconStyle = 'logo-usd';
                        break;
                    case 'ACADEMIAS DE BELLEZA':
                        clasifications[i].iconStyle = 'ios-color-wand';
                        break;
                    case 'AGENTES DE SEGUROS':
                        clasifications[i].iconStyle = 'md-lock';
                        break;
                    case 'VIDRIERAS':
                        clasifications[i].iconStyle = 'logo-windows';
                        break;
                    case 'ABOGADOS':
                        clasifications[i].iconStyle = 'ios-briefcase';
                        break;
                    case 'ATENCION CIUDADANA':
                        clasifications[i].iconStyle = 'ios-people';
                        break;
                    case 'NOTARIAS PUBLICAS':
                        clasifications[i].iconStyle = 'ios-briefcase';
                        break;
                    case 'GOBIERNO MUNICIPAL':
                        clasifications[i].iconStyle = 'ios-home';
                        clasifications[i].icon = 'museum.png';
                        break;
                    case 'CARNICERIAS':
                        clasifications[i].iconStyle = 'md-restaurant';
                        break;
                    case 'AIRES ACONDICIONADOS':
                        clasifications[i].iconStyle = 'md-sunny';
                        break;
                    case 'ENTRENAMIENTO DE PERROS':
                        clasifications[i].iconStyle = 'md-paw';
                        break;
                    case 'CERVECERIAS':
                        clasifications[i].iconStyle = 'md-beer';
                        break;
                    case 'CASAS DE CAMBIO':
                        clasifications[i].iconStyle = 'md-cash';
                        break;
                    case 'TINTORERIAS':
                        clasifications[i].iconStyle = 'md-shirt';
                        break;
                    case 'IMPRENTAS':
                        clasifications[i].iconStyle = 'md-print';
                        break;
                    case 'REMANUFACTURA DE CARTUCHOS':
                        clasifications[i].iconStyle = 'md-print';
                        break;
                    case 'GASERAS':
                        clasifications[i].iconStyle = 'ios-flame';
                        clasifications[i].icon = 'gas-station';
                        break;
                    case 'FUNERARIAS':
                        clasifications[i].iconStyle = 'ios-leaf';
                        break;
                    case 'FARMACIAS':
                        clasifications[i].iconStyle = 'md-medkit';
                        clasifications[i].icon = 'hospital.png';
                        break;
                    case 'ELECTRONICAS':
                        clasifications[i].iconStyle = 'ios-outlet';
                        break;
                    case 'COMPAÑIAS DE TELEFONOS':
                        clasifications[i].iconStyle = 'call';
                        break;
                    case 'TAQUERIAS':
                        clasifications[i].iconStyle = 'ios-restaurant';
                        break;
                    case 'LAVANDERIAS':
                        clasifications[i].iconStyle = 'md-shirt';
                        break;
                    case 'COMERCIALIZADORAS':
                        clasifications[i].iconStyle = 'logo-usd';
                        break;
                    case 'ABARROTES':
                        clasifications[i].iconStyle = 'ios-cart';
                        break;
                    case 'ARQUITECTOS':
                        clasifications[i].iconStyle = 'ios-home';
                        break;
                    case 'CARPINTERIAS':
                        clasifications[i].iconStyle = 'ios-hammer';
                        break;
                    case 'CINES':
                        clasifications[i].iconStyle = 'ios-film';
                        break;
                    case 'CONTADORES':
                        clasifications[i].iconStyle = 'ios-briefcase';
                        break;
                    case 'ACADEMIAS DE BAILE':
                        clasifications[i].iconStyle = 'ios-musical-notes';
                        break;
                    case 'LABORATORIOS':
                        clasifications[i].iconStyle = 'ios-flask';
                        break;
                    case 'AGENCIAS DE VIAJES':
                        clasifications[i].iconStyle = 'ios-plane';
                        break;
                    case 'PRODUCTOS DE BELLEZA':
                        clasifications[i].iconStyle = 'ios-bowtie';
                        break;
                    case 'AUTOTRANSPORTES':
                        clasifications[i].iconStyle = 'md-bus';
                        break;
                    case 'CENTRAL DE AUTOBUSES':
                        clasifications[i].iconStyle = 'md-bus';
                        break;
                    case 'GOBIERNO ESTATAL':
                        clasifications[i].iconStyle = 'ios-globe-outline';
                        clasifications[i].icon = 'museum.png';
                        break;
                    case 'SONIDOS':
                        clasifications[i].iconStyle = 'md-volume-up';
                        break;
                    case 'RADIODIFUSORAS':
                        clasifications[i].iconStyle = 'ios-radio-outline';
                        break;
                    case 'AEROLINEAS':
                        clasifications[i].iconStyle = 'ios-plane';
                        break;
                    case 'AEROPUERTOS':
                        clasifications[i].iconStyle = 'ios-plane';
                        break;
                    case 'AUTOMOVILES':
                        clasifications[i].iconStyle = 'md-car';
                        clasifications[i].icon = '';
                        break;
                    case 'CENTROS CULTURALES':
                        clasifications[i].iconStyle = 'md-color-palette';
                        clasifications[i].icon = 'museum.png';
                        break;
                    case 'FIESTAS':
                        clasifications[i].iconStyle = 'ios-musical-notes';
                        break;
                    case 'CENTROS COMERCIALES':
                        clasifications[i].iconStyle = 'md-cart';
                        break;
                    case 'ESTETICAS':
                        clasifications[i].iconStyle = 'ios-cut';
                        break;
                    case 'TALLER MECANICO':
                        clasifications[i].iconStyle = 'ios-build';
                        break;
                    case 'ESCUELAS DE MUSICA':
                        clasifications[i].iconStyle = 'ios-musical-notes';
                        break;
                    case 'CLUB DEPORTIVO':
                        clasifications[i].iconStyle = 'ios-football';
                        break;
                    case 'GOBIERNO FEDERAL':
                        clasifications[i].iconStyle = 'ios-globe-outline';
                        clasifications[i].icon = 'museum.png';
                        break;
                    case 'TIENDAS DE ACCESORIOS PARA DAMA':
                        clasifications[i].iconStyle = 'ios-bowtie';
                        break;
                    case 'TALLERES':
                        clasifications[i].iconStyle = 'ios-build';
                        break;
                    case 'TALLER ELECTRICO':
                        clasifications[i].iconStyle = 'ios-outlet';
                        break;
                    case 'TABLAROCA':
                        clasifications[i].iconStyle = 'ios-hammer';
                        break;
                    case 'FABRICA DE ALIMENTOS':
                        clasifications[i].iconStyle = 'ios-nutrition';
                        break;
                    case 'FORRAJERAS':
                        clasifications[i].iconStyle = 'ios-key';
                        break;
                    case 'CASAS DE EMPEÑO':
                        clasifications[i].iconStyle = 'md-cash';
                        break;
                    case 'AUTOPARTES':
                        clasifications[i].iconStyle = 'md-car';
                        break;
                    case 'MATERIALES PARA CONSTRUCCION':
                        clasifications[i].iconStyle = 'ios-construct';
                        clasifications[i].icon = '';
                        break;
                    case 'VIDEOCENTRO':
                        clasifications[i].iconStyle = 'ios-videocam';
                        clasifications[i].icon = '';
                        break;
                    case 'TRANSPORTES DE VALORES':
                        clasifications[i].iconStyle = 'md-cash';
                        break;
                    case 'CLINICAS DE BELLEZA':
                        clasifications[i].iconStyle = 'ios-color-wand';
                        break;
                    case 'MAQUINARIA PARA CONSTRUCCION':
                        clasifications[i].iconStyle = 'ios-construct';
                        break;
                    case 'INSTALACIONES ELECTRICAS':
                        clasifications[i].iconStyle = 'ios-outlet';
                        break;
                    case 'TELEFONIA':
                        clasifications[i].iconStyle = 'call';
                        break;
                    case 'INMOBILIARIAS':
                        clasifications[i].iconStyle = 'ios-home';
                        break;
                    case 'BIENES RAICES':
                        clasifications[i].iconStyle = 'ios-home';
                        break;
                    case 'RADIOCOMUNICACIONES':
                        clasifications[i].iconStyle = 'ios-radio-outline';
                        clasifications[i].icon = '';
                        break;
                    case 'PLOMERIA':
                        clasifications[i].iconStyle = 'ios-construct';
                        clasifications[i].icon = '';
                        break;
                    case 'CERRAJERIAS':
                        clasifications[i].iconStyle = 'ios-key';
                        break;
                    case 'BOUTIQUES':
                        clasifications[i].iconStyle = 'ios-bowtie';
                        break;
                    case 'INSTRUMENTOS MUSICALES':
                        clasifications[i].iconStyle = 'ios-musical-notes';
                        break;
                    case 'HOJALATERIA Y PINTURA':
                        clasifications[i].iconStyle = 'md-color-fill';
                        break;
                    case 'ELECTRICISTAS':
                        clasifications[i].iconStyle = 'ios-outlet';
                        break;
                    case 'MOTOCICLETAS':
                        clasifications[i].iconStyle = 'md-bicycle';
                        break;
                    case 'LLANTERAS':
                        clasifications[i].iconStyle = 'ios-disc';
                        break;
                    case 'BANQUETES':
                        clasifications[i].iconStyle = 'ios-restaurant';
                        clasifications[i].icon = 'restaurant.png';
                        break;
                    case 'DISCOS-BAR':
                        clasifications[i].iconStyle = 'md-beer';
                        break;
                    case 'CIRUJANOS PLASTICOS':
                        clasifications[i].iconStyle = 'ios-pulse';
                        clasifications[i].icon = 'hospital.png';
                        break;
                    case 'creditos':
                        clasifications[i].iconStyle = 'md-cash';
                        clasifications[i].icon = 'banks.png';
                        break;
                    case 'CELULARES':
                        clasifications[i].iconStyle = 'ios-phone-portrait';
                        break;
                    case 'SISTEMAS DE ALARMAS':
                        clasifications[i].iconStyle = 'ios-radio-outline';
                        break;
                    case 'AMBULANCIAS':
                        clasifications[i].iconStyle = 'md-medkit';
                        clasifications[i].icon = 'hospital.png';
                        break;
                    case 'BICICLETAS':
                        clasifications[i].iconStyle = 'md-bicycle';
                        break;
                    case 'CAFE Y MOLINOS':
                        clasifications[i].iconStyle = 'ios-cafe';
                        break;
                    case 'TIENDAS DE REGALOS':
                        clasifications[i].iconStyle = 'ios-bowtie';
                        break;
                    case 'COPIADORAS':
                        clasifications[i].iconStyle = 'md-print';
                        clasifications[i].icon = 'school.png';
                        break;
                    case 'PINTURAS':
                        clasifications[i].iconStyle = 'md-color-fill';
                        break;
                    case 'TIENDAS DEPORTIVAS':
                        clasifications[i].iconStyle = 'ios-football';
                        break;
                    case 'CLINICAS':
                        clasifications[i].iconStyle = 'ios-pulse';
                        clasifications[i].icon = 'hospital.png';
                        break;
                    case 'FOTOGRAFIA':
                        clasifications[i].iconStyle = 'ios-camera';
                        break;
                    case 'TURISMO':
                        clasifications[i].iconStyle = 'ios-plane';
                        break;
                    case 'MOTEL':
                        clasifications[i].iconStyle = 'ios-briefcase';
                        clasifications[i].icon = 'hotel.png';
                        break;
                    case 'PRODUCTOS NUTRICIONALES':
                        clasifications[i].iconStyle = 'ios-leaf';
                        break;
                    case 'INGENIERIA AMBIENTAL':
                        clasifications[i].iconStyle = 'ios-globe';
                        break;
                    case 'CHATS':
                        clasifications[i].iconStyle = 'md-chatbubbles';
                        break;
                    case 'LIBRERIAS':
                        clasifications[i].iconStyle = 'ios-book-outline';
                        break;
                    case 'MADERERIAS':
                        clasifications[i].iconStyle = 'ios-construct';
                        break;
                    case 'MATERIALES ELECTRICOS':
                        clasifications[i].iconStyle = 'ios-outlet';
                        break;
                    case 'AGENCIAS DE MOTOCICLETAS':
                        clasifications[i].iconStyle = 'md-bicycle';
                        break;
                    case 'MATERIAL DIDACTICO':
                        clasifications[i].iconStyle = 'ios-book-outline';
                        break;
                    case 'MATERIAL PARA CURACIONES':
                        clasifications[i].iconStyle = 'md-medkit';
                        clasifications[i].icon = 'hospital.png';
                        break;
                    case 'EQUIPO MEDICO Y QUIRURGICO':
                        clasifications[i].iconStyle = 'md-medkit';
                        clasifications[i].icon = 'hospital.png';
                        break;
                    case 'PORTALES DE INTERNET':
                        clasifications[i].iconStyle = 'ios-wifi';
                        break;
                    case 'MATERIAL QUIRURGICO':
                        clasifications[i].iconStyle = 'md-medkit';
                        clasifications[i].icon = 'hospital.png';
                        break;
                    case 'TALLER':
                        clasifications[i].iconStyle = 'ios-construct';
                        break;
                    case 'CLUBES DEPORTIVOS':
                        clasifications[i].iconStyle = 'ios-football';
                        break;
                    case 'SISTEMAS CONTRA INCENDIO':
                        clasifications[i].iconStyle = 'ios-flame';
                        break;
                    case 'COMIDA RAPIDA':
                        clasifications[i].iconStyle = 'md-pizza';
                        clasifications[i].icon = 'restaurant.png';
                        break;
                    case 'SNACKS':
                        clasifications[i].iconStyle = 'md-pizza';
                        clasifications[i].icon = 'restaurant.png';
                        break;
                    case 'LAVADO DE AUTOS':
                        clasifications[i].iconStyle = 'md-car';
                        break;
                    case 'REFACCIONARIA':
                        clasifications[i].iconStyle = 'ios-construct';
                        break;
                    case 'DESCARGAS':
                        clasifications[i].iconStyle = 'md-arrow-down';
                        break;
                    case 'INFORMACION':
                        clasifications[i].iconStyle = 'ios-information-circle';
                        break;
                    case 'POLLOS':
                        clasifications[i].iconStyle = 'md-restaurant';
                        clasifications[i].icon = 'restaurant.png';
                        break;
                    case 'ARTICULOS DE BELLEZA':
                        clasifications[i].iconStyle = 'ios-color-wand';
                        break;
                    case 'ESTETICAS INFANTILES':
                        clasifications[i].iconStyle = 'ios-cut';
                        break;
                    case 'COMUNICACIONES':
                        clasifications[i].iconStyle = 'ios-megaphone';
                        break;
                    case 'PROFESORES':
                        clasifications[i].iconStyle = 'ios-book-outline';
                        clasifications[i].icon = 'school.png';
                        break;
                    case 'EXTINGUIDORES':
                        clasifications[i].iconStyle = 'ios-flame';
                        break;
                    case 'PORTALS DE INTERNET':
                        clasifications[i].iconStyle = 'ios-globe';
                        break;
                    case 'TALLERES MECANICOS INDUSTRIALES':
                        clasifications[i].iconStyle = 'ios-construct';
                        break;
                    case 'CAFETERIAS':
                        clasifications[i].iconStyle = 'ios-cafe';
                        clasifications[i].icon = 'restaurant.png';
                        break;
                    case 'TELEVISION':
                        clasifications[i].iconStyle = 'ios-desktop-outline';
                        break;
                    case 'TIENDA NATURISTA':
                        clasifications[i].iconStyle = 'ios-leaf';
                        break;
                    case 'PLOMERIAS, FERRETERIAS Y ELECTRICIDAD':
                        clasifications[i].iconStyle = 'ios-construct';
                        break;
                    case 'RESTAURANTES COCINA CHINA':
                        clasifications[i].iconStyle = 'md-restaurant';
                        clasifications[i].icon = 'restaurant.png';
                        break;
                    case 'CLINICA':
                        clasifications[i].iconStyle = 'ios-pulse';
                        clasifications[i].icon = 'hospital.png';
                        break;
                    case 'RENTA DE AUTOS':
                        clasifications[i].iconStyle = 'md-car';
                        break;
                    case 'INSTITUCIONES DE CREDITO':
                        clasifications[i].iconStyle = 'md-cash';
                        clasifications[i].icon = 'banks.png';
                        break;
                    case 'CLINICAS DENTALES':
                        clasifications[i].iconStyle = 'ios-pulse';
                        clasifications[i].icon = 'hospital.png';
                        break;
                    case 'VINOS Y LICORES':
                        clasifications[i].iconStyle = 'ios-wine';
                        break;
                    case 'VIDEOFILMACIONES':
                        clasifications[i].iconStyle = 'ios-videocam';
                        break;
                    case 'CAMARAS NACIONALES':
                        clasifications[i].iconStyle = 'ios-videocam';
                        break;
                    case 'COMIDAS':
                        clasifications[i].iconStyle = 'md-restaurant';
                        clasifications[i].icon = 'restaurant.png';
                        break;
                    case 'DESARROLLO DE SOFTWARE':
                        clasifications[i].iconStyle = 'ios-wifi';
                        break;
                    case 'CLINICAS NATURISTAS':
                        clasifications[i].iconStyle = 'ios-leaf';
                        clasifications[i].icon = 'hospital.png';
                        break;
                    case 'TALLERE MECANICO':
                        clasifications[i].iconStyle = 'ios-build';
                        break;
                    case 'PARQUES':
                        clasifications[i].iconStyle = 'ios-leaf';
                        break;
                    case 'ZOOLOGICOS':
                        clasifications[i].iconStyle = 'md-paw';
                        break;
                    case 'PERIODICOS ELECTRONICOS':
                        clasifications[i].iconStyle = 'md-wifi';
                        break;
                    case 'TIENDAS NATURISTAS':
                        clasifications[i].iconStyle = 'ios-leaf';
                        break;
                    case 'COPIAS':
                        clasifications[i].iconStyle = 'md-print';
                        break;
                    case 'ENERGIA SOLAR':
                        clasifications[i].iconStyle = 'md-sunny';
                        break;
                    case 'EXTINTORES':
                        clasifications[i].iconStyle = 'ios-flame';
                        break;
                    case 'GOBIERNO FEDRAL':
                        clasifications[i].iconStyle = 'ios-globe';
                        clasifications[i].icon = 'museum.png';
                        break;
                    case 'NEVERIAS':
                        clasifications[i].iconStyle = 'md-ice-cream';
                        clasifications[i].icon = 'restaurant.png';
                        break;
                    case 'HIERBERIAS':
                        clasifications[i].iconStyle = 'ios-leaf';
                        break;
                    case 'PRODUCTOS ALIMENTICIOS':
                        clasifications[i].iconStyle = 'md-pint';
                        break;
                    case 'PRODUCTOS QUIMICOS':
                        clasifications[i].iconStyle = 'ios-beaker-outline';
                        break;
                    case 'TALLER DE ELECTRONICA':
                        clasifications[i].iconStyle = 'ios-outlet';
                        break;
                    case 'BARES Y DISCOS':
                        clasifications[i].iconStyle = 'ios-radio-outline';
                        break;
                    case 'BIBLIOTECAS':
                        clasifications[i].iconStyle = 'ios-book-outline';
                        clasifications[i].icon = 'school.png';
                        break;
                    case 'TIENDAS DE ACCESORIOS PARA DAMAS':
                        clasifications[i].iconStyle = 'ios-bowtie';
                        break;
                    case 'ANIMALES':
                        clasifications[i].iconStyle = 'md-paw';
                        break;
                    case 'CAFETERIA':
                        clasifications[i].iconStyle = 'ios-cafe';
                        clasifications[i].icon = 'restaurant.png';
                        break;
                    case 'VIDEO JUEGOS-PS3':
                        clasifications[i].iconStyle = 'logo-playstation';
                        break;
                    case 'EQUIPOS DE SONIDOS':
                        clasifications[i].iconStyle = 'md-mic';
                        break;
                    case 'SONIDO':
                        clasifications[i].iconStyle = 'md-mic';
                        break;
                    case 'COSMETICOS':
                        clasifications[i].iconStyle = 'ios-color-wand';
                        break;
                    case 'GASOLINERA':
                        clasifications[i].iconStyle = 'ios-water';
                        clasifications[i].icon = 'gas-station.png';
                        break;
                    case 'ELECTRONICOS':
                        clasifications[i].iconStyle = 'ios-phone-portrait';
                        break;
                    case 'FINANCIERAS':
                        clasifications[i].iconStyle = 'logo-usd';
                        clasifications[i].icon = 'banks.png';
                        break;
                    case 'ACCESORIOS':
                        clasifications[i].iconStyle = 'ios-bowtie';
                        break;
                    case 'DONADORES DE SANGRE':
                        clasifications[i].iconStyle = 'md-medkit';
                        clasifications[i].icon = 'hospital.png';
                        break;
                    case 'PRODUCTOS NATURALES':
                        clasifications[i].iconStyle = 'ios-leaf';
                        break;
                    case 'PALAPAS':
                        clasifications[i].iconStyle = 'ios-partly-sunny';
                        break;
                    case 'Ebanisteria y/o Carpinteria':
                        clasifications[i].iconStyle = 'ios-construct';
                        break;
                    case 'AUTOS':
                        clasifications[i].iconStyle = 'md-car';
                        break;
                    case 'SALONES DE BELLEZA':
                        clasifications[i].iconStyle = 'ios-color-wand';
                        break;
                    case 'VINOS':
                        clasifications[i].iconStyle = 'ios-wine';
                        break;
                    case 'UNIVERSIDADES':
                        clasifications[i].iconStyle = 'ios-school';
                        clasifications[i].icon = 'school.png';
                        break;
                    case 'SALONES DE EVENTOS':
                        clasifications[i].iconStyle = 'ios-musical-notes';
                        break;
                    case 'REGALOS':
                        clasifications[i].iconStyle = 'logo-dropbox';
                        break;
                    case 'KARAOKE':
                        clasifications[i].iconStyle = 'md-microphone';
                        break;
                    case 'PRODUCTOS DE LIMPIEZA':
                        clasifications[i].iconStyle = 'ios-flask-outline';
                        break;
                    case 'TIENDAS DE ROPA':
                        clasifications[i].iconStyle = 'md-shirt';
                        break;
                    case 'DISTRIBUIDORA DE REFRESCOS':
                        clasifications[i].iconStyle = 'ios-pint';
                        break;
                    case 'ACCESORIOS PARA AUTOMOVILES':
                        clasifications[i].iconStyle = 'md-car';
                        break;
                    case 'NOTARIAS':
                        clasifications[i].iconStyle = 'ios-briefcase';
                        break;
                    case 'AUTOLAVADOS':
                        clasifications[i].iconStyle = 'md-car';
                        break;
                    case 'PINTACARITAS':
                        clasifications[i].iconStyle = 'ios-brush';
                        break;
                    case 'EQUIPO DE SONIDO, KARAOKE Y SHOW DE LUCES.':
                        clasifications[i].iconStyle = 'md-mic';
                        break;
                    case 'FIESTAS  INFANTILES':
                        clasifications[i].iconStyle = 'ios-musical-notes';
                        break;
                    case 'acuario':
                        clasifications[i].iconStyle = 'ios-water';
                        break;
                    case 'AGUA PURIFICADA':
                        clasifications[i].iconStyle = 'ios-water';
                        break;
                    case 'Computo':
                        clasifications[i].iconStyle = 'ios-desktop-outline';
                        break;
                    case 'MEDICINA Y PSICOLOGIA':
                        clasifications[i].iconStyle = 'ios-pulse';
                        clasifications[i].icon = 'hospital.png';
                        break;
                    case 'RENTA DE SONIDOS':
                        clasifications[i].iconStyle = 'md-mic';
                        break;
                    case 'REPARACION DE COMPUTADORAS':
                        clasifications[i].iconStyle = 'md-settings';
                        break;
                    case 'AGENCIAS DE PUBLICIDAD':
                        clasifications[i].iconStyle = '';
                        clasifications[i].icon = '';
                        break;
                    case 'RADIOLOGIAS':
                        clasifications[i].iconStyle = 'ios-pulse';
                        clasifications[i].icon = 'hospital.png';
                        break;
                    case 'EQUIPOS Y MATERIALES CLINICOS':
                        clasifications[i].iconStyle = 'md-medkit';
                        clasifications[i].icon = 'hospital.png';
                        break;
                    case 'MATERIAL DIDACTICO  EDUCATIVO':
                        clasifications[i].iconStyle = 'ios-bookmarks-outline';
                        clasifications[i].icon = 'school.png';
                        break;
                    case 'JARDINEROS':
                        clasifications[i].iconStyle = 'ios-leaf';
                        break;
                    case 'FOTOGRAFIAS':
                        clasifications[i].iconStyle = 'ios-camera';
                        break;
                    case 'VENTA Y RENTA DE EQUIPO MEDICO':
                        clasifications[i].iconStyle = 'md-medkit';
                        clasifications[i].icon = 'hospital.png';
                        break;
                    case 'AGENCIA DE VIAJES':
                        clasifications[i].iconStyle = 'ios-plane';
                        break;
                    case 'VIDEOS FILMACIONES':
                        clasifications[i].iconStyle = 'ios-videocam';
                        break;
                    case 'VENTA DE PLANTAS':
                        clasifications[i].iconStyle = 'ios-videocam';
                        break;
                    case 'BARES':
                        clasifications[i].iconStyle = 'ios-videocam';
                        break;
                    case 'SUPERMERCADOS':
                        clasifications[i].iconStyle = 'md-cart';
                        break;
                    case 'ENDODONCISTAS':
                        clasifications[i].iconStyle = 'ios-pulse';
                        clasifications[i].icon = 'hospital.png';
                        break;
                    case 'PAPELERIA':
                        clasifications[i].iconStyle = 'md-paper';
                        break;
                    case 'AAA':
                        clasifications[i].iconStyle = 'ios-help-buoy';
                        break;
                    case 'TRANSPORTES':
                        clasifications[i].iconStyle = 'md-bus';
                        break;
                    case 'CONTABILIDAD, DEFENSA FISCAL, ADMINISTRACION Y FINANZAS':
                        clasifications[i].iconStyle = 'ios-briefcase';
                        break;
                    case 'HAMBURGUESAS':
                        clasifications[i].iconStyle = 'md-restaurant';
                        clasifications[i].icon = 'restaurant.png';
                        break;
                    case 'CONSULTORIOS NUTRIOLOGO':
                        clasifications[i].iconStyle = 'ios-pulse';
                        clasifications[i].icon = 'hospital.png';
                        break;
                    case 'TELEFONOS DE EMERGENCIA ADMINISTRACION POSTAL':
                        clasifications[i].iconStyle = 'md-help';
                        break;
                    case 'TELEFONOS DE EMERGENCIA POLICIA MINISTERIAL':
                        clasifications[i].iconStyle = 'md-help';
                        break;
                    case 'TELEFONOS DE EMERGENCIA CENTRO DE EMERGENCIAS':
                        clasifications[i].iconStyle = 'md-help';
                        break;
                    case 'TELEFONOS DE EMERGENCIA CENTRO ESTATAL DE TRANSFUSION SANGUINEA':
                        clasifications[i].iconStyle = 'md-help';
                        break;
                    case 'TELEFONOS DE EMERGENCIA COMISION FEDERAL DE ELECTRICIDAD':
                        clasifications[i].iconStyle = 'md-help';
                        break;
                    case 'CORREOS':
                        clasifications[i].iconStyle = 'md-mail';
                        break;
                    case 'ESTACION DE BOMBEROS':
                        clasifications[i].iconStyle = 'md-flame';
                        break;
                    case 'TELEFONOS DE EMERGENCIA':
                        clasifications[i].iconStyle = 'md-help';
                        break;
                    case 'TELEFONOS DE EMERGENCIA CENTROS DE INTEGRACION':
                        clasifications[i].iconStyle = 'md-help';
                        break;
                    case 'TELEFONOS DE EMERGENCIA NEUROTICOS ANONIMOS':
                        clasifications[i].iconStyle = 'md-help';
                        break;
                    case 'TELEFONOS DE EMERGENCIA INCENDIOS FORESTALES':
                        clasifications[i].iconStyle = 'md-help';
                        break;
                    case 'TELEFONOS EMERGENCIAS LOCATEL':
                        clasifications[i].iconStyle = 'md-help';
                        break;
                    case 'TELEFONOS EMERGENCIAS IMSS ORIENTACION':
                        clasifications[i].iconStyle = 'md-help';
                        break;
                    case 'TELEFONOS EMERGENCIAS IMSS':
                        clasifications[i].iconStyle = 'md-help';
                        break;
                    case 'TELEFONOS EMERGENCIAS POLICIA FEDERAL':
                        clasifications[i].iconStyle = 'md-help';
                        break;
                    case 'PROCURADURIA FEDERAL DEL CONSUMIDOR':
                        clasifications[i].iconStyle = 'ios-globe-outline';
                        break;
                    case 'TELEFONOS DE EMERGENCIA SECRETARIA DE MARINA ARMADA DE MEXICO':
                        clasifications[i].iconStyle = 'md-help';
                        break;
                    case 'TELEFONOS DE EMERGENCIA SECRETARIA DE SEGURIDAD Y VIALIDAD':
                        clasifications[i].iconStyle = 'md-help';
                        break;
                    case 'PREPARATORIA':
                        clasifications[i].iconStyle = 'ios-school';
                        clasifications[i].icon = 'school.png';
                        break;
                    case 'RETA DE KARAOKE':
                        clasifications[i].iconStyle = 'md-mic';
                        break;
                    case 'DEPARTAMENTOS':
                        clasifications[i].iconStyle = 'ios-home';
                        break;
                    case 'PREPARATORIAS':
                        clasifications[i].iconStyle = 'ios-school';
                        clasifications[i].icon = 'school.png';
                        break;
                    case 'SECRETARIAS':
                        clasifications[i].iconStyle = 'ios-briefcase';
                        clasifications[i].icon = 'museum.png';
                        break;
                    case 'MANTENIMIENTO':
                        clasifications[i].iconStyle = 'ios-construct';
                        break;
                    case 'ESCUELAS DE INGLES':
                        clasifications[i].iconStyle = 'ios-school';
                        clasifications[i].icon = 'school.png';
                        break;
                    case 'MEDICOS ALERGOLOGOS':
                        clasifications[i].iconStyle = 'ios-pulse';
                        clasifications[i].icon = 'hospital.png';
                        break;
                    case 'CENTRO MEDICO':
                        clasifications[i].iconStyle = 'ios-pulse';
                        clasifications[i].icon = 'hospital.png';
                        break;
                    case 'DOCTORES HOMEOPATAS':
                        clasifications[i].iconStyle = 'ios-pulse';
                        clasifications[i].icon = 'hospital.png';
                        break;
                    case 'DOCTORES INTERNISTAS':
                        clasifications[i].iconStyle = 'ios-pulse';
                        clasifications[i].icon = 'hospital.png';
                        break;
                    case 'DOCTORES ESPECIALISTAS NEUMOLOGOS':
                        clasifications[i].iconStyle = 'ios-pulse';
                        clasifications[i].icon = 'hospital.png';
                        break;
                    case 'MEDICOS VETERINARIOS':
                        clasifications[i].iconStyle = 'md-paw';
                        clasifications[i].icon = 'hospital.png';
                        break;
                    case 'CENTROS DE SALUD':
                        clasifications[i].iconStyle = 'ios-pulse';
                        clasifications[i].icon = 'hospital.png';
                        break;
                    case 'LENTES':
                        clasifications[i].iconStyle = 'md-glasses';
                        break;
                    case 'Radio por internet y Paginas Web':
                        clasifications[i].iconStyle = 'md-wifi';
                        break;
                    case 'MEDICOS VETERINARIOS ZOOTERNISTAS':
                        clasifications[i].iconStyle = 'md-paw';
                        clasifications[i].icon = 'hospital.png';
                        break;
                    case 'COMEDIANTES':
                        clasifications[i].iconStyle = 'md-happy';
                        break;
                    case 'HOSPITALES SANATORIOS Y CLINICAS':
                        clasifications[i].iconStyle = 'ios-pulse';
                        clasifications[i].icon = 'hospital.png';
                        break;
                    case 'COMIDA':
                        clasifications[i].iconStyle = 'md-restaurant';
                        clasifications[i].icon = 'restaurant.png';
                        break;
                    case 'telefonia celular':
                        clasifications[i].iconStyle = 'call';
                        break;
                    case 'SERVICIOS PARA HOSPITALES':
                        clasifications[i].iconStyle = 'md-medkit';
                        clasifications[i].icon = 'hospital.png';
                        break;
                    case 'Restaurante':
                        clasifications[i].iconStyle = 'md-restaurant';
                        clasifications[i].icon = 'restaurant.png';
                        break;
                    case 'Pasteleria':
                        clasifications[i].iconStyle = 'md-restaurant';
                        clasifications[i].icon = 'restaurant.png';
                        break;
                    case 'CRUZ ROJA':
                        clasifications[i].iconStyle = 'md-medkit';
                        clasifications[i].icon = 'hospital.png';
                        break;
                    case 'regalos y novedades':
                        clasifications[i].iconStyle = 'ios-bowtie';
                        break;
                    case 'fiestas y eventos':
                        clasifications[i].iconStyle = 'ios-musical-notes';
                        break;
                    case 'RENTA DE CUBOS':
                        clasifications[i].iconStyle = 'md-cube';
                        break;
                    case 'informatica':
                        clasifications[i].iconStyle = 'ios-globe-outline';
                        break;
                    case 'ALQUILER DE AUTOS':
                        clasifications[i].iconStyle = 'md-car';
                        break;
                    case 'VEHICULOS Y ACCESORIOS':
                        clasifications[i].iconStyle = 'md-car';
                        break;
                    case 'ROPA INFANTIL':
                        clasifications[i].iconStyle = 'md-shirt';
                        break;
                    case 'cubos':
                        clasifications[i].iconStyle = 'md-cube';
                        break;
                    case 'SALONES DE FIESTAS':
                        clasifications[i].iconStyle = 'ios-musical-notes';
                        break;
                    case 'TIENDAS':
                        clasifications[i].iconStyle = 'md-cart';
                        clasifications[i].icon = '';
                        break;
                    case 'SONIDO Y AUDIO':
                        clasifications[i].iconStyle = 'md-mic';
                        break;
                    case 'financiera prestamos dinero':
                        clasifications[i].iconStyle = 'md-cash';
                        clasifications[i].icon = 'banks.png';
                        break;
                    case 'TELEGRAFOS':
                        clasifications[i].iconStyle = 'md-mail';
                        break;
                    case 'comida fresca':
                        clasifications[i].iconStyle = 'md-restaurant';
                        clasifications[i].icon = 'restaurant.png';
                        break;
                    case 'Naturista':
                        clasifications[i].iconStyle = 'ios-leaf';
                        break;
                    case 'COMUNIDADES RELIGIOSAS':
                        clasifications[i].iconStyle = 'ios-flower';
                        clasifications[i].icon = 'church.png';
                        break;
                    case 'AUTOFINANCIAMIENTOS':
                        clasifications[i].iconStyle = 'md-cash';
                        break;
                    case 'CLIMA':
                        clasifications[i].iconStyle = 'ios-partly-sunny';
                        break;
                    case 'CONSULADOS':
                        clasifications[i].iconStyle = 'ios-globe';
                        clasifications[i].icon = 'museum.png';
                        break;
                    case 'GUIAS TURISTICOS':
                        clasifications[i].iconStyle = 'ios-plane';
                        break;
                    case 'ROPA':
                        clasifications[i].iconStyle = 'md-shirt';
                        break;
                    case 'FABRICAS DE CAMISAS':
                        clasifications[i].iconStyle = 'md-shirt';
                        break;
                    case 'COSTURERIAS':
                        clasifications[i].iconStyle = 'md-shirt';
                        break;
                    case 'DESPACHOS CONTABLES':
                        clasifications[i].iconStyle = 'ios-briefcase';
                        break;
                    case 'TERAPIAS':
                        clasifications[i].iconStyle = 'ios-pulse';
                        break;
                    case 'SERVICIOS DE LIMPIEZA':
                        clasifications[i].iconStyle = 'ios-flask-outline';
                        break;
                    case 'VIDEOCLUBS':
                        clasifications[i].iconStyle = 'ios-film';
                        break;
                    case 'EQUIPO DE SEGURIDAD':
                        clasifications[i].iconStyle = 'md-lock';
                        break;
                    case 'DENTISTAS':
                        clasifications[i].iconStyle = 'ios-pulse';
                        clasifications[i].icon = 'hospital.png';
                        break;
                    case 'PELUQUERIAS':
                        clasifications[i].iconStyle = 'ios-cut';
                        break;
                    case 'MOTELES':
                        clasifications[i].iconStyle = 'ios-briefcase';
                        clasifications[i].icon = 'hotel.png';
                        break;
                    default:
                        clasifications[i].iconStyle = 'ios-information-circle';
                        break;
                }
            }
            return clasifications;
        };
    }
    PlaceClasification = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], PlaceClasification);
    return PlaceClasification;
}());

//# sourceMappingURL=place-clasification.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderByPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/*
 * Example use
 *		Basic Array of single type: *ngFor="#todo of todoService.todos | orderBy : '-'"
 *		Multidimensional Array Sort on single column: *ngFor="#todo of todoService.todos | orderBy : ['-status']"
 *		Multidimensional Array Sort on multiple columns: *ngFor="#todo of todoService.todos | orderBy : ['status', '-title']"
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var OrderByPipe = /** @class */ (function () {
    function OrderByPipe() {
    }
    // static _orderByComparator(a:any, b:any):number{
    //
    //     if((isNaN(parseFloat(a)) || !isFinite(a)) || (isNaN(parseFloat(b)) || !isFinite(b))){
    //         //Isn't a number so lowercase the string to properly compare
    //         if(a.toLowerCase() < b.toLowerCase()) return -1;
    //         if(a.toLowerCase() > b.toLowerCase()) return 1;
    //     }
    //     else{
    //         //Parse strings as numbers to compare properly
    //         if(parseFloat(a) < parseFloat(b)) return -1;
    //         if(parseFloat(a) > parseFloat(b)) return 1;
    //     }
    //
    //     return 0; //equal each other
    // }
    //
    // transform(input:any, [config = '+']): any{
    //
    //     if(!Array.isArray(input)) return input;
    //
    //     if(!Array.isArray(config) || (Array.isArray(config) && config.length == 1)){
    //         let  propertyToCheck:string = !Array.isArray(config) ? config : config[0];
    //         let  desc = propertyToCheck.substr(0, 1) == '-';
    //
    //         //Basic array
    //         if(!propertyToCheck || propertyToCheck == '-' || propertyToCheck == '+'){
    //             return !desc ? input.sort() : input.sort().reverse();
    //         }
    //         else {
    //             let  property:string = propertyToCheck.substr(0, 1) == '+' || propertyToCheck.substr(0, 1) == '-'
    //                 ? propertyToCheck.substr(1)
    //                 : propertyToCheck;
    //
    //             return input.sort(function(a:any,b:any){
    //                 return !desc
    //                     ? this.OrderBy._orderByComparator(a[property], b[property])
    //                     : -this.OrderBy._orderByComparator(a[property], b[property]);
    //             });
    //         }
    //     }
    //     else {
    //         //Loop over property of the array in order and sort
    //         return input.sort(function(a:any,b:any){
    //             for(let  i:number = 0; i < config.length; i++){
    //                 let  desc = config[i].substr(0, 1) == '-';
    //                 let  property = config[i].substr(0, 1) == '+' || config[i].substr(0, 1) == '-'
    //                     ? config[i].substr(1)
    //                     : config[i];
    //
    //                 let  comparison = !desc
    //                     ? this.OrderBy._orderByComparator(a[property], b[property])
    //                     : -this.OrderBy._orderByComparator(a[property], b[property]);
    //
    //                 //Don't return 0 yet in case of needing to sort by next property
    //                 if(comparison != 0) return comparison;
    //             }
    //
    //             return 0; //equal each other
    //         });
    //     }
    // }
    OrderByPipe.prototype.transform = function (array, orderBy, asc) {
        var _this = this;
        if (asc === void 0) { asc = true; }
        if (!orderBy || orderBy.trim() == "") {
            return array;
        }
        //ascending
        if (asc) {
            return Array.from(array).sort(function (item1, item2) {
                return _this.orderByComparator(item1[orderBy], item2[orderBy]);
            });
        }
        else {
            //not asc
            return Array.from(array).sort(function (item1, item2) {
                return _this.orderByComparator(item2[orderBy], item1[orderBy]);
            });
        }
    };
    OrderByPipe.prototype.orderByComparator = function (a, b) {
        if ((isNaN(parseFloat(a)) || !isFinite(a)) || (isNaN(parseFloat(b)) || !isFinite(b))) {
            //Isn't a number so lowercase the string to properly compare
            if (a.toLowerCase() < b.toLowerCase())
                return -1;
            if (a.toLowerCase() > b.toLowerCase())
                return 1;
        }
        else {
            //Parse strings as numbers to compare properly
            if (parseFloat(a) < parseFloat(b))
                return -1;
            if (parseFloat(a) > parseFloat(b))
                return 1;
        }
        return 0; //equal each other
    };
    OrderByPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'orderBy',
        })
    ], OrderByPipe);
    return OrderByPipe;
}());

//# sourceMappingURL=order-by.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(248);



Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* enableProdMode */])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_speech_recognition__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_launch_navigator__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_services__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_place_clasification__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__general_general__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__general_global_variables__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pipes_order_by_order_by__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_social_sharing__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_facebook__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_native_geocoder__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_diagnostic__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_open_native_settings__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_keyboard__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_text_to_speech__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_photo_viewer__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_network__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_network_interface__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__angular_common_http__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_login_login__ = __webpack_require__(168);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_login_login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* JsonpModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */], {
                    tabsHideOnSubPages: false,
                    statusbarPadding: false
                }, {
                    links: [
                        { loadChildren: '../pages/favorites/favorites.module#FavoritesPageModule', name: 'FavoritesPage', segment: 'favorites', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomeModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modals/dishes-modal/dishes-modal.module#DishesModalPageModule', name: 'DishesModalPage', segment: 'dishes-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modals/gps-modal/gps-modal.module#GpsModalPageModule', name: 'GpsModalPage', segment: 'gps-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modals/incorrect-modal/incorrect-modal.module#IncorrectModalPageModule', name: 'IncorrectModalPage', segment: 'incorrect-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modals/search-place/search-place.module#SearchPlacePageModule', name: 'SearchPlacePage', segment: 'search-place', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modals/speech-modal/speech-modal.module#SpeechModalPageModule', name: 'SpeechModalPage', segment: 'speech-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nearby/nearby.module#NearbyPageModule', name: 'NearbyPage', segment: 'nearby', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/place/place.module#PlacePageModule', name: 'PlacePage', segment: 'place', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_27__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_login_login__["a" /* LoginPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_12__services_services__["a" /* AppService */],
                __WEBPACK_IMPORTED_MODULE_13__services_place_clasification__["a" /* PlaceClasification */],
                __WEBPACK_IMPORTED_MODULE_14__general_general__["a" /* General */],
                __WEBPACK_IMPORTED_MODULE_15__general_global_variables__["a" /* GlobalVariables */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_speech_recognition__["a" /* SpeechRecognition */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_diagnostic__["a" /* Diagnostic */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_open_native_settings__["a" /* OpenNativeSettings */],
                __WEBPACK_IMPORTED_MODULE_16__pipes_order_by_order_by__["a" /* OrderByPipe */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_keyboard__["a" /* Keyboard */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_text_to_speech__["a" /* TextToSpeech */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_launch_navigator__["a" /* LaunchNavigator */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_photo_viewer__["a" /* PhotoViewer */],
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_network_interface__["a" /* NetworkInterface */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__general_global_variables__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_keyboard__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_network__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__general_general__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_network_interface__ = __webpack_require__(119);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, config, globalVariables, network, general, networkInterface, storage, keyboard) {
        var _this = this;
        this.globalVariables = globalVariables;
        this.network = network;
        this.general = general;
        this.networkInterface = networkInterface;
        this.storage = storage;
        this.keyboard = keyboard;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.overlaysWebView(false);
            statusBar.backgroundColorByHexString('#ff6000');
            config.set('ios', 'backButtonText', 'Atrás');
            _this.keyboard.hideKeyboardAccessoryBar(false);
            storage.get('hasSeenTut').then(function (hasSeenTut) {
                if (!hasSeenTut) {
                    globalVariables.showNearbyTut = true;
                    setTimeout(function () {
                        globalVariables.showNearbyTut = false;
                        storage.set('hasSeenTut', true);
                    }, 15000);
                }
            });
            //Get connection status on change
            _this.network.onConnect().subscribe(function (data) {
                console.log(data);
                _this.general.displayNetworkUpdate(data.type);
                _this.globalVariables.isConnected = true;
            }, function (error) { return console.error(error); });
            _this.network.onDisconnect().subscribe(function (data) {
                console.log(data);
                _this.general.displayNetworkUpdate(data.type);
                _this.globalVariables.isConnected = false;
            }, function (error) { return console.error(error); });
            _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/ed/Library/Mobile Documents/com~apple~CloudDocs/Projects/enzorromovil/infox-v3/src/app/app.html"*/'<div id="tutorial-nearby" [ngClass]="{\'animate-fade\': globalVariables.showNearbyTut, \'fadeOut\': !globalVariables.showNearbyTut}" [style.bottom]="globalVariables.nearbyTabActive ? \'110px\': \'62px\'">\n    Ubica los Negocios Más Cercanos a Ti\n    <ion-icon name="md-arrow-dropdown" id="tut-down-arrow"></ion-icon>\n</div>\n<ion-nav [root]="rootPage"></ion-nav>'/*ion-inline-end:"/Users/ed/Library/Mobile Documents/com~apple~CloudDocs/Projects/enzorromovil/infox-v3/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Config */],
            __WEBPACK_IMPORTED_MODULE_5__general_global_variables__["a" /* GlobalVariables */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_9__general_general__["a" /* General */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_network_interface__["a" /* NetworkInterface */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_keyboard__["a" /* Keyboard */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalVariables; });
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

var GlobalVariables = /** @class */ (function () {
    function GlobalVariables() {
        this.recentSearchResults = [];
        this.recentNearbySearchResults = [];
        this.nearbyTabActive = false;
        this.showNearbyTut = false;
        this.showTakeMeThereTut = false;
        this.goBackToNearby = false;
        this.isConnected = true;
        this.isLoggedIn = this.loggedIn();
        this.searchParams = '';
        this.placeId = null;
    }
    GlobalVariables.prototype.getDay = function () {
        var day = new Date().getDay();
        switch (day) {
            case 0:
                this.day = 'Domingo';
                break;
            case 1:
                this.day = 'Lunes';
                break;
            case 2:
                this.day = 'Martes';
                break;
            case 3:
                this.day = 'Miercoles';
                break;
            case 4:
                this.day = 'Jueves';
                break;
            case 5:
                this.day = 'Viernes';
                break;
            case 6:
                this.day = 'Sabado';
                break;
        }
        return this.day;
    };
    GlobalVariables.prototype.loggedIn = function () {
        var user = localStorage.getItem('infox_user');
        return !!(user);
    };
    GlobalVariables = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], GlobalVariables);
    return GlobalVariables;
}());

//# sourceMappingURL=global-variables.js.map

/***/ })

},[240]);
//# sourceMappingURL=main.js.map