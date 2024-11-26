import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

import { Game } from '../../models/game';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-game-card',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatIconModule],
  templateUrl: './game-card.component.html',
  styleUrl: './game-card.component.scss'
})
export class GameCardComponent {
  // @Input({required: true}) game?: Game -> Utilizado quando queremos que a passagem do objeto como propriedade seja obrigatória para o componente pai
  @Input() game?: Game = {
    id: 0,
    title: "Default Game",
    platform: "N/A",
    imageLink: "https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg",
    price: 0,
    description: "Mussum Ipsum, cacilds vidis litro abertis. Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis. Quem num gosta di mé, boa gentis num é.",
    availableInStock: 10
  };
  // @Output() warnGameCatalog: EventEmitter<Game> = new EventEmitter();

  constructor(private cartService: CartService) {
    // this.cartService = new CartService(); -> NÃO VOU FAZER ISSO
  }

  // warnParentAboutItemAddition(game: Game) {
  //   console.log(`Avisa ao meu pai que eu cliquei no jogo ${game.title}`);
  //   this.warnGameCatalog.emit(game);
  // }

  addGameToCart(game: Game) {
    console.log(`Adicionei o jogo ${game.title} ao carrinho!`);
    // chamar o método do service responsável por adicionar um jogo ao carrinho
    this.cartService.addItemToCart(game);
  }
}
