import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule
  ],
  exports:[
    LayoutRoutingModule,
    LayoutComponent
  ],
  declarations: [LayoutComponent]
})
export class LayoutModule { }
