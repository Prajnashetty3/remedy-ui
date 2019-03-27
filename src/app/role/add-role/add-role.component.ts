import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.css']
})
export class AddRoleComponent implements OnInit {

  submitted = false;
  roleForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.roleForm = this.formBuilder.group({
      'fullname': ['', [Validators.required, Validators.maxLength(40)]],
      'roleid': ['', [Validators.required, Validators.maxLength(40)]]
    });
  }
  onSubmit() {
    this.submitted = true;
    if (this.roleForm.invalid) {
      return;
    }
    alert('User Created' + JSON.stringify(this.roleForm.value));
  }
}
