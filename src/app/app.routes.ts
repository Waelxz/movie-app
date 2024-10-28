// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, title: 'Movie List' },
    { path: 'movie/:title', component: MovieDetailComponent, title: 'Movie Detail' }
  ];
  