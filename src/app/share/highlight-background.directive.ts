import { Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlightBackground]'
})
export class HighlightBackgroundDirective {
  highlightOn = false;
  constructor() { }

  @HostBinding('class.highlight')
  public get highlight(): boolean {
    return this.highlightOn;
  }

  @HostListener('mouseover', ['$event.target'])
  mouseOverEventHandler() {
    this.highlightOn = true;
  }
  @HostListener('mouseleave', ['$event.target'])
  mouseLeaveEventHandler() {
    this.highlightOn = false;
  }

}
