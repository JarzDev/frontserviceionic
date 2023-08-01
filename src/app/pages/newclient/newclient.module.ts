import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NewclientPageRoutingModule } from './newclient-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewclientPage } from './newclient.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewclientPageRoutingModule,
    FormsModule, ReactiveFormsModule
  ],
  declarations: [NewclientPage]
})
export class NewclientPageModule {}
