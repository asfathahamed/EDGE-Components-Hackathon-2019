import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample-page',
  templateUrl: './sample-page.component.html',
  styleUrls: ['./sample-page.component.scss']
})
export class SamplePageComponent implements OnInit {
  public isSwitcherShown = false;

  toggleThemeSwitcher() {
    this.isSwitcherShown = !this.isSwitcherShown;
  }
  constructor() { }

  ngOnInit() {
  }

}