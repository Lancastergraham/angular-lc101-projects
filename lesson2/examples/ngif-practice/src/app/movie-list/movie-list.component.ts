import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies = ['The Manchurian Candidate', 'Oceans 8', 'Hidden Figures', 'The Incredibles', 'The Princess Bride'];
  errorHasOccured: boolean = false;
  errorMessage: string;

  constructor() { }

  ngOnInit() {
  }

  addMovie(newTitle: string) {
    if (newTitle === "") {
      this.errorHasOccured = true;
      this.errorMessage = "You have entered a movie with no name";
      return;
    }
    if(!this.movies.includes(newTitle)){
      this.movies.push(newTitle)
      this.errorHasOccured = false;
    } else {
      this.errorHasOccured = true;
      this.errorMessage = "You have already entered this movie";
    }
  }

}