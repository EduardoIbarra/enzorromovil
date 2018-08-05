import {Component, ViewChild} from '@angular/core';
import {Tabs, NavParams, NavController, App} from 'ionic-angular';
import {GlobalVariables} from "../../general/global-variables";
import {LoginPage} from "../login/login";

@Component({
    templateUrl: 'tabs.html'
})
export class TabsPage {

    @ViewChild('tabs') tabRef: Tabs;

    tabNearbyInactive: Boolean = true;
    tabIndex = this.navParams.get('tabIndex');
    searchParam = this.navParams.get('search');
    goToPlace = this.navParams.get('goToPlace');

    tab1Root = 'HomePage';
    tab2Root = 'FavoritesPage';
    tab3Root = 'NearbyPage';
    tab4Root = 'SearchPage';
    tab5Root = LoginPage;

    constructor(public navParams: NavParams,
                public navCtrl: NavController,
                public app: App,
                public globalVariables: GlobalVariables) {

        globalVariables.searchParams = this.searchParam;
        globalVariables.goToPlace = this.goToPlace;
    }

    getCurrentPage() {
        this.tabNearbyInactive = this.tabRef.getSelected().index != 2;
        this.globalVariables.nearbyTabActive = this.tabRef.getSelected().index == 2;
    }


    selectHome() {
        this.tabRef.select(0);
        // let nav = this.app.getRootNav();
        // nav.setRoot(TabsPage, {tabIndex: 0})
    }
}
