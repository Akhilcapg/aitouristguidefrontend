import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { UserModel } from '../user-model';
import {  Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  user = new UserModel();
  users: any[] = [];
  baseUrl = 'http://localhost:8099';
  key: string = 'id';
  constructor(private _userservice: UserService, private _router: Router, private _http: HttpClient) {
    this.fetchAllUsers();
  }
  getAllUsers(): Observable<any[]> {
    return this._http.get<any[]>(`${this.baseUrl}/user/all`);
  }
  fetchAllUsers(): void {
    this._userservice.getUsers().subscribe(
      (data) => {
        this.users = data;
        console.log(this.users)
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }

  async loginUser() {
    let flag = false;

    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].email === this.user.email && this.users[i].password === this.user.password) {
        flag = true;

        sessionStorage.setItem(this.key, this.users[i].id.toString());
        const savedUserAgeString = sessionStorage.getItem(this.key);
        if (savedUserAgeString !== null) {
          const savedUserAge = parseInt(savedUserAgeString, 10);
          console.log(savedUserAge);
        } else {
          console.error(`No data found for key '${'id'}' in sessionStorage.`);
        }

      }

    }
    if (flag) {
      console.log('User Credentials correct !!!!!!');
      this._router.navigate(['/usernavbar']);
    }
    if (!flag) {
      console.log('Admin Credentials are Incorrect !!!!!!');
    }

  }
  gotoRegistration() {
    this._router.navigate(['/register'])
  }
}
