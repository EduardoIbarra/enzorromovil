import {Component} from '@angular/core';
import {IonicPage, App, NavController, NavParams, ViewController, Platform} from 'ionic-angular';
import {SpeechRecognition, SpeechRecognitionListeningOptions} from '@ionic-native/speech-recognition';
import {ChangeDetectorRef} from '@angular/core';
import {General} from '../../../general/general';
import {TabsPage} from "../../tabs/tabs";
import {Diagnostic} from "@ionic-native/diagnostic";
import {GlobalVariables} from "../../../general/global-variables";

@IonicPage()
@Component({
  selector: 'page-speech-modal',
  templateUrl: 'speech-modal.html',
})
export class SpeechModalPage {

    match:any = '';
    isRecording:boolean = false;
    doneRecording:boolean = true;
    hasResults:boolean = false;
    hideProgress:boolean = false;
    samePageSearch:boolean = false;
    timer:number = 0;
    interval:any;
    isAndroid:any;

  constructor(
      public navCtrl: NavController,
      public diagnostic: Diagnostic,
      public navParams: NavParams,
      public viewCtrl: ViewController,
      public app: App,
      public speechRecognition: SpeechRecognition,
      public globalVariables: GlobalVariables,
      public platform: Platform,
      public general: General,
      private cd: ChangeDetectorRef
  ) {
      this.match = '';
  }

    ionViewDidLoad() {
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
    }

    stopListening() {
        this.speechRecognition.stopListening().then(() => {
            this.isRecording = false;
            this.doneRecording = true;
            clearInterval(this.interval);
            this.timer = 0;
            this.cd.detectChanges();
        });
    }

    getPermission() {
        this.speechRecognition.hasPermission()
            .then((hasPermission: boolean) => {
                if (!hasPermission) {
                    this.speechRecognition.requestPermission();
                    this.diagnostic.requestMicrophoneAuthorization();
                } else {
                    this.startListening();
                }
            });
    }

    startListening() {

        if (!this.globalVariables.isConnected) {
            this.general.showNetworkConnectionAlert();
            this.cancel();
            return;
        }

        let options: SpeechRecognitionListeningOptions = {
            language: 'es-MX',
            showPopup: false,
            showPartial: true
        };

        this.isRecording = true;
        this.doneRecording = false;
        this.hideProgress = false;
        this.hasResults = false;
        let doSearch = false;
        this.timer = 0;

        clearInterval(this.interval);
        this.interval = null;
        this.cd.detectChanges();

        this.speechRecognition.startListening(options).subscribe(matches => {
            if (matches.length > 0) {
                console.log('matches.length  ' + matches.length)
                this.match = matches[0];
                console.log('this.match ' + this.match);
                this.hasResults = matches.length > 0 ? true : false;
                doSearch = this.hasResults;
                if (this.hasResults && doSearch) {
                    this.timer = 0;
                    this.interval = setInterval(() => {
                        if (doSearch && this.isRecording && this.interval) {
                            this.timer++;
                        }
                        if (this.timer === 100) {
                            this.hideProgress = true;
                            if (matches[0] && this.match !== 'No hemos detectado resultados') {
                                clearInterval(this.interval);
                                this.searchPlace();
                                doSearch = false;
                            }
                        }
                        this.cd.detectChanges();
                    }, 50);
                }
                this.cd.detectChanges();
            }

        }, (error) => {
            console.log(error);
            if (!this.match) {
                this.match = 'No hemos detectado resultados';
            }
            this.hasResults = false;
            this.cd.detectChanges();
        });

        setTimeout(() => {
            if (this.isRecording && !this.hasResults) {
                this.stopListening();
            }
        }, 8000)

    }

    cancel() {
        this.timer = 0;
        this.match = '';
        this.stopListening();
        this.viewCtrl.dismiss()
    }

    searchPlace() {
        if (this.match) {
            this.timer = 0;
            let search = this.general.removeAccents(this.match);
            this.stopListening();
            if (this.samePageSearch) {
                this.viewCtrl.dismiss(search);
            } else {
                this.viewCtrl.dismiss();
                setTimeout(() => {
                    let nav = this.app.getRootNav();
                    nav.setRoot(TabsPage, {search: search, tabIndex: 3});
                }, 400);
            }
        }
    }

}
