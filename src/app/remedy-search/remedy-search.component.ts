import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {RemedyServiceService} from './remedy-service.service';
import { Remedy } from './remedy-models/remedy';

export interface Fields {
  id: number;
  name: string;
}

@Component({
  selector: 'app-remedy-search',
  templateUrl: './remedy-search.component.html',
  styleUrls: ['./remedy-search.component.css']
})
export class RemedySearchComponent implements OnInit {
  allFields: Array<Remedy> = [];
  constructor(private formBuilder: FormBuilder, private remedyService: RemedyServiceService) { }
  searchForm: FormGroup;
  submitted = false;
  fields: Fields[] = [
    {id: 1, name: 'Corp_id'},
    {id: 2, name: 'RFC_id'},
    {id: 3, name: 'Priority'},
    {id: 4, name: 'Domain'},
    {id: 5, name: 'Resolver Group'},
    {id: 6, name: 'Solution Type'}
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
      console.log(data);
    });
  }
}
