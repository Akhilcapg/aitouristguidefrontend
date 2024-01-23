import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Placemodel } from '../placemodel';

@Component({
  selector: 'app-uploadplaceimage',
  templateUrl: './uploadplaceimage.component.html',
  styleUrl: './uploadplaceimage.component.css'
})
export class UploadplaceimageComponent {

  place=new Placemodel()

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) {
    this.place.placeId = this.route.snapshot.params['id'];
  }

  handleImageChange(event: any): void {
    const file = event.target.files[0];
    this.place.images = file;
  }

  handleImageUpload(): void {
    console.log(this.place.placeId)
    if (this.place.images) {
      const formData = new FormData();
      formData.append('image', this.place.images);

      this.http
        .post(`http://localhost:8070/${this.place.placeId}/upload-image`, formData)
        .subscribe(
          () => {
            console.log('Image uploaded successfully.');
            this.router.navigate(['/allplaces']);
          },
          (error) => {
            this.router.navigate(['/allplaces']);
          }
        );
    }
  }

}
