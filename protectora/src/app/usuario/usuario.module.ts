import { UsuarioRoutingModule, routableComponents } from './usuario-routing.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UsuarioComponent } from './usuario.component';
import { LoginComponent } from './login/login.component';

import { UsuarioService } from './usuario.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UsuarioRoutingModule
  ],
  declarations: [routableComponents],
  providers: [UsuarioService]
})
export class UsuarioModule { }
