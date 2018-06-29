import {Injectable} from '@angular/core';
import {AlertController, LoadingController, ToastController} from 'ionic-angular';
import {GlobalVariables} from './global-variables';
import { Diagnostic } from '@ionic-native/diagnostic';
import { OpenNativeSettings } from '@ionic-native/open-native-settings';
import {Network} from "@ionic-native/network";

@Injectable()

export class General {

    loadingMask: any;

    constructor(
        public loadingCtrl: LoadingController,
        public globalVariables: GlobalVariables,
        public network: Network,
        public toastCtrl: ToastController,
        public alertCtrl: AlertController,
        public diagnostic: Diagnostic,
        public openNativeSettings: OpenNativeSettings,
    ) {
    }

    public removeAccents(str) {
        let accents = 'ÁáÉéÍíÓóÚú';
        let accentsOut = "AaEeIiOoUu";

        if(str === undefined) return;

        str = str.split('');
        let strLen = str.length;

        let i, x;
        for (i = 0; i < strLen; i++) {
            if ((x = accents.indexOf(str[i])) != -1) {
                str[i] = accentsOut[x];
            }
        }
        return str.join('');
    }

    public presentLoadingMask() {
        this.loadingMask = this.loadingCtrl.create({
            spinner: 'hide',
            content: `<div class="loader circle"></div>`,
        });

        this.loadingMask.present();
    }

    dismissLoadingMask(){
        this.loadingMask.dismiss();
    }

    getLastSearch(){
        return this.globalVariables.recentSearch;
    }

    getLastNearbySearch(){
        return this.globalVariables.recentNearbySearch;
    }


    getLocationPermission(){
        this.diagnostic.isLocationAuthorized().then((authorized)=>{
            console.log(authorized);
            if(authorized){
                this.openNativeSettings.open('location').then((data)=>{
                    console.log('Settings opened');
                    console.log(data);
                })
            }else{
                this.diagnostic.requestLocationAuthorization().then((authorized)=>{
                    console.log(authorized);
                    if(authorized){
                        console.log('Proceed get places - location - etc');
                    }else{
                        console.log('show aleertsssssss');
                    }
                })
            }
        }).catch((error)=>{
            console.log(error);
        })
    }

    displayNetworkUpdate(connectionState: string){
        // let networkType = this.network.type;
        let message: string;
        message = connectionState === 'offline' ? 'Conexión a internet perdida' : 'Conexión a internet restablecida';
        this.toastCtrl.create({
            message: message,
            duration: 5000,
            position: 'top'
        }).present();
    }

    showNetworkConnectionAlert(){
        let alert = this.alertCtrl.create({
            title: 'No se ha detectado conexión a internet',
            message: 'No es posible realizar esta acción, verifica tu conexión a la red',
            buttons: ['Cerrar']
        });

        alert.present();
    }

}