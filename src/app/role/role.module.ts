import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddRoleComponent } from './add-role/add-role.component';
import { RoleRoutingModule } from './role.routes';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [AddRoleComponent],
  imports: [
    CommonModule, RoleRoutingModule, ReactiveFormsModule
  ]
})
export class RoleModule { }
