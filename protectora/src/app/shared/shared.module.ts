import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalesService } from "./animales.service"

import { Animal, Sexo, Tipo } from "./Model/model"

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [AnimalesService],
  declarations: []
})
export class SharedModule { }
