import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursoRoutingModule } from './curso-routing.module';
import { CursoComponent } from './curso.component';

@NgModule({
  imports: [
    CommonModule,
    CursoRoutingModule
  ],
  declarations: [
    CursoComponent
  ]
})
export class CursoModule { }
