# EDGE-Components-Hackathon-2019
# Date Spinner Component

The Date Spinner Component is useful for selecting date by spinning or by selecting from dropdown.

<p align="center">
  <img width="500" height="400" src="https://github.com/ERS-HCL/EDGE-Components-Hackathon-2019/blob/ERSEDGE022019037/Image/date_spinner_preview_image.PNG">
</p>

### To preview demo of Date Spinner Component, [Click here](https://date-spinner-component.stackblitz.io/)

## Using the complete angular project
Download the Date Spinner Component folder and install the required packages and run the application.

### Installing

For installing node_modules use command `npm install`

### Run server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

#### For better appearance install bootstrap4

### HOW TO USE ?

#### 1. Provide the start year and end year
Provide the start year and end year through input decorator for populating years dropdown

#### 2. Select Date
Click up or down arrows for selecting next or previous year/ month / day  

#### 3. Selecting date through dropdown
Click on the current year or month or day to see the respective dropdown

#### 4. Get the selected date
User can get the selected date from output decorator

### Pass the data to date-spinner component as mentioned below

```html
<app-date-spinner [startYear]="startingYear" [endYear]="endingYear" (selectedDate)="getSelectedDate($event)"></app-date-spinner>
```
#### Input Decorator Description

##### 1. startYear is an input decorator which will pass the start year to date-spinner component

##### 2. endYear is an input decorator which will pass the end year to date-spinner component

#### Example of Input Decorators
```typescript
  public startingYear = 1990;
  public endingYear = 2025;
```

#### Output Decorator Description

##### getSelectedDate($event) is a function which will emit the current selected date

#### Example of Output Decorator
```typescript
  public getSelectedDate(date) {
   console.log(date.year + ' / ' + date.month + ' / ' + date.day);
  }
```

