import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginServiceService} from './login-service.service';
import {LoginRoutesModule} from './login-routes.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted = false;
  loginForm: FormGroup;
  nav = false;

  constructor(private formBuilder: FormBuilder, private loginService: LoginServiceService, private routes: LoginRoutesModule) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      'username': ['', [Validators.required, Validators.email, Validators.maxLength(50)]],
      'password': ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]]
    });
  }
  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
  this.loginService.login(this.loginForm.value).subscribe(data => {
    this.nav = true;
    }, error1 => {this.nav = false; });
    }
  }
