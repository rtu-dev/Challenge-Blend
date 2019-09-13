import { DashboardComponent } from './dashboard/dashboard.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {

    path: '', component: DashboardComponent,
    children: [
      { path: 'Bier', loadChildren: 'src/app/private/bier/bier.module#BierModule'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
