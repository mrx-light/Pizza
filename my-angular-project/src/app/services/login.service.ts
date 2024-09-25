import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private http = inject(HttpClient);
  private root = 'http://localhost:3000/users';

  getUserByID(id): Observable<any> {
    return this.http.get(this.root + `/${id}`);
  }

  postUser(obj: any): Observable<any> {
    return this.http.post(this.root, obj);
  }

  updateUser(obj, id) {
    this.http.put(this.root + `/${id}`, obj);
  }
  constructor() {}
}
