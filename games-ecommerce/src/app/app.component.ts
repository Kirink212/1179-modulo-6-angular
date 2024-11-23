import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';

import { HeaderComponent } from './components/header/header.component';
import { GameCatalogComponent } from "./pages/game-catalog/game-catalog.component";
import { CartComponent } from "./components/cart/cart.component";
import { CartItem } from './models/cart-item';
import { Game } from './models/game';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, GameCatalogComponent, MatSidenavModule, CartComponent],
  templateUrl: './app.component.html',
  // template: '<h1>Minha página bonita</h1>',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'games-ecommerce';
  cartItemsArray: CartItem[] = [];

  addItemToCart(game: Game) {
    const foundIndex: number = this.cartItemsArray.findIndex((item) => {
      return item.product.id === game.id;
    })

    if (foundIndex == -1) {
      this.cartItemsArray.push({
        product: game,
        quantity: 1
      });
    } else {
      this.cartItemsArray[foundIndex].quantity++;
    }
    
    console.log(this.cartItemsArray);
  }
}
