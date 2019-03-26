import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dash/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboard.routes';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
