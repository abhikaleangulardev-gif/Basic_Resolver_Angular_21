import { ResolveFn } from '@angular/router';
import { Movieshared } from '../service/movieshared';
import { inject } from '@angular/core';

export const moviesResolver: ResolveFn<any> = () => {

  const moviesharedservice: Movieshared = inject(Movieshared);

  return moviesharedservice.getMovieList();
};
