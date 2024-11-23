import { Component, EventEmitter, Output } from '@angular/core';

import { Game } from '../../models/game';
import { GameCardComponent } from "../../components/game-card/game-card.component";

@Component({
  selector: 'app-game-catalog',
  standalone: true,
  imports: [GameCardComponent],
  templateUrl: './game-catalog.component.html',
  styleUrl: './game-catalog.component.scss'
})
export class GameCatalogComponent {
  @Output() warnApp: EventEmitter<Game> = new EventEmitter();
  gamesArray: Game[] = [
    {
      id: 1,
      title: "Sonic Mania",
      platform: "Switch",
      imageLink: "https://m.media-amazon.com/images/I/81x9StmI4UL.jpg",
      price: 59.90,
      description: `Sonic Mania is an all-new adventure with Sonic, Tails, and Knuckles full of unique bosses,
              rolling 2D landscapes, and fun classic gameplay.`
    },
    {
      id: 2,
      title: "Among Us",
      platform: "PC",
      imageLink: "https://cdn1.epicgames.com/salesEvent/salesEvent/amogusportrait_1200x1600-66ad0e4d363e1c92f9f8aae67a96dd31",
      price: 29.90,
      description: "Um jogo de trabalho em equipe e trairagem online ou em rede local para 4 a 15 jogadores... no espaço!"
    },
    {
      id: 3,
      title: "Batman Arkham City",
      platform: "Xbox 360",
      imageLink: "https://m.media-amazon.com/images/I/91M+kghNZtL.jpg",
      price: 39.90,
      description: "Get Batman: Arkham City and all DLC for one low price with the release of the GOTY Edition!"
    }
  ];

  warnParentAboutItemAddition(game: Game) {
    console.log(`Qual foi, filhão! Relaxa q vou avisar ao meu pai também que você clicou no ${game.title}.`);
    this.warnApp.emit(game);
  }
}
