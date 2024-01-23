import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { UserModel } from '../user-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  user=new UserModel();
  constructor(private _userservice:UserService,private _router:Router){

  }
  registerUser(){
    this._userservice.RegisterUserfromRemote(this.user).subscribe(
      data => {console.log("response recieved");
    this._router.navigate(["/userlogin"])},
      error=>console.log("Exception recieved")
    )
      }

}
