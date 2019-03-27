import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import {UserDashboardComponent} from './user-dashboard/user-dashboard.component';

const routes: Routes = [
  { path: 'add', component: AddUserComponent},
  { path: '', component: UserDashboardComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
