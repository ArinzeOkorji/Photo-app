import { TestBed } from '@angular/core/testing';

import { PhotoAppService } from './photo-app.service';

describe('PhotoAppService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PhotoAppService = TestBed.get(PhotoAppService);
    expect(service).toBeTruthy();
  });
});
