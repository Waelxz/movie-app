import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  standalone: true,
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
  imports: [CommonModule, NavbarComponent],
})
export class MovieDetailComponent implements OnInit {
openLink(arg0: any) {
throw new Error('Method not implemented.');
}
  movie: any;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    const title = this.route.snapshot.paramMap.get('title');
    
    // Get movies directly from the service
    const movies = this.movieService.getMovies();
    
    // Find the specific movie based on the title
    this.movie = movies.find((m: { title: string | null }) => m.title === title);
  }
}
