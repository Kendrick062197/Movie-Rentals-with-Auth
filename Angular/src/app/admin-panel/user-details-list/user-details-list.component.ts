import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { User } from 'src/app/shared/user.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-details-list',
  templateUrl: './user-details-list.component.html',
  styles: [
  ]
})
export class UserDetailsListComponent implements OnInit {
  userDetails;

  constructor(public service:UserService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }
}
