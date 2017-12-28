import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'mcikids' },
            { path: 'mcikids', loadChildren: './mcikids/mcikids.module#McikidsModule' },

            { path: 'mcikids-asistencia', loadChildren: './mcikids/components/asistencia/asistencia.module#AsistenciaModule' },
            { path: 'mcikids-colacion', loadChildren: './mcikids/components/colacion/colacion.module#ColacionModule' },
            { path: 'mcikids-curso', loadChildren: './mcikids/components/curso/curso.module#CursoModule' },
            { path: 'mcikids-fichas', loadChildren: './mcikids/components/fichas/fichas.module#FichasModule' },
            { path: 'mcikids-registro', loadChildren: './mcikids/components/registro/registro.module#RegistroModule' },

            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            { path: 'forms', loadChildren: './form/form.module#FormModule' },
            { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
