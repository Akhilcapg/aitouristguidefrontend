import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayalluserComponent } from './displayalluser.component';

describe('DisplayalluserComponent', () => {
  let component: DisplayalluserComponent;
  let fixture: ComponentFixture<DisplayalluserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DisplayalluserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisplayalluserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
