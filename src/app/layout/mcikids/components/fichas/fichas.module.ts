import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FichasRoutingModule } from './fichas-routing.module';
import { FichasComponent } from './fichas.component';

@NgModule({
  imports: [
    CommonModule,
    FichasRoutingModule
  ],
  declarations: [
    FichasComponent
  ]
})
export class FichasModule { }
