import { ResolveFn } from '@angular/router';
import { Commentsshared } from '../service/commentsshared';
import { inject } from '@angular/core';

export const commentsResolver: ResolveFn<any> = () => {

  const comentssharedservice: Commentsshared = inject(Commentsshared);

  return comentssharedservice.getCommentsList();
};
