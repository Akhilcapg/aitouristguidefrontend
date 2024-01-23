import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Adminmodel } from './adminmodel';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  public isAuthenticated = true;

  constructor(private _http:HttpClient) { }

  public loginAdminfromRemote(admin:Adminmodel):Observable<any>{
    
    return this._http.post<any>("http://localhost:8085/adminlogin",admin)
  }
  logout(): Observable<any> {
    // Perform any cleanup or additional logic here if needed
    this.isAuthenticated = false;
    return of(null);
  }

  // Check if the user is authenticated
  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }
}
