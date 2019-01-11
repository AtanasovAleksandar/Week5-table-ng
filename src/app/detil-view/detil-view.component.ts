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
        console.log(data[this.userClicked]);
        this.getUserClicked = data[this.userClicked-1];
        console.log(this.getUserClicked)
      })
  }
}
