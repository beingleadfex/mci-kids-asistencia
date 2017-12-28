import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistroRoutingModule } from './registro-routing.module';
import { RegistroComponent } from './registro.component';

@NgModule({
  imports: [
    CommonModule,
    RegistroRoutingModule
  ],
  declarations: [
    RegistroComponent
  ]
})
export class RegistroModule { }
