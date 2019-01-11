import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { UsersService } from 'src/users.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  userClicked: any;
  getOldUser: any;

  first_name: String;
  address: String;
  city: String;
  pincode: String;
  

  constructor(
    public userService: UsersService,
    public activeRouter: ActivatedRoute,
    public router: Router) { 
    
    this.activeRouter.params.subscribe(
      params => {
        console.log(params.edit);
        this.userClicked = params.edit
      })
      this.getUser()
    }

  ngOnInit() {
    
  }

  getUser() {
    this.userService.getCustomers().subscribe(
      data => {
        console.log(data[this.userClicked]);
        this.getOldUser = data[this.userClicked-1];
        this.writeValuesToInputs()
      })
  }

  writeValuesToInputs() {
    this.first_name = this.getOldUser.first_name;
    this.address = this.getOldUser.address;
    this.city = this.getOldUser.city;
    this.pincode = this.getOldUser.pincode;
  }

  updateUserChanges() {
    let newUserValues:any = { 'id': '', 'first_name': '', 'address': '', 'city': '', 'pincode': '' }

    newUserValues.first_name = this.first_name;
    newUserValues.address = this.address;
    newUserValues.city = this.city;
    newUserValues.pincode = this.pincode;

    this.userService.changeUser(newUserValues, this.userClicked).subscribe(
      newUser => {
        console.log('user changed');
        this.router.navigate(['Customer'])
      }
    )
  }

  deleteUser() {
    if (confirm('Are you sure you want to delete this user from the database?')) {
      this.userService.deleteUser(this.userClicked).subscribe(
        data => {
            console.log('user Deleted')
           console.log(data)
            this.router.navigate(['Customers']);
        }
      )
  } else {
      // Do nothing!
  }
    
  }

}
