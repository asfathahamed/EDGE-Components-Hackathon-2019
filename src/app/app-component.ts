import {Component, ViewChild } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

export interface UserData {
	empId:number;
	name:string;
	city:string;
	gender:string;
}

const Users:UserData[] = [
	{empId:61101, name:'Sam', city:'New York', gender:'M'},
	{empId:61102, name:'Sunil', city:'Mexico', gender:'M'},
	{empId:61103, name:'Deepak', city:'London', gender:'M'},
	{empId:61104, name:'Paayal', city:'Mumbai', gender:'F'},
	{empId:61105, name:'Chaithali', city:'Bangalore', gender:'F'},
	{empId:61106, name:'Neha', city:'Chennai', gender:'F'},
	{empId:61107, name:'Nisha', city:'Cochin', gender:'F'},
	{empId:61108, name:'Faisal', city:'Delhi', gender:'M'},
	{empId:61109, name:'Joshua', city:'Sydney', gender:'M'},
	{empId:61110, name:'Nick', city:'Los Angels', gender:'M'},
	{empId:61111, name:'Grace', city:'Cochin', gender:'F'},
	{empId:61112, name:'John', city:'Chennai', gender:'M'}
];

/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'app-root',
  styleUrls: ['app-component.css'],
  templateUrl: 'app-component.html',
})

export class TableComponent {

  displayedColumns = ['empId', 'name', 'city', 'gender'];
  dataSource: MatTableDataSource<UserData>;
  
  @ViewChild(MatSort) sort: MatSort;

  constructor() {

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(Users);
  }

  /**
   * Set the sort after the view init since this component will
   * be able to query its view for the initialized sort.
   */

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}