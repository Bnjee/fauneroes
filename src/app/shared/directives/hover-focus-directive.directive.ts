import { Directive, HostListener, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverFocus]',
  standalone: true
})
export class HoverFocusDirective {
  @Input() appHoverFocus!: string;

  constructor(
    private readonly el: ElementRef, 
    private readonly renderer: Renderer2
    ) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.setActiveClass(true);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setActiveClass(false);
  }

  @HostListener('focus') onFocus() {
    this.setActiveClass(true);
  }

  @HostListener('blur') onBlur() {
    this.setActiveClass(false);
  }

  private setActiveClass(isActive: boolean) {
    if (isActive) {
        if (this.appHoverFocus === 'bi-hover') {
          const icon = this.el.nativeElement.querySelector('i');
          this.renderer.addClass(icon, 'bi-hover');
        } else {
          this.el.nativeElement.classList.add(this.appHoverFocus)
        }
    } else {
      if (this.appHoverFocus === 'bi-hover') {
        const icon = this.el.nativeElement.querySelector('i');
        this.renderer.removeClass(icon, 'bi-hover');
      } else {
        this.el.nativeElement.classList.remove(this.appHoverFocus)
      }
    }
  }
}
