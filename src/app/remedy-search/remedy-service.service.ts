import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Remedy} from './remedy-models/remedy';

@Injectable({
  providedIn: 'root'
})
export class RemedyServiceService {

  constructor(private http: HttpClient) {
  }

  searchRemedy(value) {
    const headers = new HttpHeaders();
    return this.http.get<Array<Remedy>>('http://192.168.43.175:8080/remedy/' + value.field + '/' + value.searchby,  {headers: headers});
  }
}
