import {Component, OnInit} from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isLogin: Boolean;
  constructor(private location: Location) {
    this.location.path().indexOf('login') === -1 ? this.isLogin = false : this.isLogin = true;
  }
  ngOnInit() {
  }
}
