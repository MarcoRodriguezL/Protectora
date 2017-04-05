import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthGuard} from './seguridad.service'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports:[AuthGuard]
})
export class SeguridadModule { }
