import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewclientPage } from './viewclient.page';

const routes: Routes = [
  {
    path: '',
    component: ViewclientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewclientPageRoutingModule {}
