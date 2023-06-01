import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingTagComponent } from './rating-tag.component';

describe('RatingTagComponent', () => {
  let component: RatingTagComponent;
  let fixture: ComponentFixture<RatingTagComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RatingTagComponent]
    });
    fixture = TestBed.createComponent(RatingTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
