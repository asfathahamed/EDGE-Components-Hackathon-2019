import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { DateSpinnerComponent } from './date-spinner/date-spinner.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        DateSpinnerComponent
      ],
    }).compileComponents();
  }));

  it('should create the app for app Component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
    fixture.detectChanges();
  });

  it('should get the selected date from date spinner', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.getSelectedDate({year: 2019, month: '03', day: 11});
   // expect(app.selectedDate).toEqual(2019 + ' / ' + '03' + ' / ' + 11);
    fixture.detectChanges();
  });


 /*  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to date-spinner!');
  }); */
});
