import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageOneComponent } from './pages/page-one/page-one.component';
import { PageTwoComponent } from './pages/page-two/page-two.component';
import { protectorGuard } from './protector.guard';

const routes: Routes = [
  { path: 'one', component: PageOneComponent },
  { path: 'two', component: PageTwoComponent, canActivate: [protectorGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
