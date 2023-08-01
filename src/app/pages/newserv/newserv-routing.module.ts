import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewservPage } from './newserv.page';

const routes: Routes = [
  {
    path: '',
    component: NewservPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewservPageRoutingModule {}
