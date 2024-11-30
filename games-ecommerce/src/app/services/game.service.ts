import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Game } from '../models/game';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  http: HttpClient;
  gamesArray: Game[] = [];

  constructor() {
    this.http = inject(HttpClient);
  }

  getAllGames() {
    return this.http.get<Game[]>("http://localhost:3000/games");
  }

  createGame(newGame: Game) {
    return this.http.post<Game[]>("http://localhost:3000/games", newGame);
  }
}
