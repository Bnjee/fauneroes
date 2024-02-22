import { Component } from '@angular/core';
import { FeaturesComponent } from './features/features.component';
import { MediaComponent } from './media/media.component';
import { JoinComponent } from './join/join.component';
import { FaqComponent } from './faq/faq.component';
import { AboutComponent } from './about/about.component';
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [
    AboutComponent,
    FeaturesComponent,
    MediaComponent,
    JoinComponent,
    FaqComponent
  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

  constructor() {
    gsap.registerPlugin(TextPlugin, ScrollTrigger);
  }

  ngOnInit(): void {
    this.setParallaxImage();
  }

  /**
   * Permet de faire un effet de parallax sur les images
   */
    private setParallaxImage(): void {
      gsap.fromTo('.background-image', {
        backgroundPosition: () => "50% 0px"
      }, {
        backgroundPosition: () => `50% 200px`,
        ease: "none",
        scrollTrigger: {
          trigger: '.background-image',
          start: () => "top top", 
          end: "bottom top",
          scrub: true,
          invalidateOnRefresh: true
        }
      });
    }

}
