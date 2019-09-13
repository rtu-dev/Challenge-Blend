import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BierRoutingModule } from './bier-routing.module';
import { ListBiersComponent } from './list-biers/list-biers.component';
import { EditBierComponent } from './edit-bier/edit-bier.component';
import { BierRegisterComponent } from './bier-register/bier-register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    BierRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ListBiersComponent, 
    EditBierComponent,     
    BierRegisterComponent
  ],
  providers: [    
  ]
})
export class BierModule { }
