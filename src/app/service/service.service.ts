import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
 private baseUrl: any = "https://api.themoviedb.org/3/movie/";
 private now_playing:string= 'now_playing';
 private Option : any = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NmQ0YTg5MWZhYTU5N2JmZjRjMGEyOTk5NjlkYWVkNyIsInN1YiI6IjY1NDcyY2JkNmJlYWVhMDEyYzhlOWFmZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vg9PPpNkGZ9WJNJ2ay0ND4FbZNqO8zaCRhogD9w_Ly4'
  })
}
  constructor(private http: HttpClient) { }

  popularMovies(): Observable<any> {
    return this.http.get(`${this.baseUrl}popular?language=en-US&page=1`, this.Option)
  }
  now_playerMovies(): Observable<any> {
    return this.http.get(`${this.baseUrl}${this.now_playing}?language=en-US&page=1`, this.Option)
  }

  populartypeMovies(type: string= 'popular'): Observable<any> {
  return this.http.get(`${this.baseUrl}${type}?language=en-US&page=1`, this.Option)
  }

  moviedetails(id:any): Observable<any> {
    return this.http.get(`${this.baseUrl}${id}?language=en-US&page=1`, this.Option)
    }
  

}
