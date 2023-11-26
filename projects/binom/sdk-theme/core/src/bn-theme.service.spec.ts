import { TestBed } from '@angular/core/testing';

import { BnThemeService } from './bn-theme.service';

describe('BnThemeService', () => {
  let service: BnThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BnThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
