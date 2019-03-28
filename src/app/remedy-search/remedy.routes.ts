import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RemedyComponent} from './remedy.component';

const routes: Routes = [
  { path: '', component: RemedyComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RemedyRoutingModule { }
