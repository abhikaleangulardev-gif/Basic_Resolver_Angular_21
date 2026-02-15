import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Commentsshared {
  myCommentsApiUrls:string = 'https://jsonplaceholder.typicode.com/comments';
  constructor(private http:HttpClient){}

  getCommentsList(){
    return this.http.get(this.myCommentsApiUrls);
  }
}
