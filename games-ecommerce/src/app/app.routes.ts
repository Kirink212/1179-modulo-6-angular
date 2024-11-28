import { Routes } from '@angular/router';
import { GameCatalogComponent } from './pages/game-catalog/game-catalog.component';
import { GameFormComponent } from './pages/game-form/game-form.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
    { path: "", redirectTo: "games", pathMatch: "full" },
    { path: "games", component: GameCatalogComponent },
    { path: "form", component: GameFormComponent },
    { path: "**", component: NotFoundComponent },
];
