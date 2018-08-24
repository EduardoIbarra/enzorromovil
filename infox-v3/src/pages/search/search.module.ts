import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {SearchPage} from './search';
import {OfflineComponentModule} from "../../components/offline/offline.module";

@NgModule({
    declarations: [
        SearchPage,
    ],
    imports: [
        IonicPageModule.forChild(SearchPage),
        OfflineComponentModule
    ],
    exports: [
        SearchPage
    ]
})
export class SearchPageModule {
}
