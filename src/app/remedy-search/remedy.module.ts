import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {RemedySearchComponent} from './remedy-search.component';
import {RemedyRoutingModule} from './remedy.routes';

@NgModule({
  declarations: [ RemedySearchComponent ],
  imports: [
    CommonModule, ReactiveFormsModule, RemedyRoutingModule
  ]
})
export class RemedyModule { }
