import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.scss']
})
export class MovielistComponent implements OnInit {
 
  movies: any[] = [];
  type!: string;
  constructor(private typePopularMovie: ServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.url.subscribe((urlSegment) => {
      this.type = urlSegment[1].path;
      this.typePopularMovie.populartypeMovies(this.type = "popular").subscribe((data) => {

        this.movies = data.
          results;
        console.log(this.movies);
      })
    })
  }
}
