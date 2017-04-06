import { UsuarioRoutingModule, routableComponents } from './usuario-routing.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UsuarioComponent } from './usuario.component';
import { LoginComponent } from './login/login.component';

import { UsuarioService } from './usuario.service';
import { UsuarioStoreService } from './../shared/usuario-store.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UsuarioRoutingModule
  ],
  declarations: [routableComponents,LoginComponent,UsuarioComponent],
  providers: [UsuarioService,UsuarioStoreService]
})
export class UsuarioModule { }
