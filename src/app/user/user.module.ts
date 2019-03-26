import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUserComponent } from './add-user/add-user.component';
import { UserRoutingModule } from './user.routes';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddUserComponent],
  imports: [
    CommonModule, UserRoutingModule, ReactiveFormsModule
  ]
})
export class UserModule { }
