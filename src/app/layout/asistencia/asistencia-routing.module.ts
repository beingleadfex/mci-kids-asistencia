import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AsistenciaComponent } from './asistencia.component';

const routes: Routes = [
    {
        path: '', component: AsistenciaComponent,
        children: [
            { path: '', redirectTo: 'asistencia' },
            { path: 'menu', loadChildren: './asistencia/asistencia.module#AsistenciaModule' },
            { path: 'registro', loadChildren: './asistencia/asistencia.module#AsistenciaModule' },
            { path: 'asistencia', loadChildren: './asistencia/asistencia.module#AsistenciaModule' },
            { path: 'curso', loadChildren: './asistencia/asistencia.module#AsistenciaModule' },
            { path: 'colacion', loadChildren: './asistencia/asistencia.module#AsistenciaModule' },
            { path: 'fichas', loadChildren: './asistencia/asistencia.module#AsistenciaModule' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AsistenciaRoutingModule {
}
