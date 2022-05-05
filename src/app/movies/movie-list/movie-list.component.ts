import { Component, OnInit } from '@angular/core';
import { Movies } from './mock-movie-list';
import { Movie } from './movie'

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  movies = Movies;

  selectedMovie?: Movie;

  onSelect(movie: Movie): void {
    this.selectedMovie = movie;
  }
}
