import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { McikidsComponent } from './mcikids.component';

const routes: Routes = [
    {
        path: '',
        component: McikidsComponent,
        children: []
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class McikidsRoutingModule {
}
