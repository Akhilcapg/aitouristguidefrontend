import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllplacesuserComponent } from './allplacesuser.component';

describe('AllplacesuserComponent', () => {
  let component: AllplacesuserComponent;
  let fixture: ComponentFixture<AllplacesuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllplacesuserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllplacesuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
