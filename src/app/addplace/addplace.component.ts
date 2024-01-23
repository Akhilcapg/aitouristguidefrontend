import { Component } from '@angular/core';
import { Placemodel } from '../placemodel';
import { NgForm } from '@angular/forms';
import { PlaceService } from '../place.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addplace',
  templateUrl: './addplace.component.html',
  styleUrl: './addplace.component.css'
})
export class AddplaceComponent {
  place = new Placemodel();

  constructor(private _placeservice: PlaceService, private _router: Router) {

  }

  clearForm(form: NgForm): void {
    const confirmation = confirm('Are you sure you want to clear the form?'); // You can customize this confirmation dialog
    if (confirmation) {
      form.resetForm();
      this.place = {
        placeId:0,
        placeName: '',
        images: '',
        address: '',
        area: '',
        distance: 0,
        description: '',
        tags: '',
        isSelected:false
      };
    }
  }
  addPlace() {
    this._placeservice.addPlacetoremote(this.place).subscribe(
      data =>this._router.navigate(['/allplaces']),
      error => this._router.navigate(['/allplaces']),
    )
  }

}
