import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-displayimageuser',
  templateUrl: './displayimageuser.component.html',
  styleUrl: './displayimageuser.component.css'
})
export class DisplayimageuserComponent {
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
