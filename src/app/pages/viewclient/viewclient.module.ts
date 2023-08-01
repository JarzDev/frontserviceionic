import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewclientPageRoutingModule } from './viewclient-routing.module';

import { ViewclientPage } from './viewclient.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewclientPageRoutingModule,
    
  ],
  declarations: [ViewclientPage]
})
export class ViewclientPageModule {}
