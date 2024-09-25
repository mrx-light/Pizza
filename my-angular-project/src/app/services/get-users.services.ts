import { inject, Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface postObj {
  id: string;
  title: string;
  views: string;
}
@Injectable({
  providedIn: 'root',
})
export class GetUsersServices {
  http: HttpClient = inject(HttpClient);

  private root = 'http://localhost:3000';

  getPosts() {
    return this.http.get(this.root + '/posts');
  }
  getPostByID(id: number) {
    return this.http.get(this.root + '/posts/' + id);
  }
  createPost(obj: postObj) {
    return this.http.post(this.root + '/posts', obj);
  }

  deletePost(id: number) {
    return this.http.delete(this.root + '/posts/' + id);
  }
  hello() {
    console.log('Hello');
  }
}
