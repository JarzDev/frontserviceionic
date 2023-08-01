import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrintservPage } from './printserv.page';

const routes: Routes = [
  {
    path: '',
    component: PrintservPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrintservPageRoutingModule {}
