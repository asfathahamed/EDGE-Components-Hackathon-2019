import { Component, OnInit } from '@angular/core';

@Component({
  selector: "edge-media-player",
  templateUrl: "./media-player.component.html",
  styleUrls: ["./media-player.component.css"]
})
export class MediaPlayerComponent implements OnInit {
  @Input() videoOgg: string;
  @Input() videoMp4: string;
  @Input() youtubeUrl: string;
  @Input() vimeoUrl: string;
  @Input() modal: boolean;
  @Input() sticky: boolean;
  @Input() stickyPosition: string;

  constructor() {}

  ngOnInit() {
    this.loadVideo();
    if (this.sticky) {
      this.initializeSticky();
    }
  }

  loadVideo() {
    if (this.youtubeUrl) {
      this.loadYoutubeVideo();
    } else if (this.vimeoUrl) {
      this.loadVimeoVideo();
    } else if (this.videoMp4 || this.videoOgg) {
      this.loadNativeVideo();
    } else {
      alert('no video url available');
    }
  }
  loadVimeoVideo(): any {
    throw new Error("Method not implemented.");
  }
  loadNativeVideo(): any {
    throw new Error("Method not implemented.");
  }
  loadYoutubeVideo(): any {
    throw new Error("Method not implemented.");
  }

  initializeSticky(): any {
    throw new Error("Method not implemented.");
  }

  openSticky(options?, callback?) {
    
  }
  closeSticky(callback?) {
    
  }

  openModal(options?, callback?) {

  }
  closeModal(callback?) {

  }
}
