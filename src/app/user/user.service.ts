import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  addUser(user) {
    const headers = new HttpHeaders();
    return this.http.post('http://192.168.43.175:8080/user', user, {headers: headers});
  }
  updateUser(user) {
    const headers = new HttpHeaders();
    return this.http.put('http://192.168.43.175:8080/user', user, {headers: headers});
  }
  deleteUser() {
    const headers = new HttpHeaders();
    return this.http.delete('', {headers: headers});
  }
  findUser() {
    const headers = new HttpHeaders();
    return this.http.get('', {headers: headers});
  }
  findAllUser() {
    const headers = new HttpHeaders();
    return this.http.get('', {headers: headers});
  }
}
