import { Component, NgZone, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  placeText: string;
  location: string;
  selectedType: string;
  toLocation: string;
  btnText: string;
  placeType: string;
  isPopularPlace: boolean;
  constructor(private zone: NgZone) {}

  ngOnInit() {
    this.selectedType = 'location';
    this.isPopularPlace = true;
    this.placeType = 'hospital';
    this.btnText = 'Get Location';
  }

  getLocation() {
    this.placeText = (<HTMLInputElement>document.getElementById('fromLocation')).value;
    this.toLocation = (this.selectedType === 'direction') ? (<HTMLInputElement>document.getElementById('toLocation')).value : '';
  }

  typeChange(changedValue) {
    this.selectedType = changedValue;
    this.btnText = (changedValue === 'direction') ? 'Get Directions' : 'Get Location';
  }
}
