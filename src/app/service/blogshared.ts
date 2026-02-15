import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Blogshared {
  myBlogApiUrls: string = 'https://dummyjson.com/quotes';
  constructor(private http: HttpClient) { }

  getBlogList() {
    return this.http.get(this.myBlogApiUrls);
  }
}
