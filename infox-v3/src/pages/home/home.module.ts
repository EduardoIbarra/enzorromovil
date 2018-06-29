import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {HomePage} from './home';
import {OfflineComponentModule} from "../../components/offline/offline.module";

@NgModule({
    declarations: [
        HomePage,
    ],
    imports: [
        IonicPageModule.forChild(HomePage),
        OfflineComponentModule
    ],
    exports: [
        HomePage
    ]
})
export class HomeModule {
}