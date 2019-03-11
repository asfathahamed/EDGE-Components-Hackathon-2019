import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {MatDialog} from '@angular/material';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  items: Observable<any[]>;
  constructor(public db: AngularFirestore, public dialog: MatDialog) {
    console.log(db.collection("items").valueChanges());
    this.items = db.collection('items').valueChanges();
  }

  openCommentBox() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.db.collection('items').add(result);
      }
    });
  }

  ngOnInit() {
  }

}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
})

export class DialogContentExampleDialog {
  user:any = {
    "name" : '',
    "comment" : ''
  }
}
