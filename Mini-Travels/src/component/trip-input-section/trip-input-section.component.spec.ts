import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripInputSectionComponent } from './trip-input-section.component';

describe('TripInputSectionComponent', () => {
  let component: TripInputSectionComponent;
  let fixture: ComponentFixture<TripInputSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TripInputSectionComponent]
    });
    fixture = TestBed.createComponent(TripInputSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
