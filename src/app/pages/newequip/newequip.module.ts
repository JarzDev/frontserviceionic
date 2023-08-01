import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewequipPageRoutingModule } from './newequip-routing.module';

import { NewequipPage } from './newequip.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewequipPageRoutingModule,
    FormsModule, ReactiveFormsModule
  ],
  declarations: [NewequipPage]
})
export class NewequipPageModule {}
