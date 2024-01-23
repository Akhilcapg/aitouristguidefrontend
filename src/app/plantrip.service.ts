import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Planmodel } from './planmodel';
import { Observable } from 'rxjs';
import { Tour } from './tourmodel';

@Injectable({
  providedIn: 'root'
})
export class PlantripService {

  constructor(private _http:HttpClient) { }
  private baseUrl = 'http://localhost:8080/tourplan';
  public addPlanTripremote(id: number, plan: Planmodel):Observable<any>{
    console.log(id)
    console.log(plan)
    const url = `${this.baseUrl}/addTour/${id}`;
    return this._http.post<any>(url, plan);
  }
  public getPlans(id:number): Observable<Tour[]> {
    const url = `${this.baseUrl}/getTourByUser/${id}`;
    return this._http.get<Tour[]>(url);
  }
}

