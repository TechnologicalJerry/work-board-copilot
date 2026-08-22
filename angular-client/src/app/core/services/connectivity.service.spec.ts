import { TestBed } from '@angular/core/testing';
import { ConnectivityService } from './connectivity.service';

describe('ConnectivityService', () => {
  let service: ConnectivityService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConnectivityService],
    });
    service = TestBed.inject(ConnectivityService);
  });

  it('should be created and provide isOnline signal', () => {
    expect(service).toBeTruthy();
    expect(typeof service.isOnline()).toBe('boolean');
  });
});
