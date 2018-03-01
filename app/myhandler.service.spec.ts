import { TestBed, inject } from '@angular/core/testing';

import { MyhandlerService } from './myhandler.service';

describe('MyhandlerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyhandlerService]
    });
  });

  it('should be created', inject([MyhandlerService], (service: MyhandlerService) => {
    expect(service).toBeTruthy();
  }));
});
