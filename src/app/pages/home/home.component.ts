import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service/service.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  movies: any = [];
  page: any;
  pages:any=[];
  i: any;
  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.service.now_playerMovies().subscribe((data) => {
      this.movies = data.results;
      this.page = data.total_pages;
      console.log(this.page);
      this.forloop()
    });
  }
  forloop(){
    for (let index = 1; index <= this.page; index++) {
      const element = this.page[index];
      this.pages=element;
      console.log(this.pages)
    }
  }
}
