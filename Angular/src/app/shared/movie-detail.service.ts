import { MovieDetail } from './movie-detail.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieDetailService {
  formData:MovieDetail;
  readonly BaseURI = 'http://localhost:54277/api';
  list: MovieDetail[];

  constructor(private http:HttpClient) { }

  PostMovieDetails(){
    return this.http.post(this.BaseURI+'/MovieRentals', this.formData);
  }

  PutMovieDetails(){
    return this.http.put(this.BaseURI+'/MovieRentals/'+ this.formData.movieID, this.formData);
  }

  deleteMovieDetails(id){
    return this.http.delete(this.BaseURI+'/MovieRentals/'+ id);
  }

  refreshList(){
    return this.http.get(this.BaseURI +'/MovieRentals')
    .toPromise()
    .then(res => this.list = res as MovieDetail[]);
  }
}
