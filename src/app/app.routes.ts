import { Routes } from '@angular/router';
import { moviesResolver } from './resolver/movies-resolver';
import { usersResolver } from './resolver/users-resolver';
import { commentsResolver } from './resolver/comments-resolver';
import { blogsResolver } from './resolver/blogs-resolver';

export const routes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    {
        path: 'movie',
        loadComponent: () => import('./component/movie/movie').then((c) => c.Movie),
        resolve: {
            movieList: moviesResolver,
        }
    },
    {
        path: 'users',
        loadComponent: () => import('./component/users/users').then((c) => c.Users),
        resolve: {
            usersList: usersResolver,
        }
    },
    {
        path: 'comments',
        loadComponent: () => import('./component/comments/comments').then((c) => c.Comments),
        resolve: {
            commentsList: commentsResolver,
        }
    },
    {
        path: 'blog',
        loadComponent: () => import('./component/blog/blog').then((c) => c.Blog),
        resolve: {
            blogList: blogsResolver,
        }
    },
];
