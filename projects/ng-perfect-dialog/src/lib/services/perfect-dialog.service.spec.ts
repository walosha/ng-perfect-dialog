import { TestBed } from '@angular/core/testing';
import { PerfectDialogService } from './perfect-dialog.service';

describe('SuperDialogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PerfectDialogService = TestBed.get(PerfectDialogService);
    expect(service).toBeTruthy();
  });
});
