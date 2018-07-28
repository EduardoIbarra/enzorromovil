import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, Content, ModalController} from 'ionic-angular';
import {AppService} from '../../services/services';
import {GlobalVariables} from '../../general/global-variables';
import {General} from '../../general/general';
import {PlaceClasification} from '../../services/place-clasification';
import {OrderByPipe} from "../../pipes/order-by/order-by";

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

    @ViewChild(Content) content: Content;

    searchQuery;
    showData: boolean = false;
    form: any = {page: 1};
    places: any = [];
    records: any;
    refresher: any;
    emptyMessage: String;
    recentSearch: String;
    order: string = 'plan';

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public modalCtrl: ModalController,
      public globalVariables: GlobalVariables,
      public general: General,
      public placeClasification: PlaceClasification,
      public appService: AppService,
      public orderBy: OrderByPipe
  ) {
      this.searchQuery = globalVariables.searchParams || null;
      this.getPlaces(false);

      if (this.globalVariables.goToPlace) {
          this.navCtrl.push('PlacePage', {}, {animate: false});
      }
  }

    viewWillEnter() {
        this.recentSearch = this.general.getLastSearch();
    }

    getPlaces(scrollToTop) {
        if (!this.globalVariables.isConnected) {
            this.general.showNetworkConnectionAlert();
            return;
        }

        if (scrollToTop) {
            this.content.scrollToTop(1000);
        }
        if (this.searchQuery) {
            this.recentSearch = this.general.getLastSearch();
            this.general.presentLoadingMask();
            this.emptyMessage = "Espera por favor, estamos buscando ";
            this.appService.getPlaces(this.searchQuery, this.form.page, this.globalVariables.getDay()).subscribe((response) => {
                this.places = [];
                this.records = response.json().filas;
                this.places = this.placeClasification.sortClasification(response.json().data) || [];
                if (this.places.length > 0) {
                    if (this.places[0].plan !== '4') {
                        this.places = this.orderBy.transform(this.places, this.order);
                    }
                }
                if (this.refresher) {
                    this.refresher.complete();
                }
                console.log(this.places);
                this.showData = true;
                this.general.dismissLoadingMask();
                this.emptyMessage = "No hay resultados en este momento para ";
            }, (error) => {
                console.log(error);
                if (this.refresher) {
                    this.refresher.complete();
                }
                this.places = [];
                this.showData = true;
            });
        } else {
            this.emptyMessage = "No hay resultados en este momento";
        }

    }

    refresh(refresher) {
        this.refresher = refresher;
        this.getPlaces(false);
    }

    calculatePages() {
        return Math.floor(this.records / 15);
    }

    getPlaceDetails(placeId) {
        if (!this.globalVariables.isConnected) {
            this.general.showNetworkConnectionAlert();
            return;
        }

        this.globalVariables.placeId = placeId;
        this.navCtrl.push('PlacePage');
    }

    openSearchModal() {
        if (!this.globalVariables.isConnected) {
            this.general.showNetworkConnectionAlert();
            return;
        }

        let modal = this.modalCtrl.create('SearchPlacePage', {samePage: true});

        modal.present();

        modal.onDidDismiss((data) => {
            if (data) {
                this.places = [];
                this.searchQuery = data;
                this.content.scrollToTop(1000);
                this.getPlaces(false);
            }
        })
    }

    openSpeechModal() {
        if (!this.globalVariables.isConnected) {
            this.general.showNetworkConnectionAlert();
            return;
        }

        let modal = this.modalCtrl.create('SpeechModalPage', {samePageSearch: true});
        modal.present();

        modal.onWillDismiss((data) => {
            console.log(data);
            if (data) {
                this.places = [];
                this.searchQuery = data;
                this.content.scrollToTop(1000);
                this.getPlaces(false);
            }
        })
    }
}
