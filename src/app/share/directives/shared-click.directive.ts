import { Directive, Renderer2, ElementRef, Input, HostListener} from '@angular/core';

@Directive({
  selector: '[sharedClick]'
})
export class SharedClickDirective {
    @Input('sharedClick') fontSize: number;
    
    constructor(private element: ElementRef, private render: Renderer2) { }

    @HostListener('click')
    onSharedClick() {
        this.render.setStyle(this.element.nativeElement, 'font-size', this.fontSize);
    }
}
