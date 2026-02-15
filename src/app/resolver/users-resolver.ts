import { ResolveFn } from '@angular/router';
import { Usersshared } from '../service/usersshared';
import { inject } from '@angular/core';

export const usersResolver: ResolveFn<any> = () => {

  const userssharedservice: Usersshared = inject(Usersshared);

  return userssharedservice.getUsersList();
};
