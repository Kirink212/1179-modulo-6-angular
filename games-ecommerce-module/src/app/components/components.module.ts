import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { GameCartComponent } from './game-cart/game-cart.component';



@NgModule({
  declarations: [
    HeaderComponent,
    GameCartComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class ComponentsModule { }
