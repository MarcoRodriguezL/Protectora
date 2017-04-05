import { TestBed, inject } from '@angular/core/testing';

import { AnimalesService } from './animales.service';

describe('AnimalesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnimalesService]
    });
  });

  it('should ...', inject([AnimalesService], (service: AnimalesService) => {
    expect(service).toBeTruthy();
  }));
});
