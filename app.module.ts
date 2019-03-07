import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TableDisplayComponent } from './table-display/table-display.component';
import { SortPipe } from './sort-pipe';

@NgModule({
  declarations: [
    AppComponent,
    TableDisplayComponent,
    SortPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
