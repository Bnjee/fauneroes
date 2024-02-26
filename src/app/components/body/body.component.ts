import { Component } from '@angular/core';
import { FeaturesComponent } from './features/features.component';
import { MediaComponent } from './media/media.component';
import { JoinComponent } from './join/join.component';
import { FaqComponent } from './faq/faq.component';
import { AboutComponent } from './about/about.component';

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

  constructor() {}
}
