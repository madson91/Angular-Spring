import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path:'', pathMatch:'full' ,redirectTo: 'actions'},
  {
    path: 'actions',
    loadChildren: () => import('./actions/actions.module').then(m => m.ActionsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingRoutes {}
