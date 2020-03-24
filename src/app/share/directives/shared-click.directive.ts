import { Directive, Renderer2, ElementRef, Input, HostListener} from '@angular/core';

@Directive({
  selector: '[appSharedClick]'
})
export class SharedClickDirective {
    @Input('appSharedClick') fontSize: number;
    private clicked: boolean;
    private prevFontSize: number;
    constructor(private element: ElementRef, private render: Renderer2) { this.clicked = false; }

    @HostListener('click')
    onSharedClick() {

      if (!this.clicked) {
        this.prevFontSize =  this.element.nativeElement.style.fontSize;
        this.element.nativeElement.style.fontSize = this.fontSize;
        this.render.setStyle(this.element.nativeElement, 'fontSize', this.fontSize);
        this.clicked = true;
      } else {
        this.render.setStyle(this.element.nativeElement, 'fontSize', this.prevFontSize);
        this.clicked = false;
      }
    }

}
