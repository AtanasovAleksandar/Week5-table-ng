import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

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
  user:any = { 'id': '', 'first_name': '', 'address': '', 'city': '', 'pincode': '' }
  newObject: any;
  index: any;

  constructor(public userService: UsersService, public router: Router) { 
    this.getLastUserId()
  }

  ngOnInit() {
   
  }


  addUser() {
    this.userName = this.first_name;
    this.userAddress = this.address;
    this.userCity = this.city;
    this.userPinCode = this.pinCode;

    
    this.user.id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    this.user.first_name = this.userName;
    this.user.address = this.userAddress
    this.user.city = this.userCity;
    this.user.pincode = this.userPinCode;

    this.newObject = Object.assign({}, this.user)

    this.userService.addNewCustomer(this.newObject).subscribe ( data => {
      console.log("data");
      this.router.navigate(['Customer'])
    })
    

    this.first_name = '';
    this.address = '';
    this.city = '';
    this.pinCode = '';
  }

  getLastUserId() {
    this.userService.getCustomers().subscribe(
      data => {
        this.index = data.length + 1;
        console.log(this.index)
      }
    )
  }
  

}
