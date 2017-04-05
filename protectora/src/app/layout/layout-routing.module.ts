import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from './../seguridad/seguridad.service'

const routes: Routes = [
  { path: '', loadChildren: './../home/home.module#HomeModule' },
  { path: 'animales', loadChildren: './../animales/animales.module#AnimalesModule', canActivate: [AuthGuard],
 },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[AuthGuard]
})
export class LayoutRoutingModule { }
