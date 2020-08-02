import { Component, OnInit } from '@angular/core';
import { MovieDetailService } from 'src/app/shared/movie-detail.service';
import { MovieDetail } from 'src/app/shared/movie-detail.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-movierentals-list',
  templateUrl: './movierentals-list.component.html',
  styles: [
  ]
})
export class MovierentalsListComponent implements OnInit {

  constructor(public service:MovieDetailService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(md:MovieDetail){
    this.service.formData = Object.assign({}, md);
  }

  onDelete(MovieId){
    if(confirm('Are you sure to Delete this record?'))
    this.service.deleteMovieDetails(MovieId)
    .subscribe(res =>{
      this.service.refreshList();
      this.toastr.warning('Deleted Successfully', 'User Details')
    },
      err =>{
        console.log(err)
      })
  }

}
