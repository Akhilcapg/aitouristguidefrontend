import { TestBed } from '@angular/core/testing';

import { PlantripService } from './plantrip.service';

describe('PlantripService', () => {
  let service: PlantripService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlantripService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
