import { Component, OnInit, Renderer2, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-date-spinner',
  templateUrl: './date-spinner.component.html',
  styleUrls: ['./date-spinner.component.css']
})
export class DateSpinnerComponent implements OnInit {
  @Input() public startYear: number;
  @Input() public endYear: number;
  @Output() public selectedDate: EventEmitter<any> = new EventEmitter<any>();
  public currentYear = new Date().getFullYear();
  public currentMonth = new Date().getMonth() + 1;
  public currentDate = new Date().getDate();
  public showAll = false;
  public clicked;
  public DateArr: number[] = [];
  public scrollUp: Number = 0;
  public top;
  public left;
  public selectedElement: any;
  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    this.updateDay();
  }
  public moveYearForward(obj: any, element: any) {
    this.showAll = false;
    if (obj === 'year') {
      if (this.currentYear < this.endYear) {
      this.animate('up', element, obj);
      }
    } else if (obj === 'month') {
      if (this.currentMonth < 12) {
        this.animate('up', element, obj);
      }
    } else {
      if (this.currentDate < (new Date(this.currentYear, this.currentMonth, 0).getDate())) {
        this.animate('up', element, obj);
      }
    }
  }
  public animate(type: any, element: any, obj: any) {
    if (type === 'up') {
      this.renderer.addClass(element, 'upAnimation');
      setTimeout(() => {
        this.renderer.removeClass(element, 'upAnimation');
        if (obj === 'year') {
          if (this.currentYear < this.endYear) {
          this.currentYear++;
          }
        } else if (obj === 'month') {
          if (this.currentMonth < 12) {
          this.currentMonth ++;
          }
        } else {
          if (this.currentDate < (new Date(this.currentYear, this.currentMonth, 0).getDate())) {
          this.currentDate++;
          }
        }
        this.updateDay();
      }, 300);
    } else {
      this.renderer.addClass(element, 'downAnimation');
      setTimeout(() => {
        this.renderer.removeClass(element, 'downAnimation');
        if (obj === 'year') {
          if (this.currentYear > this.startYear) {
          this.currentYear--;
          }
        } else if (obj === 'month') {
          if (this.currentMonth > 1) {
          this.currentMonth--;
          }
        } else {
          if (this.currentDate > 1) {
          this.currentDate--;
          }
        }
        this.updateDay();
      }, 300);
    }
  }
  public moveYearBackward(obj: any, element: any) {
    this.showAll = false;
    if (obj === 'year') {
      if (this.currentYear > this.startYear) {
      this.animate('down', element, obj);
      }
    } else if (obj === 'month') {
      if (this.currentMonth > 1) {
        this.animate('down', element, obj);
      }
    } else {
      if (this.currentDate > 1) {
        this.animate('down', element, obj);
      }
    }
  }
  public updateDay() {
    if (this.currentDate > (new Date(this.currentYear, this.currentMonth, 0).getDate())) {
      this.currentDate = new Date(this.currentYear, this.currentMonth, 0).getDate();
    }
    const selectedDateObject = {
      year: this.currentYear,
      month: this.currentMonth,
      day: this.currentDate
    };
    this.selectedDate.emit(selectedDateObject);
  }
  public showDropdown(obj: any, event: any, element: any) {
    if (this.selectedElement !== event.target.id) {
      this.selectedElement = event.target.id;
      this.showAll = true;
    } else {
      this.showAll = !this.showAll;
    }
    this.top = element.getBoundingClientRect().top - 40;
    this.left = element.getBoundingClientRect().left;
    this.clicked = obj;
    this.pushIntoDateArr(obj);
  }
  public pushIntoDateArr(obj) {
    this.DateArr = [];
    if (obj === 'year') {
      const year = this.startYear;
    const yearPrev = this.endYear;
    for (let i = year; i <= yearPrev; i++) {
        this.DateArr.push(i);
    }
    this.scrollUp = this.DateArr.indexOf(this.currentYear) * 40;
    } else if (obj === 'month') {
    for (let i = 1; i <= 12; i++) {
        this.DateArr.push(i);
    }
    this.scrollUp = this.DateArr.indexOf(this.currentMonth) * 40;
    } else {
      const noOfDays = new Date(this.currentYear, this.currentMonth, 0).getDate();
      for (let j = 1; j <= noOfDays; j++) {
        this.DateArr.push(j);
    }
    this.scrollUp = this.DateArr.indexOf(this.currentDate) * 40;
    }
  }
  public updateYear(clickedVal: number) {
    if (this.clicked === 'year') {
      this.currentYear = clickedVal;
    } else if (this.clicked === 'month') {
      this.currentMonth = clickedVal;
    } else {
      this.currentDate = clickedVal;
    }
    this.showAll = false;
    this.updateDay();
  }
}
