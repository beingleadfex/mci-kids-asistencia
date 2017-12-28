import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsistenciaRoutingModule } from './asistencia-routing.module';
import { AsistenciaComponent } from './asistencia.component';

@NgModule({
  imports: [
    CommonModule,
    AsistenciaRoutingModule
  ],
  declarations: [
    AsistenciaComponent
  ]
})
export class AsistenciaModule { }
