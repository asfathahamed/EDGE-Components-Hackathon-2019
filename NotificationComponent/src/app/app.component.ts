import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedOption;
  selectedOptionByUser;
  enteredText;
  // abc = {
    sucessCount = 0;
    failureCount = 0;
    commonCount = 0;
  // };
  counter () {
    this.selectedOption = document.querySelector('input[name="option"]:checked').value;
    if (this.selectedOption === 'sucess') {
      this.selectedOptionByUser = 'green';
      this.sucessCount++;
    } else if (this.selectedOption === 'failure') {
      this.selectedOptionByUser = 'red';
      this.failureCount++;
    } else {
      this.selectedOptionByUser = 'grey';
      this.commonCount++;
    }
  }
  myFunction() {
    this.counter();
    var x = document.getElementById("notificationBox");
    this.enteredText = document.getElementById('enteredText').value ? document.getElementById('enteredText').value : 'default';
    x.className = "show";
    x.style.backgroundColor = this.selectedOptionByUser;
    x.innerText = this.enteredText;
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
}
