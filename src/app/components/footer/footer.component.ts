import { Component } from '@angular/core';
import { HoverFocusDirective } from '../../directives/hover-focus-directive.directive';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    HoverFocusDirective,
    NgOptimizedImage],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
