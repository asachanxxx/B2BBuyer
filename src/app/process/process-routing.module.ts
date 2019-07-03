
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryviewComponent } from './categoryview/categoryview.component';


const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'category-grid-3-columns-sidebar'
    },
    {
        path: 'categoryview/:id',
        component: CategoryviewComponent,
        data: {
            columns: 3,
            viewMode: 'grid',
            sidebarPosition: 'start'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProcessRoutingModule { }
