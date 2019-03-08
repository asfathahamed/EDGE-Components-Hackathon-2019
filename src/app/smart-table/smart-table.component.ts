import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-smart-table',
  templateUrl: './smart-table.component.html',
  styleUrls: ['./smart-table.component.css']
})
export class SmartTableComponent implements OnInit {

  list: any[] = orderList;
  headers: any[] = headers;
  headerHover: string;
  toggleSort: boolean = false;
  order: 'asc' | 'desc';
  orderByKey: string;
  pagination;
  pagedData: any = [];

  constructor( private cdRef : ChangeDetectorRef) { }

  ngOnInit() {
  }

  displaySortArrow(hKey: string){
    this.headerHover = hKey;
  }

  onSort(cKey){
    this.toggleSort = !this.toggleSort;
    this.order = this.toggleSort ? 'asc' : 'desc';
    this.orderByKey = cKey;
  }

  onItemPerPageChange(event){
    this.pagination = event;
    this.pagedData = this.list.slice(event.dataFrom - 1, event.dataTo);
    this.cdRef.detectChanges();
  }

}

export const headers = [{
  key: 'accessioningId',
  value: 'Accessioning Id'
},{
  key: 'orderId',
  value: 'Order Id'
},{
  key: 'workflowType',
  value: 'Workflow Type'
},{
  key: 'assaytype',
  value: 'Assay type'
},{
  key: 'workflowStatus',
  value: 'Workflow Status'
}];

export const orderList = [{
  "accessioningId": "123456781",
  "orderComments": null,
  "orderId": 10000030,
  "workflowType": "NA Extraction",
  "assaytype": "NIPTDPCR",
  "sampletype":"Plasma",
  "workflowStatus":"Pending",
  "flags":"F1,F2"
  
}, {
  "accessioningId": "123456782",
  "orderComments": null,
  "orderId": 10000031,
  "workflowType": "LP Pre-PCR",
  "assaytype": "NIPTDPCR",
  "sampletype":"Plasma",
  "workflowStatus":"completed",
  "flags":""
},{
  "accessioningId": "123456783",
  "orderComments": null,
  "orderId": 10000032,
  "workflowType": "LP Post PCR",
  "assaytype": "NIPTHTP",
  "sampletype":"Plasma",
  "workflowStatus":"in progress",
  "flags":"F1"
},{
  "accessioningId": "123456784",
  "orderComments": null,
  "orderId": 10000033,
  "workflowType": "Sequencing",
  "assaytype": "NIPTDPCR",
  "sampletype":"Plasma",
  "workflowStatus":"error",
  "flags":"F1"
},{
  "accessioningId": "123456785",
  "orderComments": null,
  "orderId": 10000034,
  "workflowType": "Sequencing Prep",
  "assaytype": "NIPTHTP",
  "sampletype":"Plasma",
  "workflowStatus":"warning",
  "flags":"F1"
},{
  "accessioningId": "123456786",
  "orderComments": null,
  "orderId": 10000035,
  "workflowType": "NA Extraction",
  "assaytype": "NIPTDPCR",
  "sampletype":"Plasma",
  "workflowStatus":"completed",
  "flags":"F1"
},{
  "accessioningId": "123456787",
  "orderComments": null,
  "orderId": 10000036,
  "workflowType": "LP Pre-PCR",
  "assaytype": "NIPTHTP",
  "sampletype":"Plasma",
  "workflowStatus":"IN progress",
  "flags":"F1"
},{
  "accessioningId": "123456787",
  "orderComments": null,
  "orderId": 10000036,
  "workflowType": "LP Post-PCR",
  "assaytype": "NIPTHTP",
  "sampletype":"Plasma",
  "workflowStatus":"IN progress",
  "flags":"F1"
},{
  "accessioningId": "123456787",
  "orderComments": null,
  "orderId": 10000036,
  "workflowType": "Lp Seq-Pep",
  "assaytype": "NIPTHTP",
  "sampletype":"Plasma",
  "workflowStatus":"Completed",
  "flags":"F1"
},{
  "accessioningId": "123456787",
  "orderComments": null,
  "orderId": 10000036,
  "workflowType": "Sequencing",
  "assaytype": "NIPTHTP",
  "sampletype":"Plasma",
  "workflowStatus":"IN progress",
  "flags":"F1"
},{
  "accessioningId": "123456787",
  "orderComments": null,
  "orderId": 10000036,
  "workflowType": "LP Post-PCR",
  "assaytype": "NIPTHTP",
  "sampletype":"Plasma",
  "workflowStatus":"IN progress",
  "flags":"F1"
},
{"accessioningId":"103","comments":"In workflow","orderId":10000162,"workflowType":"NA Extraction","assaytype":"NIPTDPCR","sampletype":"Plasma","workflowStatus":"Failed","flags":"F3"},
{"accessioningId":"101","comments":null,"orderId":10000160,"workflowType":"NA Extraction","assaytype":"NIPTDPCR","sampletype":"Plasma","workflowStatus":"Failed","flags":"F1,F2"},
{"accessioningId":"101","comments":null,"orderId":10000160,"workflowType":"NA Extraction","assaytype":"NIPTDPCR","sampletype":"Plasma","workflowStatus":"Aborted","flags":"F1,F2"},
{"accessioningId":"101","comments":null,"orderId":10000160,"workflowType":"Library Preparation","assaytype":"NIPTDPCR","sampletype":"Plasma","workflowStatus":"Failed","flags":null}
];