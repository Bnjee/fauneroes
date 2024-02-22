import { Component, ElementRef, ViewChild } from '@angular/core';
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  @ViewChild('gameTitle', { static: true }) gameTitle: ElementRef<HTMLHeadingElement> | undefined;

  constructor() {
    gsap.registerPlugin(TextPlugin);
  }

  ngOnInit(): void {
    this.initTextAnimation();
  }

  private initTextAnimation() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && this.gameTitle) {
          this.animateText();
        }
      });
    }, { threshold: 0.5 });
    if (this.gameTitle) {
      observer.observe(this.gameTitle.nativeElement);
    }
  }

  private animateText() {
    gsap.to('#game-title', {
      duration: 1,
      text: "The Game",
      ease: "none",
    });
  }

}
