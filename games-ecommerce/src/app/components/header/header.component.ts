import { Component, inject, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDrawer } from '@angular/material/sidenav';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() drawer!: MatDrawer;

  private authService: AuthService;
  private router: Router;
  title: string = "Games Ecommerce";

  constructor() {
    this.authService = inject(AuthService);
    this.router = inject(Router);
  }

  openCart() {
    this.drawer.toggle();
    console.log("Abrindo o carrinho!");
  }

  logout() {
    this.authService.logoutUser();
    this.router.navigate(['login']);
  }

  userIsAuthenticated() {
    return this.authService.isAuthenticated();
  }
}
