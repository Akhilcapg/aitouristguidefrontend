import { Component } from '@angular/core';
import { Feedbackmodel } from '../feedbackmodel';
import { FeedbackserviceService } from '../feedbackservice.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-displayfeedback',
  templateUrl: './displayfeedback.component.html',
  styleUrl: './displayfeedback.component.css'
})
export class DisplayfeedbackComponent {
  dataSource:Feedbackmodel[]=[];

  
  constructor(private feedbackService:FeedbackserviceService,private router:Router){
    this.getFeedBackList();
  }

  getFeedBackList(): void {
    this.feedbackService.getFeedBacks().subscribe(
      {
        next: (res: Feedbackmodel[]) => {
          this.dataSource = res;
        },
        error: (err: HttpErrorResponse)=> {
          console.log(err);
        }
      }
    );
  }



}
