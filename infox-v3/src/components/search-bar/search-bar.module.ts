import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchBarComponent } from './search-bar';

@NgModule({
  declarations: [
    SearchBarComponent,
  ],
  imports: [
    IonicPageModule.forChild(SearchBarComponent),
  ],
  exports: [
    SearchBarComponent
  ]
})
export class SearchBarComponentModule {}
