import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Usersshared {
  myUserApiUrls:string = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http:HttpClient){}

  getUsersList(){
    return this.http.get(this.myUserApiUrls);
  }
}
