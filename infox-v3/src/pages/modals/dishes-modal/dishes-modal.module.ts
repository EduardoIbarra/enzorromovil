import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {DishesModalPage} from './dishes-modal';
import {IonicImageViewerModule} from "ionic-img-viewer";

@NgModule({
    declarations: [
        DishesModalPage,
    ],
    imports: [
        IonicImageViewerModule,
        IonicPageModule.forChild(DishesModalPage),
    ],
    exports: [
        DishesModalPage
    ]
})
export class DishesModalPageModule {
}
