import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule,RouterModule,SearchBarComponent, NavbarComponent ]
})



export class HomeComponent implements OnInit {
 
  movies: any[] = []; // Store the full movie list
  filteredMovies: any[] = []; // Store the filtered movie list

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movies = this.movieService.getMovies();
    this.filteredMovies = this.movies; // Initially, both lists are the same
  }

  onSearch(searchTerm: string): void {
    console.log('Search Triggered:', searchTerm); // Debugging line
    if (searchTerm) {
      this.filteredMovies = this.movies.filter(movie =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else {
      this.filteredMovies = this.movies; // Reset to full list if search term is empty
    }
  }
  
}