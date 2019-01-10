import { Component } from '@angular/core';
import { UsersService } from 'src/users.service';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  search = ''
  

constructor(public userService: UsersService) {

}




}
