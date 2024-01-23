import { Component } from '@angular/core';
import { Adminmodel } from '../adminmodel';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrl: './adminlogin.component.css'
})
export class AdminloginComponent {

  admin = new Adminmodel();
  constructor(private _adminservice: AdminService, private _router: Router) {

  }
  loginAdmin() {
  
    this._adminservice.loginAdminfromRemote(this.admin).subscribe(
      data => {
        console.log("response recieved");
        this._adminservice.isAuthenticated = true;
        this._router.navigate(['/adminnavbar'])
      },
      error => console.log("Exception recieved")
    )
  }

}
