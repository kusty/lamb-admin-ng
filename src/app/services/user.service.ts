import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
@Injectable()
export class UserService {

  constructor(private http: Http) { }
  userLogin(params): Observable<any> {
    return this.http.post('admin/login', params);
  }

  storageUserInfo(user) {
    localStorage.setItem('user', user);
  }

  clearUserInfo() {
    localStorage.removeItem('user');
  }

  getToken() {
    return localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).token : '';
  }
}
