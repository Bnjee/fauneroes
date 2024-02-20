import { Directive, HostListener, EventEmitter, Output } from '@angular/core';

@Directive({
  selector: '[appScrollListener]',
  standalone: true
})
export class ScrollListenerDirective {

  @Output() isScrolled: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const offset = window.document.documentElement.scrollTop || window.document.body.scrollTop || 0;
    this.isScrolled.emit(offset > 100);
  }
}

