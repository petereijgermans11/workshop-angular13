// Credits: https://angular.io/guide/attribute-directives#attribute-directives
import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[myHighlight]',
})
export class HighlightDirective {
  @Input('myHighlight') highlightColor: string;
  private el: HTMLElement;

  constructor(el: ElementRef) {
    this.el = el.nativeElement;
  }

  @HostListener('mouseenter')
  public onMouseEnter(): void {
    this.highlight(this.highlightColor || 'cyan');
  }

  @HostListener('mouseleave')
  public onMouseLeave(): void {
    this.highlight('white');
  }

  // private function.
  private highlight(color: string): void {
    this.el.style.textShadow = '1px 1px 2px ' + color;
  }
}
