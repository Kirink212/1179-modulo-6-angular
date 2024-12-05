import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';



@NgModule({
  declarations: [
    PageOneComponent,
    PageTwoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
