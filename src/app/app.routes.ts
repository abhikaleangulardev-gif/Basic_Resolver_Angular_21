import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: 'movie', loadComponent: () => import('./component/movie/movie').then((c) => c.Movie) },
    { path: 'users', loadComponent: () => import('./component/users/users').then((c) => c.Users) },
    { path: 'comments', loadComponent: () => import('./component/comments/comments').then((c) => c.Comments) },
    { path: 'blog', loadComponent: () => import('./component/blog/blog').then((c) => c.Blog) },
];
