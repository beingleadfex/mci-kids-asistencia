import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FichasComponent } from './fichas.component';

const routes: Routes = [
    {
        path: '',
        component: FichasComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FichasRoutingModule {}
