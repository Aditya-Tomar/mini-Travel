import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownBarComponent } from './dropdown-bar.component';

describe('DropdownBarComponent', () => {
  let component: DropdownBarComponent;
  let fixture: ComponentFixture<DropdownBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DropdownBarComponent]
    });
    fixture = TestBed.createComponent(DropdownBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
