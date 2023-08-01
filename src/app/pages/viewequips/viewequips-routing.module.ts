import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewequipsPage } from './viewequips.page';

const routes: Routes = [
  {
    path: '',
    component: ViewequipsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewequipsPageRoutingModule {}
