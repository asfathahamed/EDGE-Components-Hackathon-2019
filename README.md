# Table Component

The table component was cereated using Angular-Material and bootstrap. This table component has sort method for every column to sort the table content alphabetically and numerically. It also has a filter which is used to seach the content of the table.   

## Output Screenshots

![screen](https://user-images.githubusercontent.com/18545272/54066068-cff06a80-424f-11e9-99d3-72bc0c545d9a.jpg)

View the [App Demo](https://angular-material-s3sqjg.stackblitz.io) in Stack Blitz

## Installation

Open the project path in CMD or your code editor's terminal and run the below commands

```
npm install -g @angular/cli
```

```
npm install --save @angular/material @angular/cdk @angular/animations
```
Download & Open the project folder in your code editor.

### Include Bootstrap in index.html 

``` <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script> ```

Include all the default dependency modules used for running a basic angular material application. 

## Run the app

``` ng serve --open ```

Use this command to run the project and and view the output in the browser. Everytime the changes are made and saved in your code editor the changes will be reflected automatically in the browser.

## Component usage

``` table.component.ts ``` will have all the data required to populate the array

1. The component header will have a search box to search the text and numbers in the table. 
2. Each column in the table will have a sort icon made visible if the mouse is hovered over the column header.

## References

[Angular Material](https://material.angular.io/components/categories)







