import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../user-model';

@Component({
  selector: 'app-displayalluser',
  templateUrl: './displayalluser.component.html',
  styleUrl: './displayalluser.component.css'
})
export class DisplayalluserComponent {

  users: UserModel[] = [];
  constructor(private _userservice: UserService, private _router: Router, private _http: HttpClient) {
    this.fetchAllUsers();
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
}
