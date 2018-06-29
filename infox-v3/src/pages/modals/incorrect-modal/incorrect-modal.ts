import {Component} from '@angular/core';
import {IonicPage,NavController, NavParams, ViewController,AlertController} from 'ionic-angular';
import {AppService} from '../../../services/services';
import {General} from '../../../general/general';
import {GlobalVariables} from "../../../general/global-variables";
@IonicPage()
@Component({
    selector: 'page-incorrect-modal',
    templateUrl: 'incorrect-modal.html',
})
export class IncorrectModalPage {

    comments: string;
    showError: boolean = false;
    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public appService: AppService,
        public alertCtrl: AlertController,
        public globalVariables: GlobalVariables,
        public general: General,
        public viewCtrl: ViewController,
        ) {}

    closeModal(success) {
        this.viewCtrl.dismiss(success);
    }

    sendComments() {
        if (!this.globalVariables.isConnected) {
            this.general.showNetworkConnectionAlert();
            return;
        }

        if (this.comments && !/\s/.test(this.comments)) {
            this.general.presentLoadingMask();
            this.showError = false;
            this.appService.sendComments(this.navParams.get('placeId'), this.comments).subscribe(() => {
                this.closeModal(true);
                this.general.dismissLoadingMask();
                this.successAlert();
            }, () => {
                this.closeModal(false);
                this.general.dismissLoadingMask();
                this.errorAlert();
            });
        } else {
            this.showError = true;
        }
    }

    successAlert() {
        let alert = this.alertCtrl.create({
            title: 'Atención',
            subTitle: '¡Muchas gracias por tu reporte! Nos ayudas a mejorar.',
            buttons: ['Cerrar']
        });
        alert.present();
    }

    errorAlert() {
        let alert = this.alertCtrl.create({
            title: 'Atención',
            subTitle: 'Ha ocurrido un error al enviar tus comentarios, intenta de nuevo mas tarde.',
            buttons: ['Cerrar']
        });
        alert.present();
    }
}
