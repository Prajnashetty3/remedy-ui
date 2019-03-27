import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {


  constructor(private http: HttpClient) {
  }
  login(user) {
    const headers = new HttpHeaders();
    return this.http.post('http://192.168.43.175:8080/user', {headers: headers});
  }
}
