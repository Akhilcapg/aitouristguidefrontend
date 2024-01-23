import { Component } from '@angular/core';
import { Placemodel } from '../placemodel';
import { PlaceService } from '../place.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-allplaces',
  templateUrl: './allplaces.component.html',
  styleUrl: './allplaces.component.css'
})
export class AllplacesComponent {
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
