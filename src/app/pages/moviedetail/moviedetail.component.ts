import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-moviedetail',
  templateUrl: './moviedetail.component.html',
  styleUrls: ['./moviedetail.component.scss']
})
export class MoviedetailComponent implements OnInit {
  currentMovieDetail:any;
  id!:any;
// company: any;
constructor(private service: ServiceService, private route: ActivatedRoute){}
ngOnInit(): void {
this.id= this.route.snapshot.paramMap.get('id') || '';
  this.service.moviedetails(this.id).subscribe((data) => {
    this.currentMovieDetail = data;
    console.log(this.currentMovieDetail);
  });
}
}
