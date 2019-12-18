import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

const appRoutes: Routes = [
  { path: 'inicio', component: AppComponent,
      children: [
        {
          path: '',
          loadChildren: './modules/inicio.module#InicioModule'
        }]
  },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
