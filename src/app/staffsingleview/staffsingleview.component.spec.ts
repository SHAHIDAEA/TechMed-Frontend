import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffsingleviewComponent } from './staffsingleview.component';

describe('StaffsingleviewComponent', () => {
  let component: StaffsingleviewComponent;
  let fixture: ComponentFixture<StaffsingleviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StaffsingleviewComponent]
    });
    fixture = TestBed.createComponent(StaffsingleviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
