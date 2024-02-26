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
   * @param ratio 
   */
  setParallaxImage(className: string, ratio: number): void {
    gsap.fromTo(className, {
      y: 0,
    }, {
      y: 50 * ratio,
      ease: "none",
      scrollTrigger: {
        trigger: className,
        start: "top top",
        end: "bottom top",
        scrub: true,
        invalidateOnRefresh: true
      }
    });
  }
}
