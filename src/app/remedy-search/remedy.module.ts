import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RemedyRoutingModule } from './remedy.routes';
import { RemedyComponent } from './remedy/remedy.component';
import { RemedySearchComponent } from './remedy-search.component';
import { NgxSmartModalModule } from 'ngx-smart-modal';

@NgModule({
  declarations: [ RemedyComponent, RemedySearchComponent ],
  imports: [
    CommonModule, ReactiveFormsModule, RemedyRoutingModule, NgxSmartModalModule
  ]
})
export class RemedyModule { }
