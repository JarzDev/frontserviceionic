import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewservPageRoutingModule } from './newserv-routing.module';

import { NewservPage } from './newserv.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewservPageRoutingModule,
    FormsModule, ReactiveFormsModule
  ],
  declarations: [NewservPage]
})
export class NewservPageModule {}
