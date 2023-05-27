import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperDialogComponent } from './perfect-dialog.component';

describe('SuperDialogComponent', () => {
  let component: SuperDialogComponent;
  let fixture: ComponentFixture<SuperDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SuperDialogComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
