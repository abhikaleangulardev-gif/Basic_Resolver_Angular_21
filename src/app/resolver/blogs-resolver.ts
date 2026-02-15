import { ResolveFn } from '@angular/router';
import { Blogshared } from '../service/blogshared';
import { inject } from '@angular/core';

export const blogsResolver: ResolveFn<any> = () => {

  const blogsharedservice: Blogshared = inject(Blogshared);

  return blogsharedservice.getBlogList();
};
