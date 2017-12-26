import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AsistenciaRoutingModule } from './asistencia-routing.module';
import { AsistenciaComponent } from './asistencia.component';
import {
    TimelineComponent,
    NotificationComponent,
    ChatComponent
} from './components';
import { StatModule } from '../../shared';
import { EnlaceService } from './enlace.service';
import { RegistroComponent } from './components/registro/registro.component';
import { CursoComponent } from './components/curso/curso.component';
import { ColacionComponent } from './components/colacion/colacion.component';
import { FichasComponent } from './components/fichas/fichas.component'; 

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        NgbModule.forRoot(),
        AsistenciaRoutingModule,
        StatModule
    ],
    declarations: [
        AsistenciaComponent,
        TimelineComponent,
        NotificationComponent,
        ChatComponent,
        RegistroComponent,
        CursoComponent,
        ColacionComponent,
        FichasComponent
    ],
    providers: [
        EnlaceService,
    ]
})
export class AsistenciaModule {}
