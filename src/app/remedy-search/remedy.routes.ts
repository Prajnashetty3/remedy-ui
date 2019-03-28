import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RemedySearchComponent} from './remedy-search.component';
import {RemedyComponent} from './remedy/remedy.component';

const routes: Routes = [
  { path: '', component: RemedySearchComponent},
  { path: 'details', component: RemedyComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RemedyRoutingModule { }
