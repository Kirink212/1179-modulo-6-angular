import { Component, EventEmitter, inject, Output } from '@angular/core';

import { Game } from '../../models/game';
import { GameCardComponent } from "../../components/game-card/game-card.component";
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-game-catalog',
  standalone: true,
  imports: [GameCardComponent],
  templateUrl: './game-catalog.component.html',
  styleUrl: './game-catalog.component.scss'
})
export class GameCatalogComponent {
  private gameService: GameService;
  // @Output() warnApp: EventEmitter<Game> = new EventEmitter();
  gamesArray: Game[] = [];

  constructor() {
    this.gameService = inject(GameService);

    this.gamesArray = this.gameService.getAllGames();
  }

  // warnParentAboutItemAddition(game: Game) {
  //   console.log(`Qual foi, filhão! Relaxa q vou avisar ao meu pai também que você clicou no ${game.title}.`);
  //   this.warnApp.emit(game);
  // }
}
