import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ServiceService} from 'src/app/service/service.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  topRatedMovies: any[] = []; // Initialize as an empty array to prevent errors
  errorMessage: string = ''; // Initialize as an empty string
  imagrUrl : any = 'https://image.tmdb.org/t/p/original';

  constructor(private movieService: ServiceService) { }

  ngOnInit(): void {
    this.getTopRatedMovies();
  }

  getTopRatedMovies() {
    this.movieService.popularMovies().subscribe(
      (      response: { results: any[]; }) => {
        this.topRatedMovies = response.results;
         console.log(this.topRatedMovies)
      },
      (      error: string) => {
        this.errorMessage = 'Failed to fetch top rated movies: ' + error; // Set error message
      }
    );
  }

  // image url function
  getImageUrl(movie: any): string {
    if (movie && movie.backdrop_path) {
      return `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;
    }
    // Return a placeholder image URL or an empty string
    return 'https://via.placeholder.com/300x150?text=No+Image';
  }



  customOptions: OwlOptions = {
    nav:false,
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    autoplayTimeout:2000,
    autoplay:true,
    responsive: {
      0: {
        items: 1
      }
    },
  }
}
