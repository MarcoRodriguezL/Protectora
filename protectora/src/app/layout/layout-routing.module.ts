import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from './../seguridad/seguridad.service'
import { UsuarioModule } from './../usuario/usuario.module'
import { LoginComponent } from './../usuario/login/login.component'

const routes: Routes = [
  { path: '', loadChildren: './../home/home.module#HomeModule' },
  { path: 'animales', loadChildren: './../animales/animales.module#AnimalesModule', canActivate: [AuthGuard],
 },
  { path: 'login', loadChildren: './../usuario/usuario.module#UsuarioModule'},
    { path: 'login/registrarse', loadChildren: './../usuario/usuario.module#UsuarioModule'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[AuthGuard]
})
export class LayoutRoutingModule { }
