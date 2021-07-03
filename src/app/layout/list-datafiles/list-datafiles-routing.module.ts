import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListDatafilesComponent } from './list-datafiles.component';

const routes: Routes = [
    {
        path: '',
        component: ListDatafilesComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ListDatafilesRoutingModule {}
