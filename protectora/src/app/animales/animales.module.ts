import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AnimalesRoutingModule } from './animales-routing.module';
import {NuevoComponent} from './nuevo/nuevo.component'


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AnimalesRoutingModule
  ],
  declarations: [NuevoComponent]
})
export class AnimalesModule { }
