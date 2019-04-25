import { TestBed } from '@angular/core/testing';

import { TchatService } from './tchat.service';

describe('TchatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TchatService = TestBed.get(TchatService);
    expect(service).toBeTruthy();
  });
});
