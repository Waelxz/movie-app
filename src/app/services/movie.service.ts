// src/app/services/movie.service.ts
import { Injectable } from '@angular/core';
import moviesData from '../../assets/movies.json'; // Adjust the path as necessary

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor() {}

  getMovies() {
    return moviesData; // Return the imported JSON data directly
  }
}
