import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { 
    path: 'inicio',
    loadChildren: () => import('./modules/inicio//inicio.module').then(mod => mod.InicioModule)
  },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
