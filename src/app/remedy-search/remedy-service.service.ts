import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RemedyServiceService {

  constructor(private http: HttpClient) {
  }

  searchRemedy(value) {
    const headers = new HttpHeaders();
    return this.http.get('http://192.168.43.175:8080/remedy/' + value.field + '/' + value.searchForm,  {headers: headers});
  }
}
