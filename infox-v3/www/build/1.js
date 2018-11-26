webpackJsonp([1],{

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlacePageModule", function() { return PlacePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__place__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipe_module__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_offline_offline_module__ = __webpack_require__(311);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var PlacePageModule = /** @class */ (function () {
    function PlacePageModule() {
    }
    PlacePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__place__["a" /* PlacePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__place__["a" /* PlacePage */]),
                __WEBPACK_IMPORTED_MODULE_3__pipes_pipe_module__["a" /* PipeModule */],
                __WEBPACK_IMPORTED_MODULE_4__components_offline_offline_module__["a" /* OfflineComponentModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__place__["a" /* PlacePage */]
            ]
        })
    ], PlacePageModule);
    return PlacePageModule;
}());

//# sourceMappingURL=place.module.js.map

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

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlacePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__general_global_variables__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__general_general__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_services__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_social_sharing__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__(27);
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









var PlacePage = /** @class */ (function () {
    function PlacePage(navCtrl, navParams, globalVariables, general, cd, app, socialSharing, modalCtrl, sanitizer, appService, httpClient, toastCtrl, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.globalVariables = globalVariables;
        this.general = general;
        this.cd = cd;
        this.app = app;
        this.socialSharing = socialSharing;
        this.modalCtrl = modalCtrl;
        this.sanitizer = sanitizer;
        this.appService = appService;
        this.httpClient = httpClient;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.place = [];
        this.reviewArr = [];
        this.review = {};
        this.showData = false;
        this.show_full_phones = false;
        this.correctData = false;
        this.api_url = 'http://infox.mx/apps/';
        this.myRate = 5;
    }
    PlacePage.prototype.ionViewDidLoad = function () {
        // let ev: Event;
        this.placeId = this.globalVariables.placeId;
        this.recentSearch = this.general.getLastSearch();
        this.getPlaceDetails();
    };
    PlacePage.prototype.getPlaceDetails = function () {
        var _this = this;
        this.general.presentLoadingMask();
        this.recentSearch = this.general.getLastSearch();
        this.appService.getPlaceDetails(this.placeId).subscribe(function (response) {
            console.log(response.json());
            _this.place = response.json();
            _this.place.data = response.json().data[0];
            _this.place.dishes = response.json().platillos;
            _this.place.gallery = response.json().galeria;
            if (_this.place.data && _this.place.data.reviews) {
                _this.reviewArr = _this.place.data.reviews;
            }
            if (_this.reviewArr && _this.reviewArr.length > 0) {
                var numReview = _this.place.data.num_resenas;
                for (var i = 0; i < numReview; i++) {
                    var cal = _this.reviewArr[i].calificacion;
                    var stars = '';
                    for (var j = 0; j < cal; j++) {
                        stars += '<ion-icon name="star"></ion-icon>';
                    }
                    _this.reviewArr[i].stars = stars;
                }
            }
            _this.getFbLink();
            setTimeout(function () {
                if (_this.place.data.latitud && _this.place.data.longitud) {
                    _this.loadMap(parseFloat(_this.place.data.latitud), parseFloat(_this.place.data.longitud));
                }
            }, 500);
            console.log(_this.place);
            _this.showData = true;
            _this.general.dismissLoadingMask();
        }, function (error) {
            _this.showData = true;
            _this.general.dismissLoadingMask();
        });
    };
    PlacePage.prototype.openSearchModal = function () {
        if (!this.globalVariables.isConnected) {
            this.general.showNetworkConnectionAlert();
            return;
        }
        var modal = this.modalCtrl.create('SearchPlacePage');
        modal.present();
    };
    PlacePage.prototype.openSpeechModal = function () {
        if (!this.globalVariables.isConnected) {
            this.general.showNetworkConnectionAlert();
            return;
        }
        var modal = this.modalCtrl.create('SpeechModalPage');
        modal.present();
    };
    PlacePage.prototype.scrollTop = function () {
        this.content.scrollToTop(800);
    };
    PlacePage.prototype.share = function () {
        this.socialSharing.share(this.place.data.nombre, this.place.data.casa || this.place.data.otrosdatos, null, "http://www.infox.mx/datos2.php?id=" + this.place.data.idnum);
    };
    PlacePage.prototype.linkify = function (inputText) {
        var regex = new RegExp("\\+?\\(?\\d*\\)? ?\\(?\\d+\\)?\\d*([\\s./-]?\\d{2,})+", "g");
        var output = inputText.replace(regex, function (m) {
            var match = m.replace(/ /g, '');
            return '<a href="tel:' + match + '">' + m + '</a>';
        });
        return output;
    };
    ;
    PlacePage.prototype.openIncorrect = function () {
        var _this = this;
        if (!this.globalVariables.isConnected) {
            this.general.showNetworkConnectionAlert();
            return;
        }
        var modal = this.modalCtrl.create('IncorrectModalPage', { placeId: this.place.data.idnum });
        modal.present();
        modal.onWillDismiss(function (data) {
            if (data) {
                _this.isCorrectData();
            }
        });
    };
    PlacePage.prototype.isCorrectData = function () {
        this.correctData = true;
        this.cd.detectChanges();
    };
    PlacePage.prototype.showDishes = function () {
        if (!this.globalVariables.isConnected) {
            this.general.showNetworkConnectionAlert();
            return;
        }
        var modal = this.modalCtrl.create('DishesModalPage', { dishes: this.place.dishes });
        modal.present();
    };
    PlacePage.prototype.loadMap = function (latitude, longitude) {
        var placeName = this.place.data.nombre;
        var latLng = new google.maps.LatLng(latitude, longitude);
        var mapOptions = {
            center: latLng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            disableDefaultUI: true,
            zoomControl: true,
            styles: [{ "featureType": "all", "elementType": "geometry", "stylers": [{ "visibility": "simplified" }, { "hue": "#ff7700" }] }, { "featureType": "administrative", "elementType": "all", "stylers": [{ "visibility": "simplified" }] }, {
                    "featureType": "administrative.country",
                    "elementType": "labels.text.fill",
                    "stylers": [{ "color": "#1d1d1d" }]
                }, { "featureType": "administrative.province", "elementType": "labels.text.fill", "stylers": [{ "color": "#ffffff" }, { "visibility": "on" }] }, {
                    "featureType": "administrative.province",
                    "elementType": "labels.text.stroke",
                    "stylers": [{ "color": "#ed5929" }, { "weight": "5.00" }, { "visibility": "on" }]
                }, { "featureType": "administrative.locality", "elementType": "labels.text.fill", "stylers": [{ "color": "#787878" }, { "visibility": "on" }] }, {
                    "featureType": "administrative.locality",
                    "elementType": "labels.text.stroke",
                    "stylers": [{ "color": "#ffffff" }, { "visibility": "on" }, { "weight": "5.00" }]
                }, { "featureType": "administrative.neighborhood", "elementType": "labels.text", "stylers": [{ "visibility": "on" }] }, {
                    "featureType": "administrative.neighborhood",
                    "elementType": "labels.text.fill",
                    "stylers": [{ "visibility": "on" }, { "color": "#2d2d2d" }]
                }, { "featureType": "administrative.neighborhood", "elementType": "labels.text.stroke", "stylers": [{ "color": "#ffffff" }, { "visibility": "on" }, { "weight": "5.00" }] }, {
                    "featureType": "administrative.land_parcel",
                    "elementType": "geometry.fill",
                    "stylers": [{ "saturation": "64" }]
                }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#fafafa" }] }, { "featureType": "poi", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "road", "elementType": "geometry", "stylers": [{ "color": "#2c2c2c" }] }, {
                    "featureType": "road",
                    "elementType": "geometry.fill",
                    "stylers": [{ "visibility": "on" }, { "color": "#d5d5d5" }]
                }, { "featureType": "road", "elementType": "geometry.stroke", "stylers": [{ "visibility": "off" }] }, { "featureType": "road", "elementType": "labels", "stylers": [{ "visibility": "on" }, { "color": "#ff0000" }] }, {
                    "featureType": "road",
                    "elementType": "labels.text.fill",
                    "stylers": [{ "color": "#ed5929" }]
                }, { "featureType": "road", "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#ffffff" }, { "weight": "5.00" }] }, { "featureType": "road", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, {
                    "featureType": "road.highway",
                    "elementType": "geometry.fill",
                    "stylers": [{ "color": "#ed5929" }, { "visibility": "on" }]
                }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "visibility": "on" }, { "color": "#ed5929" }] }, { "featureType": "road.highway", "elementType": "labels.text", "stylers": [{ "color": "#ffffff" }] }, {
                    "featureType": "road.highway",
                    "elementType": "labels.text.fill",
                    "stylers": [{ "color": "#ffffff" }]
                }, { "featureType": "road.highway", "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#ed5929" }] }, {
                    "featureType": "road.arterial",
                    "elementType": "geometry.stroke",
                    "stylers": [{ "color": "#d9d9d9" }, { "visibility": "on" }]
                }, { "featureType": "transit.station", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, {
                    "featureType": "transit.station.airport",
                    "elementType": "geometry.fill",
                    "stylers": [{ "visibility": "simplified" }, { "lightness": "4" }, { "saturation": "-100" }]
                }, { "featureType": "water", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "water", "elementType": "geometry.fill", "stylers": [{ "color": "#e1e1e1" }, { "visibility": "on" }] }]
        };
        var map = new google.maps.Map(document.getElementById("placeMap"), mapOptions);
        google.maps.event.addListener(map, 'tilt_changed', function () {
            var marker = new google.maps.Marker({
                position: latLng,
                visible: true,
                icon: 'assets/img/markers/infox.png'
            });
            var infoWindow = new google.maps.InfoWindow({
                content: placeName
            });
            marker.setMap(map);
            google.maps.event.addListener(marker, 'click', function () {
                infoWindow.open(map, marker);
            });
        });
    };
    PlacePage.prototype.getFbLink = function () {
        if (this.place.data.linkfb) {
            var linkf = this.place.data.linkfb.split('/')[3];
            console.log(linkf);
            var url = "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2F" + linkf + "&tabs=timeline&width=320&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=361034541018618";
            // return this.sanitizer.bypassSecurityTrustResourceUrl(url);
            this.facebookLink = this.sanitizer.bypassSecurityTrustResourceUrl(url);
            console.log(this.facebookLink);
        }
    };
    PlacePage.prototype.openGpsModal = function () {
        if (!this.globalVariables.isConnected) {
            this.general.showNetworkConnectionAlert();
            return;
        }
        this.general.presentLoadingMask();
        var modal = this.modalCtrl.create('GpsModalPage', { place: this.place.data });
        modal.present();
        this.general.dismissLoadingMask();
    };
    PlacePage.prototype.favorite = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Agrega una nota personal',
            inputs: [
                {
                    type: 'textarea',
                    name: 'note',
                    placeholder: 'Nota'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Guardar Favorito',
                    handler: function (data) {
                        console.log(data);
                        _this.saveFavorite(data.note);
                    }
                }
            ]
        });
        alert.present();
    };
    PlacePage.prototype.saveFavorite = function (myComment) {
        var _this = this;
        if (this.globalVariables.loggedIn()) {
            this.user = JSON.parse(localStorage.getItem('infox_user')).user;
            var loader_1 = this.loadingCtrl.create({
                content: "Por favor espere...",
            });
            var favorito = {
                id_usuario: this.user.id,
                id_directorio: this.placeId,
                nota_personal: myComment
            };
            var params = new __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["c" /* HttpParams */]({
                fromObject: favorito
            });
            this.httpClient.get(this.api_url + 'agregar_favoritos.php', { params: params }).subscribe(function (data) {
                var toast = _this.toastCtrl.create({
                    message: data.ok,
                    duration: 3000,
                    position: 'top'
                });
                toast.present();
                if (data.error) {
                    alert(data.error);
                }
                loader_1.dismissAll();
            }, function (error) {
                console.log(error);
                loader_1.dismissAll();
            });
        }
        else {
            alert('Debes loggearte para acceder a esta característica');
        }
    };
    PlacePage.prototype.isLoggedIn = function () {
        return (JSON.parse(localStorage.getItem('infox_user')));
    };
    PlacePage.prototype.saveReview = function () {
        var _this = this;
        if (!this.review.comentario || !this.review.calificacion) {
            alert('Debe ingresar su calificación y comentario');
            return;
        }
        this.user = JSON.parse(localStorage.getItem('infox_user'));
        if (!this.user || !this.user.user || !this.user.user.id) {
            var toast = this.toastCtrl.create({
                message: 'No puedes calificar este negocio porque no has iniciado sesión',
                duration: 3500,
                position: 'top'
            });
            toast.present();
            return;
        }
        this.user = this.user.user;
        var loader = this.loadingCtrl.create({
            content: "Por favor espere...",
        });
        this.review.id_usuario = this.user.id;
        this.review.id_directorio = this.placeId;
        var params = new __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["c" /* HttpParams */]({
            fromObject: this.review
        });
        this.httpClient.get(this.api_url + 'califica_negocio.php', { params: params }).subscribe(function (data) {
            var toast = _this.toastCtrl.create({
                message: 'Reseña guardada',
                duration: 3000,
                position: 'top'
            });
            toast.present();
            console.log(data);
            loader.dismissAll();
            _this.getPlaceDetails();
        }, function (error) {
            console.log(error);
            loader.dismissAll();
        });
    };
    PlacePage.prototype.getStarName = function (starN) {
        return (starN <= this.review.calificacion) ? 'star' : 'star-outline';
    };
    PlacePage.prototype.getStarName2 = function (starN, rate) {
        return (starN <= rate) ? 'star' : 'star-outline';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Content */])
    ], PlacePage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* Navbar */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* Navbar */])
    ], PlacePage.prototype, "navBar", void 0);
    PlacePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-place',template:/*ion-inline-start:"/Users/ed/Downloads/enzorromovil/infox-v3/src/pages/place/place.html"*/'<ion-header>\n    <ion-navbar color="primary">\n        <ion-title>\n            <div text-center>\n                <img src="assets/img/logo_infox_white.png" class="mainLogo"/>\n            </div>\n        </ion-title>\n        <ion-buttons end>\n      <span id="loggedUserName" *ngIf="isLoggedIn()">\n        <ion-icon name="contact" class="white-color"></ion-icon>\n      </span>\n        </ion-buttons>\n    </ion-navbar>\n    <ion-toolbar color="primary">\n        <ion-input mode="ios" placeholder="Buscar..." value="{{recentSearch}}" (ionFocus)="openSearchModal()" readonly>\n            <ion-icon name="md-mic"></ion-icon>\n        </ion-input>\n\n        <ion-buttons end>\n            <button item-right ion-button color="light" class="mic-button" (click)="openSpeechModal()">\n                <ion-icon name="md-mic"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n    <offline *ngIf="!globalVariables.isConnected && !showData"></offline>\n\n    <div *ngIf="showData && place.data" class="animate-fade-item">\n        <div class="placeHeader" [ngClass]="{\'headerPadding\': !place.data.latitud && !place.data.longitud}">\n            <h1 class="textCapitalize">{{place.data.nombre | lowercase}}</h1>\n            <h4 class="textCapitalize">{{place.data.clasificacion | lowercase}}</h4>\n            <div text-center class="rate-stars">\n                <small *ngIf="place && place.data && place.data.promedio_calificacion" color="infox" style="font-size: 1.3em; vertical-align: super;">{{place.data.promedio_calificacion | number: \'1.0-2\'}}</small>\n                <ion-icon name="{{getStarName2(1, place.data.promedio_calificacion)}}"></ion-icon>\n                <ion-icon name="{{getStarName2(2, place.data.promedio_calificacion)}}"></ion-icon>\n                <ion-icon name="{{getStarName2(3, place.data.promedio_calificacion)}}"></ion-icon>\n                <ion-icon name="{{getStarName2(4, place.data.promedio_calificacion)}}"></ion-icon>\n                <ion-icon name="{{getStarName2(5, place.data.promedio_calificacion)}}"></ion-icon>\n                <span style="font-size: 1.3em; vertical-align: super;">({{place.data.num_resenas}})</span>\n            </div>\n        </div>\n        <div class="takeMeThere" text-center *ngIf="place.data.latitud && place.data.longitud">\n            <button ion-button icon-left color="primary" (click)="openGpsModal()">\n                <ion-icon name="ios-navigate"></ion-icon>\n                ¡Llévame Ahí!\n            </button>\n        </div>\n        <div class="middle-menu" [ngClass]="{\'middleMenuPadding\': !place.data.latitud && !place.data.longitud}">\n            <a class="mid-item" (click)="share()">\n                <ion-icon ios="ios-share-outline" md="md-share"></ion-icon>\n                <span class="mid-item-text">Compartir</span>\n            </a>\n            <a class="mid-item" *ngIf="place.dishes.length > 0" (click)="showDishes()">\n                <ion-icon name="ios-restaurant"></ion-icon>\n                <span class="mid-item-text">Ver Menú</span>\n            </a>\n            <a class="mid-item" *ngIf="place.data.web" href="{{place.data.web}}" onclick="window.open(this.href, \'_blank\'); return false;">\n                <ion-icon name="ios-globe"></ion-icon>\n                <span class="mid-item-text">Sitio Web</span>\n            </a>\n            <a class="mid-item" (click)="favorite()">\n                <ion-icon name="ios-star-outline"></ion-icon>\n                <span class="mid-item-text">Favorito</span>\n            </a>\n        </div>\n\n        <div *ngIf="place.data.otrosdatos">\n            <ion-card-content class="noPaddingBot">\n                <ion-icon name="information-circle"></ion-icon>\n                <span [innerHtml]="place.data.otrosdatos | capitalize"></span>\n            </ion-card-content>\n        </div>\n\n        <div *ngIf="place.data.informacion" class="infoCard">\n            <ion-card>\n                <ion-card-content [ngClass]="{\'read-more\': !showInfo}">\n                    <ion-icon name="information-circle"></ion-icon>\n                    <span *ngIf="!showInfo" [innerHtml]="place.data.informacion | capitalize"></span>\n                    <span *ngIf="showInfo" [innerHtml]="place.data.informacion | capitalize | newline"></span>\n                </ion-card-content>\n\n                <div (click)="showInfo = !showInfo" class="read-message">\n                    <span *ngIf="showInfo" (click)="scrollTop()">Leer menos </span>\n                    <span *ngIf="!showInfo && place.data.informacion.length > 40">Leer más </span>\n                </div>\n\n            </ion-card>\n        </div>\n\n        <div padding>\n            <p>\n                <ion-icon name="ios-pin"></ion-icon>\n                {{place.data.domicilio}}<br/>{{place.data.ciudad}}, {{place.data.estado}}\n            </p>\n            <hr/>\n\n            <div *ngIf="place.data.telefonos" class="phoneSection">\n                <div *ngIf="!show_full_phones" class="bigger_phones">\n                    <ion-icon name="ios-call"></ion-icon>\n                    Matriz: <a>(834) 16...</a>\n                </div>\n                <a (click)="show_full_phones = !show_full_phones" class="bigger_phones"><i *ngIf="!show_full_phones">Ver\n                    Teléfonos</i></a>\n                <div *ngIf="show_full_phones" class="bigger_phones">\n                    <ion-icon name="ios-call"></ion-icon>\n                    <span [innerHtml]="linkify(place.data.telefonos)">{{linkify(place.data.telefonos)}}</span><br/>\n                </div>\n            </div>\n            <hr/>\n            <div *ngIf="place.data.horarios">\n                <ion-icon name="md-time"></ion-icon>\n                {{place.data.horarios}}<br/>\n                <hr/>\n            </div>\n        </div>\n\n        <div class="incorrect-info-ribbon" text-center text-wrap [ngClass]="{\'animate-fade\': !correctData, \'fadeOut\': correctData}" *ngIf="!correctData">\n            ¿Los datos son correctos?\n            <div class="button-section">\n                <button ion-button small clear color="light" icon-left (click)="openIncorrect()">\n                    <ion-icon name="md-close-circle"></ion-icon>\n                    No\n                </button>\n                <button ion-button small clear color="light" icon-left (click)="isCorrectData()">\n                    <ion-icon name="md-checkmark-circle"></ion-icon>\n                    Sí\n                </button>\n            </div>\n\n        </div>\n        <div>\n            <h3 padding text-center>Calificar este Lugar</h3>\n            <div text-center class="rate-stars">\n                <ion-icon (click)="review.calificacion = 1" name="{{getStarName(1)}}"></ion-icon>\n                <ion-icon (click)="review.calificacion = 2" name="{{getStarName(2)}}"></ion-icon>\n                <ion-icon (click)="review.calificacion = 3" name="{{getStarName(3)}}"></ion-icon>\n                <ion-icon (click)="review.calificacion = 4" name="{{getStarName(4)}}"></ion-icon>\n                <ion-icon (click)="review.calificacion = 5" name="{{getStarName(5)}}"></ion-icon>\n            </div>\n            <ion-item>\n                <ion-range min="0" max="5" step="1" snaps="true" color="infox" [(ngModel)]="review.calificacion"></ion-range>\n            </ion-item>\n            <ion-item>\n                <ion-textarea placeholder="Escribe una reseña" [(ngModel)]="review.comentario"></ion-textarea>\n            </ion-item>\n            <ion-item>\n                <ion-label>Privado</ion-label>\n                <ion-checkbox [(ngModel)]="review.privado"></ion-checkbox>\n            </ion-item>\n            <div text-center padding>\n                <button ion-button color="primary" full (click)="saveReview()">\n                    Guardar Reseña\n                </button>\n            </div>\n        </div>\n\n        <div *ngIf="place.data.latitud && place.data.longitud">\n            <div class="placeMap" #placeMap id="placeMap"></div>\n        </div>\n\n\n        <div class="facebook" *ngIf="place.data.linkfb && (place.data.plan == \'2\' || place.data.plan == \'3\' || place.data.plan == \'4\')" text-center>\n            <ion-card>\n                <ion-card-content>\n                    <iframe [src]="facebookLink" width="340" height="500" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>\n                </ion-card-content>\n            </ion-card>\n        </div>\n\n\n        <div class="banner" *ngIf="place.data.banner">\n            <ion-card>\n                <ion-card-content>\n                    <img style="width: 100%" src="http://infox.mx/publicidad/{{place.data.banner}}"/>\n                </ion-card-content>\n            </ion-card>\n        </div>\n        <div class="gallery" *ngIf="place.gallery.length > 0">\n            <h1 text-center>Galería</h1>\n            <ion-slides pager="true" effect="fade" loop="true">\n                <ion-slide *ngFor="let slide of place.gallery">\n                    <ion-card>\n                        <ion-card-content>\n                            <img src="http://www.infox.mx/galeria/{{slide.nombreimg}}">\n                        </ion-card-content>\n                    </ion-card>\n                </ion-slide>\n            </ion-slides>\n        </div>\n        <div>\n            <ion-card *ngFor="let r of reviewArr" class="placeReview">\n                <ion-card-header>\n                    <b>{{r.nombres}} {{r.apellidos}}\n                    <span>{{r.calificacion}}</span> <ion-icon name="star"></ion-icon></b>\n                </ion-card-header>\n                <ion-card-content>\n                    <small>{{r.creado | date: \'medium\'}}</small>\n                    <p>{{r.comentario}}</p>\n                </ion-card-content>\n            </ion-card>\n        </div>\n        <div text-center padding class="visits">\n            <span>{{place.data.visitas}} VISITAS</span>\n        </div>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/ed/Downloads/enzorromovil/infox-v3/src/pages/place/place.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__general_global_variables__["a" /* GlobalVariables */],
            __WEBPACK_IMPORTED_MODULE_3__general_general__["a" /* General */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_4__services_services__["a" /* AppService */],
            __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* LoadingController */]])
    ], PlacePage);
    return PlacePage;
}());

//# sourceMappingURL=place.js.map

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__capitalize_capitalize__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__newline_newline__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__order_by_order_by__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__remove_html_remove_html__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__safe_safe__ = __webpack_require__(464);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var PipeModule = /** @class */ (function () {
    function PipeModule() {
    }
    PipeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__capitalize_capitalize__["a" /* CapitalizePipe */],
                __WEBPACK_IMPORTED_MODULE_2__newline_newline__["a" /* NewlinePipe */],
                __WEBPACK_IMPORTED_MODULE_3__order_by_order_by__["a" /* OrderByPipe */],
                __WEBPACK_IMPORTED_MODULE_4__remove_html_remove_html__["a" /* RemoveHtmlPipe */],
                __WEBPACK_IMPORTED_MODULE_5__safe_safe__["a" /* SafePipe */]
            ],
            imports: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__capitalize_capitalize__["a" /* CapitalizePipe */],
                __WEBPACK_IMPORTED_MODULE_2__newline_newline__["a" /* NewlinePipe */],
                __WEBPACK_IMPORTED_MODULE_3__order_by_order_by__["a" /* OrderByPipe */],
                __WEBPACK_IMPORTED_MODULE_4__remove_html_remove_html__["a" /* RemoveHtmlPipe */],
                __WEBPACK_IMPORTED_MODULE_5__safe_safe__["a" /* SafePipe */]
            ]
        })
    ], PipeModule);
    return PipeModule;
}());

//# sourceMappingURL=pipe.module.js.map

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CapitalizePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CapitalizePipe = /** @class */ (function () {
    function CapitalizePipe() {
    }
    CapitalizePipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return (!!value) ? value.charAt(0).toUpperCase() + value.substr(1).toLowerCase() : '';
    };
    CapitalizePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'capitalize',
        })
    ], CapitalizePipe);
    return CapitalizePipe;
}());

//# sourceMappingURL=capitalize.js.map

/***/ }),

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewlinePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NewlinePipe = /** @class */ (function () {
    function NewlinePipe() {
    }
    NewlinePipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!value)
            return value;
        value = value.replace(new RegExp('\n', 'g'), "<br />");
        return value;
    };
    NewlinePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'newline',
        })
    ], NewlinePipe);
    return NewlinePipe;
}());

//# sourceMappingURL=newline.js.map

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemoveHtmlPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RemoveHtmlPipe = /** @class */ (function () {
    function RemoveHtmlPipe() {
    }
    RemoveHtmlPipe.prototype.transform = function (value) {
        if (value) {
            var result = value.replace(/<\/?[^>]+>/gi, ""); //removing html tag using regex pattern
            return result;
        }
        else {
        }
    };
    RemoveHtmlPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'remove-html',
        })
    ], RemoveHtmlPipe);
    return RemoveHtmlPipe;
}());

//# sourceMappingURL=remove-html.js.map

/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafePipe = /** @class */ (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    SafePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({ name: 'safe' }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
    ], SafePipe);
    return SafePipe;
}());

//# sourceMappingURL=safe.js.map

/***/ })

});
//# sourceMappingURL=1.js.map