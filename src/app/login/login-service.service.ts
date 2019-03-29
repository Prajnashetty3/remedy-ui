import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {


  constructor(private http: HttpClient) {
  }
  login(value) {
    const headers = new HttpHeaders();
    return this.http.post('http://192.168.43.175:8090/users', value, {headers: headers});
  }
}
