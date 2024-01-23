import { Component, Input,OnInit  } from '@angular/core';
import { FeedbackserviceService } from '../feedbackservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Feedbackmodel } from '../feedbackmodel';

@Component({
  selector: 'app-userfeedback',
  templateUrl: './userfeedback.component.html',
  styleUrl: './userfeedback.component.css'
})
export class UserfeedbackComponent {


 feedback=new Feedbackmodel;
 useridInt: number = 0;
  constructor(private _feedbackservice:FeedbackserviceService,private _router:Router,private route: ActivatedRoute){
  }
public placeId=0;
  ngOnInit() {
    // Capture the value of the 'id' parameter from the URL
    this.route.params.subscribe(params => {
      this.placeId = params['id'];
  
      // Now, 'placeId' contains the value of the 'id' parameter
      console.log('Place ID:', this.placeId);
  
      // You can use 'placeId' as needed in your component logic
    });
  }
 addFeedback()
  {

    console.log(this.placeId)
    console.log(this.feedback.placeId)


    const useridString = sessionStorage.getItem('id');
      if (useridString !== null) {
        this.useridInt = parseInt(useridString, 10);
        console.log(this.useridInt);
      } else {
        console.error(`No data found for key '${'id'}' in sessionStorage.`);
      }
    
    this._feedbackservice.addFeedBacktoremote(this.placeId,this.useridInt,this.feedback).subscribe(
      data =>this._router.navigate(['/usertrips']),
      error => this._router.navigate(['/usertrips']),
    )
  

  }


}
