import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  dataUrl = 'http://localhost:3000/users';
 
  constructor(private http: HttpClient) { }

  getCustomers(): Observable<any> {
    return this.http.get(this.dataUrl)
  }

  addNewCustomer(newUser): Observable<any> {
    return this.http.post(this.dataUrl , newUser)
  }


  searchValue(search) {
    return this.http.get(this.dataUrl + '?q=' + search);
  }
}