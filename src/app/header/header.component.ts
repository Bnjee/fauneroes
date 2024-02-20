import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HoverFocusDirective } from '../shared/directives/hover-focus-directive.directive';
import { ScrollListenerDirective } from '../shared/directives/scroll-listener-directive.directive';
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, HoverFocusDirective, ScrollListenerDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  title = 'Fauneroes';
  scrolled = false;
  hoveredItem: string | null = null;

  constructor() {
    gsap.registerPlugin(TextPlugin);
  }

  ngOnInit(): void {
    this.init();
    setInterval(() => this.blink(), 800);
  }

  onScrolled(isScrolled: boolean) {
    this.scrolled = isScrolled;
  }

  setActiveClass(itemId: string | null): void {
    this.hoveredItem = itemId;
  }

  switchText(el: string, txt: string, delay: number, callback?: () => void): void {
    setTimeout(() => {
      gsap.to(el, {
        duration: 1,
        text: { value: txt },
        onComplete: callback
      });
    }, delay);
  }

  init(): void {
    this.switchText('#title span', 'AN EPIC', 0);
    this.switchText('#title span', 'A FANTASY', 8000);
    this.switchText('#title span', 'A LEGENDARY', 2000);
    this.switchText('#title span', 'A FUN', 4000);
    this.switchText('#title span', 'A HEROIC', 6000, () => {
      setTimeout(() => this.init(), 6000);
    });
  }

  blink(): void {
    let cursor = document.querySelector('#cursor');
    if (cursor) {
      cursor.classList.toggle('blink');
    }
  }
}
