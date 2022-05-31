import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientdetaiilsComponent } from './patient-details.component';

describe('PatientdetaiilsComponent', () => {
  let component: PatientdetaiilsComponent;
  let fixture: ComponentFixture<PatientdetaiilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientdetaiilsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientdetaiilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
