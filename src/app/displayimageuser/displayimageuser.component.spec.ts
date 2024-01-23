import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayimageuserComponent } from './displayimageuser.component';

describe('DisplayimageuserComponent', () => {
  let component: DisplayimageuserComponent;
  let fixture: ComponentFixture<DisplayimageuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DisplayimageuserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisplayimageuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
