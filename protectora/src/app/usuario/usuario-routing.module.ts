import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { LoginComponent } from './login/login.component';
import { UsuarioComponent } from './usuario.component';

const routes: Routes = [
  { path: 'usuario', component: UsuarioComponent, data: { title: 'Usuario actual' } },
  { path: 'usuario/login', component: LoginComponent, data: { title: 'Loguear' } }
];

export const routableComponents = [
  LoginComponent,
  UsuarioComponent
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }


