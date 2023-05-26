import { TestBed } from '@angular/core/testing';

import { SuperDialogService } from './super-dialog.service';

describe('SuperDialogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SuperDialogService = TestBed.get(SuperDialogService);
    expect(service).toBeTruthy();
  });
});
