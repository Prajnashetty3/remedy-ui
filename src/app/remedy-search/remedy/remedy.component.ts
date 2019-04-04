import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-remedy',
  templateUrl: './remedy.component.html',
  styleUrls: ['./remedy.component.css']
})
export class RemedyComponent implements OnInit {
  corpId: String;
  ngOnInit() {
  }
  constructor(private route: ActivatedRoute) {
  this.route.queryParams.subscribe(params => {
    this.corpId = params['id'];
  });
}
}
