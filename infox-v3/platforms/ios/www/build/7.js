webpackJsonp([7],{

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPlacePageModule", function() { return SearchPlacePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_place__ = __webpack_require__(451);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SearchPlacePageModule = /** @class */ (function () {
    function SearchPlacePageModule() {
    }
    SearchPlacePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__search_place__["a" /* SearchPlacePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__search_place__["a" /* SearchPlacePage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__search_place__["a" /* SearchPlacePage */]
            ]
        })
    ], SearchPlacePageModule);
    return SearchPlacePageModule;
}());

//# sourceMappingURL=search-place.module.js.map

/***/ }),

/***/ 451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPlacePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_services__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__general_general__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__general_global_variables__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tabs_tabs__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SearchPlacePage = /** @class */ (function () {
    function SearchPlacePage(navCtrl, navParams, app, viewctrl, globalVariables, general, appService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.viewctrl = viewctrl;
        this.globalVariables = globalVariables;
        this.general = general;
        this.appService = appService;
        this.items = [];
        this.didSearch = false;
        this.errorMessage = false;
        this.recentSearch = false;
    }
    SearchPlacePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.samePage = this.navParams.get('samePage') || false;
        this.placeholder = this.navParams.get('placeholder') || 'Buscar...';
        if (this.placeholder === 'Buscar...') {
            if (this.globalVariables.recentSearchResults.length > 0) {
                this.items = this.globalVariables.recentSearchResults;
                this.recentSearch = true;
            }
        }
        else {
            if (this.globalVariables.recentNearbySearchResults.length > 0) {
                this.items = this.globalVariables.recentNearbySearchResults;
                this.recentSearch = true;
            }
        }
        setTimeout(function () {
            _this.searchbar.setFocus();
        }, 500);
    };
    SearchPlacePage.prototype.closeModal = function () {
        this.viewctrl.dismiss();
    };
    SearchPlacePage.prototype.searchResult = function (ev) {
        var _this = this;
        if (!this.globalVariables.isConnected) {
            this.general.showNetworkConnectionAlert();
            this.closeModal();
            return;
        }
        this.recentSearch = false;
        var query = ev.target.value;
        if (query !== '' && query !== undefined) {
            query = this.general.removeAccents(query);
            this.appService.autocompleteSearch(query).subscribe((function (response) {
                _this.items = response.json().data;
                _this.didSearch = true;
                _this.errorMessage = false;
            }), (function (error) {
                _this.errorMessage = true;
            }));
        }
    };
    SearchPlacePage.prototype.viewPlacesList = function (query) {
        if (this.placeholder === 'Buscar...') {
            this.globalVariables.recentSearchResults = this.items;
            this.globalVariables.recentSearch = query;
        }
        else {
            this.globalVariables.recentNearbySearchResults = this.items;
            this.globalVariables.recentNearbySearch = query;
        }
        if (this.samePage) {
            this.viewctrl.dismiss(query);
        }
        else {
            this.closeModal();
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__tabs_tabs__["a" /* TabsPage */], { search: query, tabIndex: 2 });
        }
    };
    SearchPlacePage.prototype.searchOnEnter = function (keyboardCode, searchQuery) {
        if (keyboardCode === 13) {
            this.viewPlacesList(searchQuery);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('searchbar'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* Searchbar */])
    ], SearchPlacePage.prototype, "searchbar", void 0);
    SearchPlacePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search-place',template:/*ion-inline-start:"/Users/ed/Library/Mobile Documents/com~apple~CloudDocs/Projects/enzorromovil/infox-v3/src/pages/modals/search-place/search-place.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n        <ion-searchbar #searchbar mode="md" (keypress)="searchOnEnter($event.keyCode, searchbar.value)" (ionInput)="searchResult($event)" placeholder="{{placeholder}}"></ion-searchbar>\n        <ion-buttons end>\n            <button ion-button icon-only (click)="closeModal()">\n                <ion-icon name="md-close-circle"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n    <ion-list>\n        <ion-item *ngIf="items.length > 0 && recentSearch" class="itemColor">\n            <b>Búsqueda reciente...</b>\n        </ion-item>\n        <ion-item *ngIf="items.length > 0 && !recentSearch" class="itemColor">\n            <b>Hacer búsqueda...</b>\n        </ion-item>\n        <ion-item *ngIf="items.length == 0 && didSearch" class="itemColor">\n            <b>No hay resultados</b>\n        </ion-item>\n        <ion-item *ngIf="errorMessage" class="itemColor" text-center text-wrap>\n            <b>Ha ocurrido un error, intenta de nuevo más tarde.</b>\n        </ion-item>\n\n        <button ion-item detail-none *ngFor="let item of items" (click)="viewPlacesList(item.cadena)">\n            {{ item.cadena }}\n        </button>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/ed/Library/Mobile Documents/com~apple~CloudDocs/Projects/enzorromovil/infox-v3/src/pages/modals/search-place/search-place.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_4__general_global_variables__["a" /* GlobalVariables */],
            __WEBPACK_IMPORTED_MODULE_3__general_general__["a" /* General */],
            __WEBPACK_IMPORTED_MODULE_2__services_services__["a" /* AppService */]])
    ], SearchPlacePage);
    return SearchPlacePage;
}());

//# sourceMappingURL=search-place.js.map

/***/ })

});
//# sourceMappingURL=7.js.map