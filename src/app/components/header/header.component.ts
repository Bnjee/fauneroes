import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { HoverFocusDirective } from '../../directives/hover-focus-directive.directive';
import { ScrollListenerDirective } from '../../directives/scroll-listener-directive.directive';
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { NgOptimizedImage } from '@angular/common'
import { ImageService } from '../../services/image.service';

interface Layer {
  className: string;
  ratio: number;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule, 
    HoverFocusDirective, 
    ScrollListenerDirective, 
    NgOptimizedImage],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements AfterViewInit {
  title = 'Fauneroes';
  scrolled = false;
  shouldBlink = false;
  screenWidth = 0;
  private readonly classNames: Layer[] = [
    { className: '.layer-2', ratio: 500 },
    { className: '.layer-3', ratio: 300 },
    { className: '.layer-5', ratio: 150 },
  ];

  constructor(private imageService: ImageService) {
    gsap.registerPlugin(TextPlugin, ScrollTrigger);
    this.getScreenSize();
  }

  ngAfterViewInit(): void {
    //this.initH1Text();

    /** Permet de faire clignoter le underscore */
    //setInterval(() => this.blink(), 800);

    /** Effet de parallax sur les images */
    if (this.screenWidth > 992) {
      this.classNames.forEach((layer: Layer) => {
        this.imageService.setParallaxImage(layer.className, layer.ratio);
      });
      this.imageService.setFixedImage('.layer-1');
    }
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize() {
      this.screenWidth = window.innerWidth;
  }

  /**
   * Permet d'afficher ou non le underscore
   */
  blink(): void {
    this.shouldBlink = !this.shouldBlink;
  }

  /**
   * Permet d'afficher le logo d'une taille différente lors du scroll.
   * Est lié à la directive ScrollListenerDirective
   * @link ScrollListenerDirective
   * @param isScrolled vrai ou faux
   */
  onScrolled(isScrolled: boolean) {
    this.scrolled = isScrolled;
  }

  /**
   * Affiche un mot différent à un interval défini
   */
  private initH1Text(): void {
    this.switchText('#title span', 'EPIC', 0);
    this.switchText('#title span', 'FANTASY', 8000);
    this.switchText('#title span', 'LEGENDARY', 2000);
    this.switchText('#title span', 'FUN', 4000);
    this.switchText('#title span', 'HEROIC', 6000, () => {
      setTimeout(() => this.initH1Text(), 6000);
    });
  }

  /**
   * Permet de changer le texte d'un élément à un interval défini grace à gsap
   * @param el 
   * @param txt 
   * @param delay 
   * @param callback 
   */
  private async switchText(el: string, txt: string, delay: number, callback?: () => void): Promise<void> {
    await new Promise(resolve => setTimeout(resolve, delay));
    await gsap.to(el, {
      duration: 1,
      text: { value: txt },
      onComplete: callback
    });
  }
}
