import { Component } from '@angular/core';
import { GameComponent } from './game/game.component';
import { FeaturesComponent } from './features/features.component';
import { MediaComponent } from './media/media.component';
import { JoinComponent } from './join/join.component';
import { FaqComponent } from './faq/faq.component';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [
    GameComponent,
    FeaturesComponent,
    MediaComponent,
    JoinComponent,
    FaqComponent
  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}
