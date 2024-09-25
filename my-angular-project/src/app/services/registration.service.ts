import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserI } from '../../interfaces/global-interfaces';

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  private http = inject(HttpClient);
  private root = 'http://localhost:3000/users/';

  getUserByEmail() {
    return this.http.get(this.root);
  }

  postUser(obj: UserI) {
    return this.http.post(this.root, obj);
  }

  clearUserInfo(obj: any) {
    let user = { ...obj.value };
    if (user.password === user.confirmPassword) {
      delete user.confirmPassword;
      console.log('User:', user);
      return user;
    }
  }
  constructor() {}
}
