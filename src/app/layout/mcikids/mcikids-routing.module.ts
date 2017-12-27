import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { McikidsComponent } from './mcikids.component';

const routes: Routes = [
    {
        path: '',
        component: McikidsComponent,
        children: [
          { path: 'mcikids-asistencia', loadChildren: './components/asistencia/asistencia.module#AsistenciaModule' },
          { path: 'mcikids-colacion', loadChildren: './components/colacion/colacion.module#ColacionModule' },
          { path: 'mcikids-curso', loadChildren: './components/curso/curso.module#CursoModule' },
          { path: 'mcikids-fichas', loadChildren: './components/fichas/fichas.module#FichasModule' },
          { path: 'mcikids-registro', loadChildren: './components/registro/registro.module#RegistroModule' },

        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class McikidsRoutingModule {
}
