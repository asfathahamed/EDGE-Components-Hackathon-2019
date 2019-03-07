import { Directive,Input, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScroll]'
})
export class ScrollDirective {

  @Input() appScroll: number;

  constructor(public renderer: Renderer2,
public el: ElementRef) { }
@HostListener('window:scroll', [])
onWindowScroll() {
 
const windowScroll = window.pageYOffset;

if (windowScroll > this.appScroll) {
this.renderer.addClass(this.el.nativeElement, 'sample');

} else {

this.renderer.removeClass(this.el.nativeElement, 'sample');
}
}

}
