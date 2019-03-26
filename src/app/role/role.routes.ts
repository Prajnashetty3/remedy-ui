import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRoleComponent } from './add-role/add-role.component';

const routes: Routes = [
  { path: 'add', component: AddRoleComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoleRoutingModule { }
