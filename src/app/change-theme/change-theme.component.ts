import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-change-theme',
  templateUrl: './change-theme.component.html',
  styleUrls: ['./change-theme.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ChangeThemeComponent {
  show = false;
  constructor() { }

  showList() {
    this.show = !this.show;
  }

  applyAmber() {
    document.getElementById('header').style.backgroundColor = '#ffbf00';
    document.getElementById('header').style.color = 'black';
    document.getElementById('aside').style.backgroundColor = '#ffbf00';
    document.getElementById('aside').style.color = 'black';
    document.getElementById('comp').style.backgroundImage = 'url("../../assets/Images/yellow.png")';
    document.getElementById('comp').style.backgroundSize = 'cover';
  }

  applyIndigo() {
    document.getElementById('header').style.backgroundColor = '#4b0082';
    document.getElementById('header').style.color = 'white';
    document.getElementById('aside').style.backgroundColor = '#4b0082';
    document.getElementById('aside').style.color = 'white';
    document.getElementById('comp').style.backgroundImage = 'url("../../assets/Images/indigo.jpg")';
    document.getElementById('comp').style.backgroundSize = 'cover';
  }

  applyLight() {
    document.getElementById('header').style.backgroundColor = 'cyan';
    document.getElementById('header').style.color = 'black';
    document.getElementById('aside').style.backgroundColor = 'cyan';
    document.getElementById('aside').style.color = 'black';
    document.getElementById('comp').style.backgroundImage = 'url("../../assets/Images/blue.jpg")';
    document.getElementById('comp').style.backgroundSize = 'cover';
  }

  applyDark() {
    document.getElementById('header').style.backgroundColor = 'black';
    document.getElementById('header').style.color = 'white';
    document.getElementById('aside').style.backgroundColor = 'black';
    document.getElementById('aside').style.color = 'white';
    document.getElementById('comp').style.backgroundImage = 'url("../../assets/Images/dark.jpg")';
    document.getElementById('comp').style.backgroundSize = 'cover';
  }

}