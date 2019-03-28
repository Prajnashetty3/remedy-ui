import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UserService} from '../user/user.service';

export interface Fileds {
  id: number;
  name: string;
}

@Component({
  selector: 'app-remedy-search',
  templateUrl: './remedy-search.component.html',
  styleUrls: ['./remedy-search.component.css']
})
export class RemedySearchComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private remedyService: remedyService) { }
  searchForm: FormGroup;
  submitted = false;
  field: Fileds[] = [
    {id: 1, name: 'BFSI'},
    {id: 2, name: 'ADM'},
    {id: 3, name: 'Digi'}
  ];

  ngOnInit() {
  }

}
