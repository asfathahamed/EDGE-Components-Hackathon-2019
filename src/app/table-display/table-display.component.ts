import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-display',
  templateUrl: './table-display.component.html',
  styleUrls: ['./table-display.component.css']
})
export class TableDisplayComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  sortType = "name";
  sortOrder = "asc";
  data = [{ "name": "Debasish", "age": 25, "organisation": "C", "client": "BroadCom" }, { "name": "Gopala", "age": 27, "organisation": "B", "client": "AMAT" }, { "name": "Asha", "age": 30, "organisation": "A", "client": "CISCO" }, { "name": "Borra", "age": 25, "organisation": "E", "client": "Catepillar" }, { "name": "Adithya", "age": 28, "organisation": "D", "client": "Dell" }];
  sortedData = this.data;

  filterName;
  filterAge;
  filterOrg;
  filterClient;
  filteredData = [];
  sortTable(sortType) {

    this.sortedData = this.data.slice(0);
    this.sortedData.sort(function (a, b) {
      if (sortType == 'age')
        return a[sortType] - b[sortType];
      else {
        var x = a[sortType].toLowerCase();
        var y = b[sortType].toLowerCase();
        return x < y ? -1 : x > y ? 1 : 0;
      }
    });
    console.log(this.sortType);
    console.log(sortType);
  }


  filterTable() {
    this.filteredData = [];
    for (let d = 0; d <this.data.length; d++) {
      if (this.filterName && this.filterOrg && this.filterClient) {
        if (this.data[d].name.toLowerCase().includes(this.filterName.toLowerCase()) && this.data[d].organisation.toLowerCase().includes(this.filterOrg.toLowerCase()) && this.data[d].client.toLowerCase().includes(this.filterClient.toLowerCase())) {
          this.filteredData.push(this.data[d]);          
        }        
      }
      else if (this.filterName && this.filterOrg) {
        if (this.data[d].name.toLowerCase().includes(this.filterName.toLowerCase()) && this.data[d].organisation.toLowerCase().includes(this.filterName.toLowerCase())) {
          this.filteredData.push(this.data[d]);          
        }        
      }
      else if (this.filterName && this.filterClient) {
        if (this.data[d].name.toLowerCase().includes(this.filterName.toLowerCase()) && this.data[d].client.toLowerCase().includes(this.filterClient.toLowerCase())) {
          this.filteredData.push(this.data[d]);          
        }        
      }
      else if (this.filterOrg && this.filterClient) {
        if (this.data[d].organisation.toLowerCase().includes(this.filterName.toLowerCase()) && this.data[d].client.toLowerCase().includes(this.filterClient.toLowerCase())) {
          this.filteredData.push(this.data[d]);          
        }        
      }
      else if (this.filterName) {
        if (this.data[d].name.toLowerCase().includes(this.filterName.toLowerCase())) {
          this.filteredData.push(this.data[d]);          
        }        
      }
      else if (this.filterClient) {
        if (this.data[d].client.toLowerCase().includes(this.filterClient.toLowerCase())) {
          this.filteredData.push(this.data[d]);          
        }        
      }
      else if (this.filterOrg) {
        if (this.data[d].organisation.toLowerCase().includes(this.filterOrg.toLowerCase())) {
          this.filteredData.push(this.data[d]);          
        }        
      }
    }
  }
}
