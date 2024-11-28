import { Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { CartItem } from '../models/cart-item';
import { Game } from '../models/game';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItemsArray: CartItem[] = [];
  private totalPrice: WritableSignal<number> = signal<number>(0);
  getTotalPrice: Signal<number>;

  constructor() {
    this.getTotalPrice = this.totalPrice.asReadonly();

    // Puxar os dados do array de items (carrinho)
    this.cartItemsArray = JSON.parse(localStorage.getItem("cartItemsArray") || "[]");

    // Garantir que a chave "cartItemsArray" exista no meu localStorage
    if (this.cartItemsArray.length == 0) localStorage.setItem("cartItemsArray", "[]");

    // Com base nos dados já registrados no localStorage, calcular o preço total
    this.totalPrice.update(() => this.calculateTotalPrice());
  }

  calculateTotalPrice() {
    return this.cartItemsArray.reduce((prevValue, currValue) => {
      return prevValue + currValue.product.price * currValue.quantity;
    }, 0);
  }

  getItemById(id: number) {
    const foundIndex: number = this.cartItemsArray.findIndex((item) => {
      return item.product.id === id;
    });

    return foundIndex;
  }

  // Obtem os items do carrinho
  // getTotalPrice() {
  //   return this.totalPriceValue;
  // }

  // Obtem os items do carrinho
  getCartArray() {
    return this.cartItemsArray;
  }

  // Aumenta a quantidade de um item no carrinho
  addItem(item: CartItem) {
    if (item.quantity >= item.product.availableInStock) {
      console.log("Foi adicionado o máximo disponível em estoque!");
      return;
    }

    item.quantity++;
    this.totalPrice.update((previousValue: number) => {
      return previousValue + item.product.price;
    });
    // this.totalPrice += item.product.price; -> Equivalente ao que é feito nas linhas anteriores

    localStorage.setItem("cartItemsArray", JSON.stringify(this.cartItemsArray));
  }

  removeItem(item: CartItem) {
    if (item.quantity <= 1) {
      const index = this.getItemById(item.product.id);
      this.cartItemsArray.splice(index, 1);
    }

    item.quantity--;
    this.totalPrice.update((previousValue: number) => {
      const currValue = previousValue - item.product.price;
      return Math.max(currValue, 0);
    });

    // this.totalPrice -= item.product.price;
    // this.totalPrice = Math.max(this.totalPrice, 0);
    localStorage.setItem("cartItemsArray", JSON.stringify(this.cartItemsArray));
  }

  // Adiciona um item ao carrinho ou atualizar a quantidade desse item no carrinho
  addItemToCart(game: Game) {
    const index = this.getItemById(game.id);

    if (index == -1) {
      this.cartItemsArray.push({
        product: game,
        quantity: 1
      });

      // Estou atualizando o total price quando ele é adicionado ao carrinho
      this.totalPrice.update((previousValue: number) => {
        return previousValue + game.price;
      });

      localStorage.setItem("cartItemsArray", JSON.stringify(this.cartItemsArray));
    } else {
      this.addItem(this.cartItemsArray[index]);
    }
  }
}
