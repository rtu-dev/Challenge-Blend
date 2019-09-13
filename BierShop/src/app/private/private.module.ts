import { AuthGuard } from './../shared/guards/auth-guard';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BierServiceService } from './shared/services/bier-service.service';

@NgModule({
  imports: [
    CommonModule,
    PrivateRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    DashboardComponent,
  ],
  providers: [
    AuthGuard,
    FormsModule,
    ReactiveFormsModule,
    BierServiceService  
  ]
})
export class PrivateModule { }
