webpackJsonp([8],{

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncorrectModalPageModule", function() { return IncorrectModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__incorrect_modal__ = __webpack_require__(455);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var IncorrectModalPageModule = /** @class */ (function () {
    function IncorrectModalPageModule() {
    }
    IncorrectModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__incorrect_modal__["a" /* IncorrectModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__incorrect_modal__["a" /* IncorrectModalPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__incorrect_modal__["a" /* IncorrectModalPage */]
            ]
        })
    ], IncorrectModalPageModule);
    return IncorrectModalPageModule;
}());

//# sourceMappingURL=incorrect-modal.module.js.map

/***/ }),

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IncorrectModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_services__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__general_general__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__general_global_variables__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var IncorrectModalPage = /** @class */ (function () {
    function IncorrectModalPage(navCtrl, navParams, appService, alertCtrl, globalVariables, general, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appService = appService;
        this.alertCtrl = alertCtrl;
        this.globalVariables = globalVariables;
        this.general = general;
        this.viewCtrl = viewCtrl;
        this.showError = false;
    }
    IncorrectModalPage.prototype.closeModal = function (success) {
        this.viewCtrl.dismiss(success);
    };
    IncorrectModalPage.prototype.sendComments = function () {
        var _this = this;
        if (!this.globalVariables.isConnected) {
            this.general.showNetworkConnectionAlert();
            return;
        }
        if (this.comments && !/\s/.test(this.comments)) {
            this.general.presentLoadingMask();
            this.showError = false;
            this.appService.sendComments(this.navParams.get('placeId'), this.comments).subscribe(function () {
                _this.closeModal(true);
                _this.general.dismissLoadingMask();
                _this.successAlert();
            }, function () {
                _this.closeModal(false);
                _this.general.dismissLoadingMask();
                _this.errorAlert();
            });
        }
        else {
            this.showError = true;
        }
    };
    IncorrectModalPage.prototype.successAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Atención',
            subTitle: '¡Muchas gracias por tu reporte! Nos ayudas a mejorar.',
            buttons: ['Cerrar']
        });
        alert.present();
    };
    IncorrectModalPage.prototype.errorAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Atención',
            subTitle: 'Ha ocurrido un error al enviar tus comentarios, intenta de nuevo mas tarde.',
            buttons: ['Cerrar']
        });
        alert.present();
    };
    IncorrectModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-incorrect-modal',template:/*ion-inline-start:"/Users/ed/Library/Mobile Documents/com~apple~CloudDocs/Projects/enzorromovil/infox-v3/src/pages/modals/incorrect-modal/incorrect-modal.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n        <ion-title>Reportar</ion-title>\n        <ion-buttons start>\n            <button ion-button (click)="closeModal(false)">\n                Regresar\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <ion-card>\n\n        <ion-card-header text-wrap>\n            <b>¿Encontraste datos incorrectos?</b>\n        </ion-card-header>\n\n        <ion-card-content text-wrap>\n            Si encontraste algún dato incorrecto que quieras reportarnos, por favor escríbenos los detalles aquí abajo y presiona el botón <b>Enviar</b>\n\n\n            <div class="inputField">\n                <ion-textarea rows="4" type="text" placeholder="Comentarios" [(ngModel)]="comments"></ion-textarea>\n                <p *ngIf="showError" text-wrap>Por favor ingresa tus comentarios</p>\n            </div>\n\n            <button ion-button full icon-right (click)="sendComments()">\n                Enviar\n                <ion-icon name="md-paper-plane"></ion-icon>\n            </button>\n        </ion-card-content>\n\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/ed/Library/Mobile Documents/com~apple~CloudDocs/Projects/enzorromovil/infox-v3/src/pages/modals/incorrect-modal/incorrect-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_services__["a" /* AppService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__general_global_variables__["a" /* GlobalVariables */],
            __WEBPACK_IMPORTED_MODULE_3__general_general__["a" /* General */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* ViewController */]])
    ], IncorrectModalPage);
    return IncorrectModalPage;
}());

//# sourceMappingURL=incorrect-modal.js.map

/***/ })

});
//# sourceMappingURL=8.js.map