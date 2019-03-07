import {Component, Inject, ViewEncapsulation} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ModalComponent  {

private src: string;
private title: string;
 constructor(
   private dialogRef: MatDialogRef<ModalComponent>, @Inject(MAT_DIALOG_DATA) private data: any) {
       this.src = data.src;
       this.title = data.title;

   }

 onNoClick(): void {
   this.dialogRef.close();
 }


}
