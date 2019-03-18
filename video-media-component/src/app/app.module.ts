import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { ModalComponent } from "./modal/modal.component";
import { MaterialModule } from "./material/material.module";
import { VideoComponent } from "./video/video.component";
import { MatDialogModule } from "@angular/material";
import { MediaPlayerComponent } from "./media-player/media-player.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  declarations: [
    AppComponent,
    ModalComponent,
    VideoComponent,
    MediaPlayerComponent
  ],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent]
})
export class AppModule {}
