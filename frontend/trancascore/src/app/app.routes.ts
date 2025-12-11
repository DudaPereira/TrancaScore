import { Routes } from '@angular/router';
import { NewGameComponent } from './components/new-game/new-game.component';
import { RegisterPlayerComponent } from './components/register-player/register-player.component';
import { RankingComponent } from './components/ranking/ranking.component';
import { HomeComponent } from './components/home/home.component';


export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', component: HomeComponent },
  { path: 'new-game', component: NewGameComponent },
  { path: 'register-player', component: RegisterPlayerComponent },
  { path: 'ranking', component: RankingComponent },
];
