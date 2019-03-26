import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'user', loadChildren: './user/user.module#UserModule' },
  { path: 'role', loadChildren: './role/role.module#RoleModule' },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
