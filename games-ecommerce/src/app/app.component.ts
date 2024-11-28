import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';

import { HeaderComponent } from './components/header/header.component';
import { GameCatalogComponent } from "./pages/game-catalog/game-catalog.component";
import { CartComponent } from "./components/cart/cart.component";
import { GameFormComponent } from "./pages/game-form/game-form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, GameCatalogComponent, MatSidenavModule, CartComponent, GameFormComponent],
  templateUrl: './app.component.html',
  // template: '<h1>Minha página bonita</h1>',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'games-ecommerce';
}
