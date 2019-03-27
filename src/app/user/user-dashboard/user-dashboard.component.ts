import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {User} from '../models/user';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  allUsers: Array<User> = [];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.findAllUser().subscribe(data => {
      this.allUsers = data; }, error1 => {});
  }

}
