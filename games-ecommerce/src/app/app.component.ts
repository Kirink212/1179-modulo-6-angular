import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { GameCardComponent } from './components/game-card/game-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, GameCardComponent],
  templateUrl: './app.component.html',
  // template: '<h1>Minha página bonita</h1>',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'games-ecommerce';
}
