import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadplaceimageComponent } from './uploadplaceimage.component';

describe('UploadplaceimageComponent', () => {
  let component: UploadplaceimageComponent;
  let fixture: ComponentFixture<UploadplaceimageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UploadplaceimageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UploadplaceimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
