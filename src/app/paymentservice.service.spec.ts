import { TestBed } from '@angular/core/testing';

import { PaymentserviceService } from './paymentservice.service';

describe('PaymentserviceService', () => {
  let service: PaymentserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaymentserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
