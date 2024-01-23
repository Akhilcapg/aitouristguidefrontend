import { Component, Input } from '@angular/core';
import { Placemodel } from '../placemodel';

@Component({
  selector: 'app-displayimage',
  templateUrl: './displayimage.component.html',
  styleUrl: './displayimage.component.css'
})
export class DisplayimageComponent {

  @Input() image: string = ''; // Initialize with a default value or an empty string

  get imageUrl(): string {
    console.log(this.image)
    if (this.image) {
      const parts = this.image.split('/');
      const filename = parts[parts.length - 1];
      return `http://localhost:8070/images/${filename}`;
    } else {
      console.error('Image path is undefined or null');
      return ''; // Or provide a default URL or handle the case appropriately
    }
  }

}
