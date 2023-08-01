import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrintservPageRoutingModule } from './printserv-routing.module';

import { PrintservPage } from './printserv.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrintservPageRoutingModule
  ],
  declarations: [PrintservPage]
})
export class PrintservPageModule {}
