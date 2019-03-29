import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  isLogin;
  constructor() { }

  ngOnInit() {
    document.location.href.indexOf('login') === -1 ? this.isLogin = false : this.isLogin = true;
debugger
  }

}
