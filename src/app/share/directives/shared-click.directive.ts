import { Directive, Renderer2, ElementRef, Input, HostListener} from '@angular/core';

@Directive({
  selector: '[appSharedClick]'
})
export class SharedClickDirective {
    @Input('appSharedClick') fontSize: string;
    private clicked = false;
    private prevFontSize: string;

    constructor(private element: ElementRef, private render: Renderer2) { }

    @HostListener('click')
    onSharedClick() {
      if (!this.clicked) {
        this.prevFontSize =  this.element.nativeElement.style.fontSize;
        this.render.setStyle(this.element.nativeElement, 'font-size', this.fontSize);
        this.clicked = true;
      } else {
        this.render.setStyle(this.element.nativeElement, 'fontSize', this.prevFontSize);
        this.clicked = false;
      }
    }
}
