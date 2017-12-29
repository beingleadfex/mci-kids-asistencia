import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistroRoutingModule } from './registro-routing.module';
import { RegistroComponent } from './registro.component';

import { ReactiveFormsModule } from '@angular/forms';
import { ApformComponent } from './components/apform/apform.component';
import { KidformComponent } from './components/kidform/kidform.component';


@NgModule({
  imports: [
    CommonModule,
    RegistroRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    RegistroComponent,
    ApformComponent,
    KidformComponent,
  
  ]
})
export class RegistroModule { }
