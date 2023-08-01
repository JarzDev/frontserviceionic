import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewservPageRoutingModule } from './viewserv-routing.module';

import { ViewservPage } from './viewserv.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewservPageRoutingModule
  ],
  declarations: [ViewservPage]
})
export class ViewservPageModule {}
