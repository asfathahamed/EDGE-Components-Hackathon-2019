import {
  Component,
  ViewChild,
  Input,
  ElementRef,
  Renderer2,
  OnInit,
  HostListener,
  AfterContentChecked,
  ViewEncapsulation
} from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-video-media',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class VideoComponent implements OnInit, AfterContentChecked {
  private ShowPlayImage = true;
  public showModal = false;
  dialogRef: MatDialogRef<ModalComponent>;

  @ViewChild('videoPlayer') videoplayer: ElementRef;
  @ViewChild('title') name: ElementRef;
  @ViewChild('scroll') Scroll: ElementRef;
  @ViewChild('image') Image: ElementRef;

  @Input() private title: string;
  @Input() private src: string;
  @Input() private scroll: number;

  constructor(
    private dialog: MatDialog,
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    this.name.nativeElement.innerHTML = this.title;
  }

  ngAfterContentChecked() {
    if (this.videoplayer.nativeElement.paused === true) {
      this.ShowPlayImage = true;
      this.videoplayer.nativeElement.controls = false;
    }
  }

  play() {
    this.videoplayer.nativeElement.play();
    this.videoplayer.nativeElement.controls = true;
    this.ShowPlayImage = false;
    return true;
  }

  pause() {
    this.videoplayer.nativeElement.pause();
    this.ShowPlayImage = true;
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = 'myPanel';
    dialogConfig.width = '60%';
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      src: this.src,
      title: this.title
    };

    const dialogRef = this.dialog.open(ModalComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(value => {
      console.log('closed');
    });
    this.showModal = true;
    return this.showModal;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const windowScroll = window.pageYOffset;

    if (windowScroll > this.scroll) {
      this.renderer.addClass(this.Scroll.nativeElement, 'stuck');
      this.Image.nativeElement.style.width = '20px';
      this.Image.nativeElement.style.height = 'auto';
      this.name.nativeElement.style.fontSize = '1vw';
    } else {
      this.renderer.removeClass(this.Scroll.nativeElement, 'stuck');
      this.name.nativeElement.style.fontSize = '2vw';
      this.Image.nativeElement.style.width = '80px';
      this.Image.nativeElement.style.height = 'auto';
    }
  }
}
