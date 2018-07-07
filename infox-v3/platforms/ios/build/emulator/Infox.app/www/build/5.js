webpackJsonp([5],{

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NearbyPageModule", function() { return NearbyPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nearby__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_offline_offline_module__ = __webpack_require__(305);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NearbyPageModule = /** @class */ (function () {
    function NearbyPageModule() {
    }
    NearbyPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__nearby__["a" /* NearbyPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__nearby__["a" /* NearbyPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_offline_offline_module__["a" /* OfflineComponentModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__nearby__["a" /* NearbyPage */]
            ]
        })
    ], NearbyPageModule);
    return NearbyPageModule;
}());

//# sourceMappingURL=nearby.module.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OfflineComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__offline__ = __webpack_require__(306);
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

/***/ 306:
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
            selector: 'offline',template:/*ion-inline-start:"/Users/ed/Projects/enzorromovil/infox-v3/src/components/offline/offline.html"*/'<ion-grid>\n    <ion-row justify-content-center align-items-center >\n        <div class="offline-content" text-center text-wrap>\n            <img src="assets/img/offline.png" >\n            <br />\n            No hay conexión a internet\n        </div>\n    </ion-row>\n</ion-grid>'/*ion-inline-end:"/Users/ed/Projects/enzorromovil/infox-v3/src/components/offline/offline.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], OfflineComponent);
    return OfflineComponent;
}());

//# sourceMappingURL=offline.js.map

/***/ }),

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NearbyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__general_global_variables__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__general_general__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_services__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_place_clasification__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_network__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var NearbyPage = /** @class */ (function () {
    function NearbyPage(navCtrl, geolocation, modalCtrl, globalVariables, general, placeClasification, network, cd, appService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.geolocation = geolocation;
        this.modalCtrl = modalCtrl;
        this.globalVariables = globalVariables;
        this.general = general;
        this.placeClasification = placeClasification;
        this.network = network;
        this.cd = cd;
        this.appService = appService;
        this.form = { page: 1, listLabel: 0, item: null };
        this.userPosition = { latitude: null, longitude: null };
        this.markersArray = [];
        this.searchQuery = '';
        this.places = [];
        this.showData = false;
        this.dataError = false;
        this.enableRefresh = true;
        this.showReloadMessage = false;
        //Get connection status on change
        this.network.onConnect().subscribe(function (data) {
            _this.getPosition();
        }, function (error) { return console.error(error); });
    }
    NearbyPage.prototype.ionViewDidEnter = function () {
        if (this.places.length === 0 && this.globalVariables.isConnected) {
            this.getPosition();
        }
    };
    NearbyPage.prototype.refresh = function () {
        this.getPosition();
    };
    NearbyPage.prototype.getPosition = function () {
        var _this = this;
        if (!this.globalVariables.isConnected)
            return;
        this.general.presentLoadingMask();
        this.showData = false;
        var options = { timeout: 10000, enableHighAccuracy: true };
        this.geolocation.getCurrentPosition(options).then(function (position) {
            _this.userPosition.latitude = position.coords.latitude;
            _this.userPosition.longitude = position.coords.longitude;
            _this.loadMap(position.coords.latitude, position.coords.longitude);
            _this.dataError = false;
        }).catch(function (error) {
            console.log(error);
            _this.general.dismissLoadingMask();
            _this.dataError = true;
            _this.refresher.complete();
        });
    };
    NearbyPage.prototype.loadMap = function (latitude, longitude) {
        var _this = this;
        console.log(latitude, longitude);
        var UserLatLng = new google.maps.LatLng(latitude, longitude);
        var mapOptions = {
            center: UserLatLng,
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
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
        google.maps.event.addListener(map, 'tilt_changed', function () {
            var userMaker = new google.maps.Marker({
                position: UserLatLng,
                animation: google.maps.Animation.DROP,
                icon: {
                    url: 'assets/img/markers/user.png',
                    scaledSize: new google.maps.Size(50, 55)
                }
            });
            var UserInfoWindow = new google.maps.InfoWindow({ content: 'Estás aquí' });
            userMaker.setMap(map);
            UserInfoWindow.open(map, userMaker);
            //Events to show message
            google.maps.event.addListener(userMaker, 'click', function () {
                UserInfoWindow.open(map, userMaker);
            });
            _this.map = map;
            _this.getNearbyPlaces();
        });
        google.maps.event.addListener(map, 'dragstart', function () {
            _this.refresher.complete();
            _this.enableRefresh = false;
            _this.cd.detectChanges();
        });
        google.maps.event.addListener(map, 'idle', function () {
            setTimeout(function () {
                _this.enableRefresh = true;
                _this.cd.detectChanges();
            }, 500);
        });
    };
    NearbyPage.prototype.getNearbyPlaces = function () {
        var _this = this;
        this.showData = false;
        this.appService.getNearbyPlaces(this.userPosition.latitude, this.userPosition.longitude, this.form.page, this.searchQuery).subscribe(function (response) {
            _this.places = [];
            _this.places = response.data || [];
            _this.records = response.resultados;
            _this.places = Object.keys(_this.places).map(function (key) { return _this.places[key]; });
            _this.places = _this.placeClasification.sortClasification(_this.places);
            _this.showData = true;
            _this.general.dismissLoadingMask();
            _this.setPlacesMarkers(_this.places);
            _this.refresher.complete();
        }, function (error) {
            console.log(error);
            _this.showData = true;
            _this.refresher.complete();
            _this.general.dismissLoadingMask();
        });
    };
    NearbyPage.prototype.setPlacesMarkers = function (places) {
        var _this = this;
        var map = this.map;
        console.log(places);
        //Adjusting zoom dependig on the markers
        var bounds = new google.maps.LatLngBounds();
        var _loop_1 = function (i) {
            places[i].itemPosition = this_1.form.listLabel + (i + 1);
            var placeName = places[i].nombre;
            var itemPositionLabel = places[i].itemPosition;
            var marKerIcon = places[i].icon;
            var timeout = i * 300;
            var latLng = new google.maps.LatLng(parseFloat(places[i].latitud), parseFloat(places[i].longitud));
            //Drop marker one by one
            setTimeout(function () {
                var marker = new MarkerWithLabel({
                    map: map,
                    animation: google.maps.Animation.DROP,
                    position: latLng,
                    icon: 'assets/img/markers/' + marKerIcon,
                    labelAnchor: new google.maps.Point(10, 12),
                    labelInBackground: true
                });
                //Set place name to info window marker
                var infoWindow = new google.maps.InfoWindow({ content: placeName });
                //Show name when click on marker icon
                google.maps.event.addListener(marker, 'click', function () {
                    infoWindow.open(map, marker);
                });
                //Delay on adding the label animation
                marker.labelContent = itemPositionLabel;
                //Adjusting label size
                if (itemPositionLabel > 99) {
                    marker.labelClass = "marker-label-lg";
                }
                else {
                    marker.labelClass = "marker-label";
                }
                //Save marker in array
                _this.markersArray.push(marker);
            }, timeout);
            //Adjusting zoom dependig on the markers
            bounds.extend(latLng);
            if (places.length > 1) {
                bounds.extend(latLng);
                map.fitBounds(bounds);
                map.panToBounds(bounds);
                map.setCenter(bounds.getCenter());
            }
            else {
                if (bounds.getNorthEast().equals(bounds.getSouthWest())) {
                    var extendPoint = new google.maps.LatLng(bounds.getNorthEast().lat() + 0.02, bounds.getNorthEast().lng() + 0.02);
                    bounds.extend(extendPoint);
                }
                map.fitBounds(bounds);
                map.panToBounds(bounds);
                map.setCenter(bounds.getCenter());
            }
        };
        var this_1 = this;
        // Adding item markers
        for (var i = 0; i < places.length; i++) {
            _loop_1(i);
        }
    };
    NearbyPage.prototype.changePage = function (changeTo) {
        if (!this.globalVariables.isConnected) {
            this.general.showNetworkConnectionAlert();
            return;
        }
        if (changeTo === 'home') {
            this.form.page = 1;
            this.form.listLabel = 0;
        }
        if (changeTo === 'prev') {
            this.form.page -= 1;
            this.form.listLabel -= 20;
        }
        if (changeTo === 'next') {
            this.form.page += 1;
            this.form.listLabel += 20;
        }
        this.content.scrollToTop(1000);
        //Remove old markers
        for (var i = 0; i < this.markersArray.length; i++) {
            this.markersArray[i].setMap(null);
        }
        this.markersArray = [];
        this.getPosition();
    };
    NearbyPage.prototype.backToNearby = function () {
        if (!this.globalVariables.isConnected) {
            this.general.showNetworkConnectionAlert();
            return;
        }
        this.form.page = 1;
        this.form.listLabel = 0;
        this.content.scrollToTop(1000);
        //Remove old markers
        for (var i = 0; i < this.markersArray.length; i++) {
            this.markersArray[i].setMap(null);
        }
        this.markersArray = [];
        this.searchQuery = '';
        this.getPosition();
    };
    NearbyPage.prototype.calculatePages = function () {
        return Math.floor(this.records / 15);
    };
    ;
    NearbyPage.prototype.getPlaceDetails = function (placeId) {
        if (!this.globalVariables.isConnected) {
            this.general.showNetworkConnectionAlert();
            return;
        }
        this.globalVariables.goBackToNearby = true;
        this.globalVariables.placeId = placeId;
        this.navCtrl.push('PlacePage');
    };
    NearbyPage.prototype.openSearchModal = function () {
        var _this = this;
        if (!this.globalVariables.isConnected) {
            this.general.showNetworkConnectionAlert();
            return;
        }
        var modal = this.modalCtrl.create('SearchPlacePage', { samePage: true, placeholder: 'Busca cerca de ti...' });
        modal.present();
        modal.onDidDismiss(function (data) {
            if (data) {
                console.log(data);
                _this.searchNearbyPlaces(data);
            }
        });
    };
    NearbyPage.prototype.searchNearbyPlaces = function (searchQuery) {
        this.general.presentLoadingMask();
        this.recentSearch = this.general.getLastNearbySearch();
        this.searchQuery = searchQuery;
        this.showData = false;
        this.form.page = 1;
        this.form.listLabel = 0;
        //Remove old markers
        for (var i = 0; i < this.markersArray.length; i++) {
            this.markersArray[i].setMap(null);
        }
        this.content.scrollToTop(1000);
        this.getNearbyPlaces();
    };
    NearbyPage.prototype.openSpeechModal = function () {
        var _this = this;
        if (!this.globalVariables.isConnected) {
            this.general.showNetworkConnectionAlert();
            return;
        }
        var modal = this.modalCtrl.create('SpeechModalPage', { samePageSearch: true });
        modal.present();
        modal.onWillDismiss(function (data) {
            if (data) {
                console.log(data);
                _this.searchNearbyPlaces(data);
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Content */])
    ], NearbyPage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* Refresher */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* Refresher */])
    ], NearbyPage.prototype, "refresher", void 0);
    NearbyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nearby',template:/*ion-inline-start:"/Users/ed/Projects/enzorromovil/infox-v3/src/pages/nearby/nearby.html"*/'<ion-header>\n\n    <ion-toolbar color="primary">\n        <ion-title>\n            <div text-center>\n                <img src="assets/img/logo_infox_white.png" class="mainLogo"/>\n            </div>\n        </ion-title>\n    </ion-toolbar>\n    <ion-navbar color="primary">\n        <ion-input mode="ios" placeholder="Busca cerca de ti..." value="{{recentSearch}}" (ionFocus)="openSearchModal()" readonly>\n            <ion-icon name="md-mic"></ion-icon>\n        </ion-input>\n        <ion-buttons end>\n            <button item-right ion-button color="light" class="mic-button" (click)="openSpeechModal()">\n                <ion-icon name="md-mic"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n    <ion-refresher (ionRefresh)="refresh($event)" [enabled]="enableRefresh && globalVariables.isConnected">\n        <ion-refresher-content\n                pullingIcon="md-arrow-down"\n                pullingText="Estira Para Actualizar...">\n        </ion-refresher-content>\n    </ion-refresher>\n\n    <offline *ngIf="!globalVariables.isConnected && places.length <= 0"></offline>\n\n    <div no-lines text-center text-wrap padding class="simple-message" *ngIf="showReloadMessage">Busca de lugares cercanos. <br> tirando hacia abajo</div>\n    <div no-lines text-center text-wrap padding class="simple-message" *ngIf="dataError && globalVariables.isConnected">Ha ocurrido un error. <br> Intenta de nuevo tirando hacia abajo</div>\n\n    <div [ngClass]="{\'animate-fade-item\': showData, \'fadeOut\': !showData}" *ngIf="globalVariables.isConnected || places.length > 0">\n        <div padding>\n            <div id="map" class="nearbyMap"></div>\n        </div>\n        <div no-lines text-center text-wrap padding class="simple-message" *ngIf="places.length <= 0 && showData && searchQuery">No se han encontrado <b>{{searchQuery}}</b> cercanos a ti. <br> Intenta de nuevo</div>\n\n        <ion-list *ngIf="showData">\n\n            <button ion-item detail-none *ngFor="let place of places" [ngClass]="(place.plan == 4) ? \'item-featured\' : \'\'" (click)="getPlaceDetails(place.id)">\n                <ion-avatar item-start *ngIf="place.imagen && place.plan !== \'\'" class="list-place-img">\n                    <img [src]="\'http://infox.mx/\' + place.imagen">\n                </ion-avatar>\n                <ion-avatar item-start *ngIf="!place.imagen || place.plan === \'\'" class="list-place-img">\n                    <img src="assets/img/logo_infox_big.png">\n                </ion-avatar>\n                <div class="itemPadding">\n                    <h2 class="search-list-place-name">{{place.itemPosition + \'. \'+ place.nombre | lowercase}}</h2>\n                    <span class="category">\n                    <ion-icon name="{{place.iconStyle}}"></ion-icon>\n                    {{place.clasificacion | lowercase}}\n                 </span>\n                    <p *ngIf="place.otrosdatos">\n                        <ion-icon name="md-information-circle"></ion-icon>\n                        {{place.otrosdatos}}\n                    </p>\n                    <p *ngIf="place.distancia" class="textCapitalize">\n                        <ion-icon name="md-car"></ion-icon>\n                        <b> A {{place.distancia}} Km aprox.</b>\n                    </p>\n                </div>\n            </button>\n        </ion-list>\n\n        <div *ngIf="records > 20" text-center padding>\n            <span *ngIf="calculatePages() > 0">Página\n                <strong>{{form.page}}</strong> de\n                <strong> {{calculatePages()}}</strong> |\n            </span>\n            <span>\n                <strong>{{records}}</strong>\n                <span *ngIf="records == 1"> Resultado</span>\n                <span *ngIf="records > 1">Resultados</span>\n            </span>\n        </div>\n        <div text-center *ngIf="places.length > 0 && records > 20 " class="buttonGroupNearby" no-padding>\n            <button ion-button full icon-left (click)="changePage(\'home\')" [disabled]="form.page == 1" color="light" class="homeButton">\n                <ion-icon name="home"></ion-icon>\n                Inicio\n            </button>\n            <button ion-button full icon-left (click)="changePage(\'prev\')" [disabled]="form.page <= 1" color="light">\n                <ion-icon name="ios-arrow-back"></ion-icon>\n                Atrás\n            </button>\n            <button ion-button full icon-right (click)="changePage(\'next\')" [disabled]="places.length < 14" color="primary">\n                Siguiente\n                <ion-icon name="ios-arrow-forward"></ion-icon>\n            </button>\n        </div>\n\n        <div text-center *ngIf="searchQuery">\n            <div padding *ngIf="records >= 1 && records <= 20">\n                <strong>{{records}}</strong>\n                <span *ngIf="records == 1"> Resultado</span>\n                <span *ngIf="records > 1">Resultados</span>\n            </div>\n            <button ion-button icon-left color="primary" (click)="backToNearby()">\n                <ion-icon name="ios-home"></ion-icon>\n                Lugares Cercanos\n            </button>\n        </div>\n    </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/ed/Projects/enzorromovil/infox-v3/src/pages/nearby/nearby.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__general_global_variables__["a" /* GlobalVariables */],
            __WEBPACK_IMPORTED_MODULE_4__general_general__["a" /* General */],
            __WEBPACK_IMPORTED_MODULE_6__services_place_clasification__["a" /* PlaceClasification */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_5__services_services__["a" /* AppService */]])
    ], NearbyPage);
    return NearbyPage;
}());

//# sourceMappingURL=nearby.js.map

/***/ })

});
//# sourceMappingURL=5.js.map