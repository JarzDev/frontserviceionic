import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewservPage } from './viewserv.page';

const routes: Routes = [
  {
    path: '',
    component: ViewservPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewservPageRoutingModule {}
