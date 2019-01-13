import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/users.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detil-view',
  templateUrl: './detil-view.component.html',
  styleUrls: ['./detil-view.component.scss']
})
export class DetilViewComponent implements OnInit {
  userClicked: any;
  getUserClicked: any;
  getUsers: any;

  constructor(public userService: UsersService,
    public activeRouter: ActivatedRoute,
    public router: Router) { 

      this.activeRouter.params.subscribe(
        params => {
          console.log(params.user);
          this.userClicked = params.user
        })
        this.getUser()
    }

  ngOnInit() {
  }


  getUser() {
    this.userService.getCustomers().subscribe(
      data => {
        this.getUsers = data;
        console.log(this.getUserClicked)
        for (var i = 1; i < this.getUsers.length; i++) {
          let id = i-1;
           if (this.getUsers[i].id == this.userClicked) {
             this.getUserClicked = this.getUsers[i];
           }
         }
         console.log(this.getUserClicked)
      })
  }
}
