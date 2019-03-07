import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateSpinnerComponent } from './date-spinner.component';

describe('DateSpinnerComponent', () => {
  let component: DateSpinnerComponent;
  let fixture: ComponentFixture<DateSpinnerComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
