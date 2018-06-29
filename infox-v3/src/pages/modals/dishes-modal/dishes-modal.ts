import {Component} from '@angular/core';
import {IonicPage, NavParams, ViewController} from 'ionic-angular';
import {PhotoViewer} from "@ionic-native/photo-viewer";
import {GlobalVariables} from "../../../general/global-variables";
import {General} from "../../../general/general";

@IonicPage()
@Component({
    selector: 'page-dishes-modal',
    templateUrl: 'dishes-modal.html',
})
export class DishesModalPage {

    dishes;

    constructor(
        public navParams: NavParams,
        public viewCtrl: ViewController,
        public globalVariables: GlobalVariables,
        public general: General,
        public photoViewer: PhotoViewer,
        ) {

        this.dishes = this.navParams.get('dishes');
    }

    closeModal() {
        this.viewCtrl.dismiss();
    }

    viewImage(imageUrl, imageTitle) {
        if (!this.globalVariables.isConnected) {
            this.general.showNetworkConnectionAlert();
            return;
        }
        this.photoViewer.show('http://www.infox.mx/menuplatillos/' + imageUrl, imageTitle)
    }
}
