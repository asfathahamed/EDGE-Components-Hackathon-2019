import { ScrollDirective } from './scroll.directive';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component, DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
import { componentHostSyntheticProperty } from '@angular/core/src/render3';


describe('Directive: HoverFocus', () => {

  let component: ScrollDirective;
  let fixture: ComponentFixture<ScrollDirective>;
  let inputEl: DebugElement;

  beforeEach(() => {
      TestBed.configureTestingModule({
          declarations: [ScrollDirective]
      });
      fixture = TestBed.createComponent(ScrollDirective);
      fixture = TestBed.createComponent(ScrollDirective);
      component = fixture.componentInstance;
      component.appScroll=250;
  });
 

});