import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {PlacePage} from './place';
import {PipeModule} from "../../pipes/pipe.module";
import {OfflineComponentModule} from "../../components/offline/offline.module";

@NgModule({
    declarations: [
        PlacePage,
    ],
    imports: [
        IonicPageModule.forChild(PlacePage),
        PipeModule,
        OfflineComponentModule
    ],
    exports: [
        PlacePage
    ]
})
export class PlacePageModule {
}
