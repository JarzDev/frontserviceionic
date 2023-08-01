import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewequipsPageRoutingModule } from './viewequips-routing.module';

import { ViewequipsPage } from './viewequips.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewequipsPageRoutingModule
  ],
  declarations: [ViewequipsPage]
})
export class ViewequipsPageModule {}
