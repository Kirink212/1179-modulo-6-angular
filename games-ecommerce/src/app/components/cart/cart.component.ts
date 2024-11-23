import { Component, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CartItem } from '../../models/cart-item';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    MatListModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
    CurrencyPipe
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  totalPrice: number = 0;
  @Input("cartArr") cartItemsArray: CartItem[] = [];

  addItem(item: CartItem) {
    item.quantity++;
    this.totalPrice += item.product.price;
  }

  removeItem(item: CartItem) {
    if (item.quantity <= 0) return;
    item.quantity--;
    this.totalPrice -= item.product.price;
    this.totalPrice = Math.max(this.totalPrice, 0);
  }
}
