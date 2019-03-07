import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';


import { ThemePickerComponent } from './components/theme-picker/theme-picker.component';
import { SamplePageComponent } from './components/sample-page/sample-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ThemePickerComponent,
    SamplePageComponent
  ],
  imports: [
    BrowserModule, FormsModule, NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
