import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'intro',
    pathMatch: 'full'
  },
  {
    path: 'intro',
    loadChildren: () => import('./pages/intro/intro.module').then( m => m.IntroPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'viewclient',
    loadChildren: () => import('./pages/viewclient/viewclient.module').then( m => m.ViewclientPageModule, )
  },
  {
    path: 'newclient',
    loadChildren: () => import('./pages/newclient/newclient.module').then( m => m.NewclientPageModule)
  },
  {
    path: 'newcontact/:id',
    loadChildren: () => import('./pages/newcontact/newcontact.module').then( m => m.NewcontactPageModule)
  },
  {
    path: 'viewcontact',
    loadChildren: () => import('./pages/viewcontact/viewcontact.module').then( m => m.ViewcontactPageModule)
  },
  {
    path: 'newequip/:id',
    loadChildren: () => import('./pages/newequip/newequip.module').then( m => m.NewequipPageModule)
  },
  {
    path: 'viewequips',
    loadChildren: () => import('./pages/viewequips/viewequips.module').then( m => m.ViewequipsPageModule)
  },
  {
    path: 'viewserv',
    loadChildren: () => import('./pages/viewserv/viewserv.module').then( m => m.ViewservPageModule)
  },
  {
    path: 'newservs/:id',
    loadChildren: () => import('./pages/newserv/newserv.module').then( m => m.NewservPageModule)
  },
  {
    path: 'printserv/:id',
    loadChildren: () => import('./pages/printserv/printserv.module').then( m => m.PrintservPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
