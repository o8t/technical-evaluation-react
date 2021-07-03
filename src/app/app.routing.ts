import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [

    { path: '',
    redirectTo: 'list-datafiles',
    pathMatch: 'full' },

    { path: 'list-datafiles',
    redirectTo: 'list-datafiles',
    pathMatch: 'full' },

    { path: '', loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule)},
    { path: 'list-datafiles', loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule)},
    { path: '**', redirectTo: 'not-found' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class AppRoutingModule {}
