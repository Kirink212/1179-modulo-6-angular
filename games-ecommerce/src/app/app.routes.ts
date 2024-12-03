import { Routes } from '@angular/router';
import { GameCatalogComponent } from './pages/game-catalog/game-catalog.component';
import { GameFormComponent } from './pages/game-form/game-form.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    { path: "login", component: LoginComponent },
    { path: "games", component: GameCatalogComponent },
    { path: "", redirectTo: "games", pathMatch: "full" },
    { path: "form", component: GameFormComponent, canActivate: [authGuard] },
    { path: "**", component: NotFoundComponent },
];
