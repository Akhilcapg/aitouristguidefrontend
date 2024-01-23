import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Placemodel } from './placemodel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {
  private baseUrl = '"http://localhost:8070';
  constructor(private _http:HttpClient) { }

  public addPlacetoremote(place:Placemodel):Observable<any>{
    return this._http.post<any>("http://localhost:8070/addplace",place)
  }
  public getPlaces(): Observable<Placemodel[]> {
    return this._http.get<Placemodel[]>("http://localhost:8070/getallplaces");
  }
}
