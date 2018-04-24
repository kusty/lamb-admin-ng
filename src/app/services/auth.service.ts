import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  isLogin() {
    return !!localStorage.getItem('user');
  }
}
