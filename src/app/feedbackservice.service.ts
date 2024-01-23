import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Feedbackmodel } from './feedbackmodel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedbackserviceService {

  constructor(private _http:HttpClient) { }
  private baseUrl = 'http://localhost:8060/feedback';
  public addFeedBacktoremote(placeId:number,userId:number,feedback:Feedbackmodel):Observable<any>{
    
    const url = `${this.baseUrl}/addFeedback/${placeId}/${userId}`;
    return this._http.post<any>(url, feedback);
  }

  public getFeedBacks(): Observable<Feedbackmodel[]> {
    return this._http.get<Feedbackmodel[]>("http://localhost:8060/feedback/getallfeedback");
  }
}
