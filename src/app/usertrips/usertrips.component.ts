import { Component } from '@angular/core';
import { Tour, TourDatePlace } from '../tourmodel';
import { Router } from '@angular/router';
import { PlantripService } from '../plantrip.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-usertrips',
  templateUrl: './usertrips.component.html',
  styleUrl: './usertrips.component.css'
})
export class UsertripsComponent {

  tours:Tour[]=[];

  useridInt:number=0;
  displayedColumns: string[] = ['placeId','placeName', 'images','address','area','description','distance','tags','edit','delete'];
  constructor(private plantripservice:PlantripService,private router:Router){
    this.getPlanList();
  }
  isArray(obj: any): boolean {
    return Array.isArray(obj);
  }
  getPlanList(): void {
    const useridString = sessionStorage.getItem('id');
    if (useridString !== null) {
     this.useridInt = parseInt(useridString, 10);
      console.log(this.useridInt);
    } else {
      console.error(`No data found for key '${'id'}' in sessionStorage.`);
    }
    this.plantripservice.getPlans(this.useridInt).subscribe(
      {
        next: (res: Tour[]) => {
          this.tours = res;
          console.log(this.tours)
         
        },
        error: (err: HttpErrorResponse)=> {
          console.log(err);
        }
      }
    );
  }
  giveFeedBack(placeId:number)
  {
    console.log(placeId);
    this.router.navigate(['/userfeedback', placeId]);
  }

}
