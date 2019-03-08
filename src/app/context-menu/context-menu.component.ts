import { Component, OnInit, DoCheck, Input, Output, EventEmitter, ViewChild, ViewEncapsulation, ElementRef } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';

@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ContextMenuComponent implements OnInit, DoCheck {

  @Input() data;
  @ViewChild(MatMenuTrigger)
  menu: MatMenuTrigger;
  isOpenClick: boolean;
  @Output() optionClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() closed: EventEmitter<any> = new EventEmitter<any>();

  constructor(private elem: ElementRef) {}

  ngOnInit() {
    const self = this;
    self.elem.nativeElement.parentElement.addEventListener('click', function (e) {
      self.menu.closeMenu();
    });
    document.addEventListener('contextmenu', function (e) {
      if (self.isInsideBoundary(e)) {
        self.changePosition(e);
      }
    });
  }

  ngDoCheck() {
  }

  changePosition(e) {
    e.preventDefault();
    this.menu.openMenu();
    const elem = (<HTMLElement>document.getElementsByClassName('context-menu-overlap-class')[0]);
    elem.style.position = 'fixed';
    elem.style.top = e.clientY + 'px';
    elem.style.left = e.clientX + 'px';
  }

  isInsideBoundary(event) {
    const parent = this.elem.nativeElement.parentElement;
    const heightInBound = ((event.clientY >= parent.offsetTop) && (event.clientY < (parent.offsetTop + parent.offsetHeight)));
    const widthInBound = ((event.clientX >= parent.offsetLeft) && (event.clientX <= (parent.offsetLeft + parent.offsetWidth)));
    if (heightInBound && widthInBound) {
      return true;
    } else {
      return false;
    }
  }

  menuClick(event, data) {
    this.optionClick.emit(data);
  }

  closedMenu(event) {
    this.closed.emit(event);
  }

}
