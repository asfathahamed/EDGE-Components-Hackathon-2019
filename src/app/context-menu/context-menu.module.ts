
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatMenuModule } from '@angular/material';
import { ContextMenuComponent } from './context-menu.component';

@NgModule({
  declarations: [
    ContextMenuComponent
  ],
  imports: [
    CommonModule,
    MatMenuModule
  ],
  exports: [ContextMenuComponent]
})
export class ContextMenuModule { }
