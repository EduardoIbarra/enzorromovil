webpackJsonp([3],{

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeechModalPageModule", function() { return SpeechModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__speech_modal__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_progress_bar_progress_bar_module__ = __webpack_require__(453);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SpeechModalPageModule = /** @class */ (function () {
    function SpeechModalPageModule() {
    }
    SpeechModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__speech_modal__["a" /* SpeechModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__speech_modal__["a" /* SpeechModalPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_progress_bar_progress_bar_module__["a" /* ProgressBarComponentModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__speech_modal__["a" /* SpeechModalPage */]
            ]
        })
    ], SpeechModalPageModule);
    return SpeechModalPageModule;
}());

//# sourceMappingURL=speech-modal.module.js.map

/***/ }),

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeechModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_speech_recognition__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__general_general__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_diagnostic__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__general_global_variables__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SpeechModalPage = /** @class */ (function () {
    function SpeechModalPage(navCtrl, diagnostic, navParams, viewCtrl, app, speechRecognition, globalVariables, platform, general, cd) {
        this.navCtrl = navCtrl;
        this.diagnostic = diagnostic;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.app = app;
        this.speechRecognition = speechRecognition;
        this.globalVariables = globalVariables;
        this.platform = platform;
        this.general = general;
        this.cd = cd;
        this.match = '';
        this.isRecording = false;
        this.doneRecording = true;
        this.hasResults = false;
        this.hideProgress = false;
        this.samePageSearch = false;
        this.timer = 0;
        this.match = '';
    }
    SpeechModalPage.prototype.ionViewDidLoad = function () {
        this.getPermission();
        this.samePageSearch = this.navParams.get('samePageSearch') || false;
        this.isAndroid = this.platform.is('android') || false;
        this.match = null;
        //
        // let interval = setInterval(() => {
        //     this.hasResults = true;
        //
        //     this.timer++;
        //     if(this.timer === 100){
        //         clearInterval(interval);
        //         this.hideProgress =  true;
        //     }
        // }, 50);
    };
    SpeechModalPage.prototype.stopListening = function () {
        var _this = this;
        this.speechRecognition.stopListening().then(function () {
            _this.isRecording = false;
            _this.doneRecording = true;
            clearInterval(_this.interval);
            _this.timer = 0;
            _this.cd.detectChanges();
        });
    };
    SpeechModalPage.prototype.getPermission = function () {
        var _this = this;
        this.speechRecognition.hasPermission()
            .then(function (hasPermission) {
            if (!hasPermission) {
                _this.speechRecognition.requestPermission();
                _this.diagnostic.requestMicrophoneAuthorization();
            }
            else {
                _this.startListening();
            }
        });
    };
    SpeechModalPage.prototype.startListening = function () {
        var _this = this;
        if (!this.globalVariables.isConnected) {
            this.general.showNetworkConnectionAlert();
            this.cancel();
            return;
        }
        var options = {
            language: 'es-MX',
            showPopup: false,
            showPartial: true
        };
        this.isRecording = true;
        this.doneRecording = false;
        this.hideProgress = false;
        this.hasResults = false;
        var doSearch = false;
        this.timer = 0;
        clearInterval(this.interval);
        this.interval = null;
        this.cd.detectChanges();
        this.speechRecognition.startListening(options).subscribe(function (matches) {
            if (matches.length > 0) {
                console.log('matches.length  ' + matches.length);
                _this.match = matches[0];
                console.log('this.match ' + _this.match);
                _this.hasResults = matches.length > 0 ? true : false;
                doSearch = _this.hasResults;
                if (_this.hasResults && doSearch) {
                    _this.timer = 0;
                    _this.interval = setInterval(function () {
                        if (doSearch && _this.isRecording && _this.interval) {
                            _this.timer++;
                        }
                        if (_this.timer === 100) {
                            _this.hideProgress = true;
                            if (matches[0] && _this.match !== 'No hemos detectado resultados') {
                                clearInterval(_this.interval);
                                _this.searchPlace();
                                doSearch = false;
                            }
                        }
                        _this.cd.detectChanges();
                    }, 50);
                }
                _this.cd.detectChanges();
            }
        }, function (error) {
            console.log(error);
            if (!_this.match) {
                _this.match = 'No hemos detectado resultados';
            }
            _this.hasResults = false;
            _this.cd.detectChanges();
        });
        setTimeout(function () {
            if (_this.isRecording && !_this.hasResults) {
                _this.stopListening();
            }
        }, 8000);
    };
    SpeechModalPage.prototype.cancel = function () {
        this.timer = 0;
        this.match = '';
        this.stopListening();
        this.viewCtrl.dismiss();
    };
    SpeechModalPage.prototype.searchPlace = function () {
        var _this = this;
        if (this.match) {
            this.timer = 0;
            var search_1 = this.general.removeAccents(this.match);
            this.stopListening();
            if (this.samePageSearch) {
                this.viewCtrl.dismiss(search_1);
            }
            else {
                this.viewCtrl.dismiss();
                setTimeout(function () {
                    var nav = _this.app.getRootNav();
                    nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */], { search: search_1, tabIndex: 2 });
                }, 400);
            }
        }
    };
    SpeechModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-speech-modal',template:/*ion-inline-start:"/Users/ed/Library/Mobile Documents/com~apple~CloudDocs/Projects/enzorromovil/infox-v3/src/pages/modals/speech-modal/speech-modal.html"*/'<ion-content class="main-view" no-bounce>\n    <div class="overlay"></div>\n    <div class="modal_content">\n        <progress-bar class="progress" [ngClass]="{\'animate-fade\': hasResults && doneRecording, \'fadeOutProgress\': hideProgress}" *ngIf="timer !== 0" [progress]="timer"></progress-bar>\n\n        <div class="speechTitle">\n            <p>Busca negocios</p>\n            <div class="subtitle">\n                <p *ngIf="doneRecording">Presiona el microfono para empezar</p>\n                <p *ngIf="isRecording">Escuchando...</p>\n            </div>\n        </div>\n\n        <div class="mic" (tap)="isRecording? stopListening(): startListening()">\n            <span class="mic-button">\n                <div class="ring" [class.ringAnimation]="isRecording"></div>\n                <ion-icon *ngIf="!isRecording" name="md-mic" class="record-mic"></ion-icon>\n                <ion-icon *ngIf="isRecording" name="md-square" class="record-stop"></ion-icon>\n            </span>\n        </div>\n        <div text-center text-wrap class="transcript-text">&nbsp;{{ match }}&nbsp;</div>\n\n        <div class="buttonGroupSpeech">\n            <button ion-button block clear color="primary" class="cancelButton" (click)="cancel()">Cancelar</button>\n            <button ion-button block clear color="primary" (click)="hasResults ? searchPlace(): \'\'" [disabled]="(!doneRecording && !hasResults) || !hasResults">Buscar</button>\n        </div>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/ed/Library/Mobile Documents/com~apple~CloudDocs/Projects/enzorromovil/infox-v3/src/pages/modals/speech-modal/speech-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_diagnostic__["a" /* Diagnostic */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_speech_recognition__["a" /* SpeechRecognition */],
            __WEBPACK_IMPORTED_MODULE_6__general_global_variables__["a" /* GlobalVariables */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__general_general__["a" /* General */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */]])
    ], SpeechModalPage);
    return SpeechModalPage;
}());

//# sourceMappingURL=speech-modal.js.map

/***/ }),

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressBarComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__progress_bar__ = __webpack_require__(454);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProgressBarComponentModule = /** @class */ (function () {
    function ProgressBarComponentModule() {
    }
    ProgressBarComponentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__progress_bar__["a" /* ProgressBarComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__progress_bar__["a" /* ProgressBarComponent */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__progress_bar__["a" /* ProgressBarComponent */]
            ]
        })
    ], ProgressBarComponentModule);
    return ProgressBarComponentModule;
}());

//# sourceMappingURL=progress-bar.module.js.map

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressBarComponent; });
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

var ProgressBarComponent = /** @class */ (function () {
    function ProgressBarComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('progress'),
        __metadata("design:type", Object)
    ], ProgressBarComponent.prototype, "progress", void 0);
    ProgressBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'progress-bar',template:/*ion-inline-start:"/Users/ed/Library/Mobile Documents/com~apple~CloudDocs/Projects/enzorromovil/infox-v3/src/components/progress-bar/progress-bar.html"*/'<div class="progress-outer">\n  <div class="progress-inner" [style.width]="progress + \'%\'"></div>\n</div>'/*ion-inline-end:"/Users/ed/Library/Mobile Documents/com~apple~CloudDocs/Projects/enzorromovil/infox-v3/src/components/progress-bar/progress-bar.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ProgressBarComponent);
    return ProgressBarComponent;
}());

//# sourceMappingURL=progress-bar.js.map

/***/ })

});
//# sourceMappingURL=3.js.map