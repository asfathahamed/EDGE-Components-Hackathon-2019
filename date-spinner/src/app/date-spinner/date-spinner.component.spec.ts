import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Renderer2, Type} from '@angular/core';
import { DateSpinnerComponent } from './date-spinner.component';

describe('DateSpinnerComponent', () => {
  let component: DateSpinnerComponent;
  let fixture: ComponentFixture<DateSpinnerComponent>;
  let renderer: Renderer2;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateSpinnerComponent ],
      providers: [Renderer2]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    renderer = fixture.componentRef.injector.get<Renderer2>(Renderer2 as Type<Renderer2>);
   // and spy on it
   spyOn(renderer, 'addClass').and.callThrough();
   // or replace
   // spyOn(renderer2, 'addClass').and.callFake(..);
   // etc
  });
  it('should call renderer', () => {
    // expect(renderer.addClass).toHaveBeenCalledWith(jasmine.any(Object), 'upAnimation');
});

  it('should create date spinner component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize date spinner component', () => {
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should push into date array that is to be displayed', () => {
    component.pushIntoDateArr('');
    fixture.detectChanges();
  });

  it('should move year backward', () => {
    component.moveYearBackward('year', '');
    fixture.detectChanges();
  });

  it('should move year forward', () => {
    component.moveYearForward('year', '');
    fixture.detectChanges();
  });

 /*  it('should animate the element', () => {
    component.animate('year', '', '');
    fixture.detectChanges();
  }); */

  it('should update day', () => {
    component.updateDay();
    fixture.detectChanges();
  });

/*   it('should show dropdown on text click', () => {
    component.showDropdown('year', '', '');
    fixture.detectChanges();
  });
 */
  it('should update the year', () => {
    component.updateYear(2019);
    fixture.detectChanges();
  });
});
