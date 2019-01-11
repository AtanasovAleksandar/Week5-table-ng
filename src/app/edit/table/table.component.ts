import { Component } from '@angular/core';

import { ActivatedRoute, Router } from "@angular/router";
import { UsersService } from '../../../users.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  userId:any;
  users: any = [];
  object: any;
  index;
  search: any;
  userClicked: any;
  getUser: any;

  constructor(public userService: UsersService,
    public activeRouter: ActivatedRoute,
    public router: Router) {
    this.getUsers() 
  }

  getUsers() {
    this.userService.getCustomers().subscribe(
      data => {
        console.log(data)
        this.users = data
        this.userId = data.length + 1 
      }
    )
  }
//  PEBARUVANJE NIS BAZATA SO RUTER
  // searchUsers() {
  //   this.userService.searchValue(this.search).subscribe(
  //     data => {
  //       console.log(data);
  //       this.users = data;
  //     }
  //   )
  // }

  
}


