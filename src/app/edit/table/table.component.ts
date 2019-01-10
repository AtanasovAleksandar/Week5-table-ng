import { Component } from '@angular/core';

import { ActivatedRoute, Router } from "@angular/router";
import { UsersService } from '../../../users.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  first_name: String;
  address: String;
  city: String;
  pinCode: String;
  
  userId:any;

  userName: any;
  userAddress: any;
  userCity: any;
  userPinCode: any;
  users = [];
  user = { 'id': '', 'first_name': '', 'address': '', 'city': '', 'pincode': '' }
  newObject: any;
  object: any;
  index;
  search: any;

  constructor(public userService: UsersService) {
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
 

  addUser() {
    this.userName = this.first_name;
    this.userAddress = this.address;
    this.userCity = this.city;
    this.userPinCode = this.pinCode;

    this.user.id = this.userId
    this.user.first_name = this.userName;
    this.user.address = this.userAddress
    this.user.city = this.userCity;
    this.user.pincode = this.userPinCode;

    this.newObject = Object.assign({}, this.user)

    this.userService.addNewCustomer(this.newObject).subscribe ( data => {
      console.log("data");
    })
    
    
    this.first_name = '';
    this.address = '';
    this.city = '';
    this.pinCode = '';
  }
  

  searchUsers() {
    this.userService.searchValue(this.search).subscribe()
  }

  editUser() {

  }

}


