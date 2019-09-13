import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListBiersComponent } from './list-biers/list-biers.component';
import { BierRegisterComponent } from './bier-register/bier-register.component';
import { EditBierComponent } from './edit-bier/edit-bier.component';

const routes: Routes = [
  { path: '', component: ListBiersComponent },
  { path: 'CreateBier',  component: BierRegisterComponent },
  { path: 'EditBier/:id',  component: EditBierComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BierRoutingModule { }
