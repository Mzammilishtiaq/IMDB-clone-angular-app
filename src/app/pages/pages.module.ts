import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { MoviedetailComponent } from './moviedetail/moviedetail.component';
import { BannerComponent } from '../components/banner/banner.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MovielistComponent } from '../components/movielist/movielist.component';
import { CardComponent } from '../components/card/card.component';

@NgModule({
  declarations: [
    HomeComponent,
    MoviedetailComponent,
    BannerComponent,
    MovielistComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    CarouselModule
  ]
})
export class PagesModule { }
