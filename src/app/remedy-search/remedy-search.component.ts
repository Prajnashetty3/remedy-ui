import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {RemedyServiceService} from './remedy-service.service';
import { Remedy } from './remedy-models/remedy';
import {Router} from '@angular/router';

export interface Fields {
  id: string;
  name: string;
}

@Component({
  selector: 'app-remedy-search',
  templateUrl: './remedy-search.component.html',
  styleUrls: ['./remedy-search.component.css']
})
export class RemedySearchComponent implements OnInit {
  allFields: Array<Remedy> = [];
  constructor(private formBuilder: FormBuilder, private remedyService: RemedyServiceService, private route: Router) { }
  searchForm: FormGroup;
  submitted = false;
  fields: Fields[] = [
    {id: 'corp', name: 'Corp_id'},
    {id: 'rca', name: 'RFC_id'},
    {id: '', name: 'Priority'},
    {id: '', name: 'Domain'},
    {id: '', name: 'Resolver Group'},
    {id: '', name: 'Solution Type'}
  ];

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      'field': [''],
      'searchby': ['']
    });
  }
  onSubmit() {
    this.submitted = true;
    if (this.searchForm.invalid) {
      return;
    }
    this.remedyService.searchRemedy(this.searchForm.value).subscribe(data => {
      this.allFields = data;
    });
  }
  nav(corpId) {
    this.route.navigate(Array('/detail?id=' + corpId));
  }
}
