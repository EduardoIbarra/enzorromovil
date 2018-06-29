import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {NearbyPage} from './nearby';
import {OfflineComponentModule} from "../../components/offline/offline.module";

@NgModule({
    declarations: [
        NearbyPage,
    ],
    imports: [
        IonicPageModule.forChild(NearbyPage),
        OfflineComponentModule
    ],
    exports: [
        NearbyPage
    ]
})
export class NearbyPageModule {
}
