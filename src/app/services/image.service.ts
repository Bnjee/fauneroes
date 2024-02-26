import { Injectable } from '@angular/core';
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor() {
    gsap.registerPlugin(TextPlugin, ScrollTrigger);
  }

  /**
   * Permet de faire un effet de parallax sur les images
   * @param className 
   * @param size 
   */
  setParallaxImage(className: string, size: string): void {
    gsap.fromTo(className, {
      backgroundPosition: () => "50% 0px"
    }, {
      backgroundPosition: () => `50% ${size}`,
      ease: "none",
      scrollTrigger: {
        trigger: className,
        start: () => "top top", 
        end: "bottom top",
        scrub: true,
        invalidateOnRefresh: true
      }
    });
  }
}
