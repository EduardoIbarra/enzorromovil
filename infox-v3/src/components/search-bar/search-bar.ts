import { Component } from '@angular/core';
import {ModalController} from 'ionic-angular';
import {SearchPlacePage} from '../../pages/modals/search-place/search-place';
import {AppService} from '../../services/services';

@Component({
  selector: 'search-bar',
  templateUrl: 'search-bar.html'
})
export class SearchBarComponent {


  constructor(
      public appService: AppService,
      public modalCtrl: ModalController,
  ) {

  }


    openSearchModal() {
        let modal =  this.modalCtrl.create(SearchPlacePage);

        modal.present();
    }

}
