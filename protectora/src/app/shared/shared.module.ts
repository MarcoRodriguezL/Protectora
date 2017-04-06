import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalesService } from "./animales.service"
import { FormsModule } from '@angular/forms';

import { Http } from '@angular/http';
import { HttpModule } from '@angular/http';
import { HttpService } from './http.service';
import { UsuarioStoreService } from './usuario-store.service'


import { Animal, Sexo, Tipo } from "./Model/model"


@NgModule({
  imports: [
    CommonModule,HttpModule,FormsModule
  ],
  providers: [AnimalesService,
      {
      provide: Http, // remplaza el servicio original de angular
      useClass: HttpService // con nuestra extensión personalizada
    }
    ,
    UsuarioStoreService],
    exports: [// Lo que aquí se exporte se importará en los módulos funcionales
    CommonModule,
    FormsModule
  ],
  declarations: []
})
export class SharedModule { }
