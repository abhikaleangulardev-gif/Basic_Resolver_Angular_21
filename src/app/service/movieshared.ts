import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Movieshared {
  myMoviesApiUrls: string = 'https://fooapi.com/api/movies';

  constructor(private http: HttpClient) { }


  getMovieList() {
    return this.http.get(this.myMoviesApiUrls);
  }
}
