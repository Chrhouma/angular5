import { NgModule } from '@angular/core';
import { Routes, RouterModule, RouterLink } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {ObjetComponent} from './objet/objet.component';
import {DomotiqueComponent} from './domotique/domotique.component';
import {TemperatureComponent} from './temperature/temperature.component';
import {SonComponent} from './son/son.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
   {
    path: 'objets',
    component: ObjetComponent,
  },
   {
    path: 'domotique',
     component: DomotiqueComponent
   },
    {
    path: 'objets/temperature',
     component: TemperatureComponent
   },
    {
    path: 'objets/son',
     component: SonComponent
   }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
