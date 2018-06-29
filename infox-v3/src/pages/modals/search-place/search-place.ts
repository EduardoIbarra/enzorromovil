import {Component, ViewChild} from '@angular/core';
import {IonicPage, ViewController, NavController, NavParams, App, Searchbar} from 'ionic-angular';
import {AppService} from '../../../services/services';
import {General} from '../../../general/general';
import {GlobalVariables} from '../../../general/global-variables';
import {TabsPage} from "../../tabs/tabs";
@IonicPage()
@Component({
    selector: 'page-search-place',
    templateUrl: 'search-place.html',
})
export class SearchPlacePage {

    @ViewChild('searchbar') searchbar: Searchbar;
    items = [];
    didSearch: Boolean = false;
    errorMessage: Boolean = false;
    recentSearch: Boolean = false;
    samePage: Boolean;
    placeholder;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public app: App,
        public viewctrl: ViewController,
        public globalVariables: GlobalVariables,
        public general: General,
        public appService: AppService
    ) {

    }

    ionViewDidLoad() {
        this.samePage = this.navParams.get('samePage') || false;
        this.placeholder = this.navParams.get('placeholder') || 'Buscar...';

        if (this.placeholder === 'Buscar...') {
            if (this.globalVariables.recentSearchResults.length > 0) {
                this.items = this.globalVariables.recentSearchResults;
                this.recentSearch = true;
            }
        } else {
            if (this.globalVariables.recentNearbySearchResults.length > 0) {
                this.items = this.globalVariables.recentNearbySearchResults;
                this.recentSearch = true;
            }
        }


        setTimeout(() => {
            this.searchbar.setFocus();
        }, 500)
    }

    closeModal() {
        this.viewctrl.dismiss();
    }

    searchResult(ev) {
        if (!this.globalVariables.isConnected) {
            this.general.showNetworkConnectionAlert();
            this.closeModal();
            return;
        }

        this.recentSearch = false;
        let query = ev.target.value;
        if (query !== '' && query !== undefined) {
            query = this.general.removeAccents(query);
            this.appService.autocompleteSearch(query).subscribe((response => {
                this.items = response.json().data;
                this.didSearch = true;
                this.errorMessage = false;
            }), ((error) => {
                this.errorMessage = true;
            }));
        }
    }

    viewPlacesList(query) {
        if (this.placeholder === 'Buscar...') {
            this.globalVariables.recentSearchResults = this.items;
            this.globalVariables.recentSearch = query;
        } else {
            this.globalVariables.recentNearbySearchResults = this.items;
            this.globalVariables.recentNearbySearch = query;
        }


        if (this.samePage) {
            this.viewctrl.dismiss(query);
        } else {
            this.closeModal();
            this.navCtrl.push(TabsPage, {search: query, tabIndex: 2})
        }

    }

    searchOnEnter(keyboardCode, searchQuery) {
        if (keyboardCode === 13) {
            this.viewPlacesList(searchQuery);
        }
    }

}
