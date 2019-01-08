import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  apiUrl = 'assets/data/users-data.json';
  currentPage = 1;

  constructor(private http: HttpClient) { }


  getCustomers(): Observable<any> {
    return this.http.get(this.apiUrl)
  }

 
}