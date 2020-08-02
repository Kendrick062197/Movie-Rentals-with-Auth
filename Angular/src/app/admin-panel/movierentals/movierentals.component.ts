import { Component, OnInit } from '@angular/core';
import { MovieDetailService } from 'src/app/shared/movie-detail.service';
import { NgForm } from '@angular/forms'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-movierentals',
  templateUrl: './movierentals.component.html',
  styles: []
})
export class MovierentalsComponent implements OnInit {

  constructor(public service:MovieDetailService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?:NgForm){
    if(form != null)
    form.resetForm();
    this.service.formData = {
      movieID:0,
      movieTitle:'',
      movieDescription:'',
      isRented:'',
      rentalDate:'',
      isDeleted:''
    }
  }

  onSubmit(form:NgForm){
    if(this.service.formData.movieID==0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form:NgForm){
    this.service.PostMovieDetails().subscribe(
      res=> {
        this.resetForm(form)
        this.toastr.success('Submitted Successfully', 'Movie List Details')
        this.service.refreshList();
      },
      err=> { console.log(err) }
    )
  }

  updateRecord(form:NgForm){
    this.service.PutMovieDetails().subscribe(
      res=> {
        this.resetForm(form)
        this.toastr.info('Updated Successfully', 'Movie List Details')
        this.service.refreshList();
      },
      err=> {}
    )
  }

}
