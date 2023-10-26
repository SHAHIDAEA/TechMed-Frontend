import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientmanagementComponent } from './patientmanagement.component';

describe('PatientmanagementComponent', () => {
  let component: PatientmanagementComponent;
  let fixture: ComponentFixture<PatientmanagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatientmanagementComponent]
    });
    fixture = TestBed.createComponent(PatientmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
