import { Injectable } from '@angular/core';
import { Game } from '../models/game';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  gamesArray: Game[] = [
    {
      id: 1,
      title: "Sonic Mania",
      platform: "Switch",
      imageLink: "https://m.media-amazon.com/images/I/81x9StmI4UL.jpg",
      price: 59.90,
      description: `Sonic Mania is an all-new adventure with Sonic, Tails, and Knuckles full of unique bosses,
              rolling 2D landscapes, and fun classic gameplay.`,
      availableInStock: 5
    },
    {
      id: 2,
      title: "Among Us",
      platform: "PC",
      imageLink: "https://cdn1.epicgames.com/salesEvent/salesEvent/amogusportrait_1200x1600-66ad0e4d363e1c92f9f8aae67a96dd31",
      price: 29.90,
      description: "Um jogo de trabalho em equipe e trairagem online ou em rede local para 4 a 15 jogadores... no espaço!",
      availableInStock: 3
    },
    {
      id: 3,
      title: "Batman Arkham City",
      platform: "Xbox 360",
      imageLink: "https://m.media-amazon.com/images/I/91M+kghNZtL.jpg",
      price: 39.90,
      description: "Get Batman: Arkham City and all DLC for one low price with the release of the GOTY Edition!",
      availableInStock: 10
    }
  ];

  constructor() { }

  getNextId() {
    return this.gamesArray.length + 1;
  }

  getAllGames() {
    return this.gamesArray;
  }

  createGame(newGame: Game) {
    this.gamesArray.push(newGame);
  }
}
