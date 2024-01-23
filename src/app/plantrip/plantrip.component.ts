import { Component, OnInit } from '@angular/core';
import { Placemodel } from '../placemodel';
import { Planmodel } from '../planmodel';
import { HttpErrorResponse } from '@angular/common/http';
import { PlaceService } from '../place.service';
import { Router } from '@angular/router';
import { PlantripService } from '../plantrip.service';

@Component({
  selector: 'app-plantrip',
  templateUrl: './plantrip.component.html',
  styleUrl: './plantrip.component.css'
})
export class PlantripComponent {

  public showplaces = false;
  plan: Planmodel = { placeIds: [], startDate: '', endDate: '' };
  useridInt: number = 0;
  dataSource: Placemodel[] = [];
  public flag = false;

  place: Placemodel = new Placemodel;

  public differenceInDays: number = 0;
  constructor(private _placeService: PlaceService, private _router: Router, private _plantripservice: PlantripService) {
    this.getPlaceList();
  }
  handleCheckboxChange(placeId: number): void {
    console.log(placeId)
    if (this.plan.placeIds.includes(placeId)) {
      this.plan.placeIds = this.plan.placeIds.filter(item => item !== (placeId));
    } else {
      this.plan.placeIds.push((placeId));
    }
    if (this.plan.placeIds.length === this.differenceInDays) {
      this.flag = true;
    }
  }
  getPlaceList(): void {
    this._placeService.getPlaces().subscribe(
      {
        next: (res: Placemodel[]) => {
          this.dataSource = res;
        },
        error: (err: HttpErrorResponse) => {
          console.log(err);
        }
      }
    );
  }
  showPlaces() {
    this.showplaces = true;
  }
  calculateDaysDifference() {
    const startDate = new Date(this.plan.startDate);
    const endDate = new Date(this.plan.endDate);
    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
      console.error('Invalid date strings');
      // or any default value
    }
    // Calculate the difference in milliseconds
    const differenceInMillis = endDate.getTime() - startDate.getTime();

    // Convert milliseconds to days
    this.differenceInDays = 1 + Math.floor(differenceInMillis / (1000 * 60 * 60 * 24));

  
    console.log(this.differenceInDays);
    console.log(this.plan.placeIds)



  }
  AddTrip() {
    this.calculateDaysDifference()
    if(this.differenceInDays===null)
    {
      console.log("ccccc")
      this.differenceInDays=parseInt("please select dates")
    }
    if (this.plan.placeIds.length === this.differenceInDays) {
      console.log("correct")
      const useridString = sessionStorage.getItem('id');
      if (useridString !== null) {
        this.useridInt = parseInt(useridString, 10);
        console.log(this.useridInt);
      } else {
        console.error(`No data found for key '${'id'}' in sessionStorage.`);
      }
      this._plantripservice.addPlanTripremote(this.useridInt, this.plan).subscribe(
        data => {
          console.log("response recieved");
          this._router.navigate(["/usertrips"])
        },
        error => console.log("Exception recieved")
      )
    }
    else {
      this.flag = true
    }


  }



}
