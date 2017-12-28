import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColacionRoutingModule } from './colacion-routing.module';
import { ColacionComponent } from './colacion.component';

@NgModule({
  imports: [
    CommonModule,
    ColacionRoutingModule
  ],
  declarations: [
    ColacionComponent
  ]
})
export class ColacionModule { }
