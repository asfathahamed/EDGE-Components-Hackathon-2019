import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public startingYear = 1990;
  public endingYear = 2025;
  public selectedDate: string;

  public getSelectedDate(date) {
    this.selectedDate = date.year + ' / ' + date.month + ' / ' + date.day;
  }
}
