import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {UserService} from '../user.service';

export interface Department {
  id: number;
  name: string;
}

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})

export class AddUserComponent implements OnInit {

  userForm: FormGroup;
  submitted = false;
  departments: Department[] = [
    {id: 1, name: 'BFSI'},
    {id: 2, name: 'ADM'},
    {id: 3, name: 'Digi'}
    ];

  constructor(private formBuilder: FormBuilder, private userService: UserService) { }
  ngOnInit() {

    this.userForm = this.formBuilder.group({
      'fullname': ['', [Validators.maxLength(100)]],
      'username': ['', [Validators.required, Validators.email, Validators.maxLength(50)]],
      'password': ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]],
      'manager': ['', Validators.required],
      'rolename': ['', Validators.required],
      'department': ['', Validators.required]
    });
  }
  onSubmit() {
    this.submitted = true;
    if (this.userForm.invalid) {
      return;
    }
    this.userService.addUser(this.userForm.value).subscribe(data => {
      console.log(data);
    });
  }
}
