import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';



const ELEMENT_DATA = [
  {id: 1, name: 'Ankith',country:'India'},
  {id: 2, name: 'Christopher',country:'America' },
  {id: 3, name: 'Hamesworth',country:'Mexico' },
  {id: 4, name: 'Richard',country:'Russia' },
  {id: 5, name: 'Ned',country:'France' },
  {id: 6, name: 'Kiran',country:'India'},
  {id: 7, name: 'Monica',country:'Mexico' },
  {id: 8, name: 'Stark',country:'Italy' },
  {id: 9, name: 'Jon',country:'Russia' },
  {id: 10, name: 'Alex',country:'France' },
];



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'country'];
  dataSource = new MatTableDataSource(ELEMENT_DATA) ;
  @ViewChild(MatSort) sort: MatSort;

  applyFilter(filterValue:string){
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  addColumn(){
    let x = this.displayedColumns.length;
    console.log(x);
  }
  
  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

}
