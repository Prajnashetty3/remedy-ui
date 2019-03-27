import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RemedySearchComponent} from './remedy-search.component';

const routes: Routes = [
  { path: '', component: RemedySearchComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RemedyRoutingModule { }
