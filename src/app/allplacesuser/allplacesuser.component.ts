import { Component } from '@angular/core';
import { Placemodel } from '../placemodel';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { PlaceService } from '../place.service';

@Component({
  selector: 'app-allplacesuser',
  templateUrl: './allplacesuser.component.html',
  styleUrl: './allplacesuser.component.css'
})
export class AllplacesuserComponent {

  dataSource:Placemodel[]=[];

  displayedColumns: string[] = ['placeId','placeName', 'images','address','area','description','distance','tags','edit','delete'];
  constructor(private placeService:PlaceService,private router:Router){
    this.getPlaceList();
  }

  getPlaceList(): void {
    this.placeService.getPlaces().subscribe(
      {
        next: (res: Placemodel[]) => {
          this.dataSource = res;
        },
        error: (err: HttpErrorResponse)=> {
          console.log(err);
        }
      }
    );
  }

}
