import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimalesRoutingModule } from './animales-routing.module';
import {NuevoComponent} from './nuevo/nuevo.component'


@NgModule({
  imports: [
    CommonModule,
    AnimalesRoutingModule
  ],
  declarations: [NuevoComponent]
})
export class AnimalesModule { }
