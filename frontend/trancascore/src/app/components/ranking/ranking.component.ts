import { Component } from "@angular/core";
import { PlayersService } from "../../services/players.service";
import { DecimalPipe } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";
import { Player } from "../../models/player";

@Component({
  selector: "app-ranking",
  templateUrl: "./ranking.component.html",
  standalone: true,
  imports: [DecimalPipe, MatIconModule, CommonModule, RouterLink],
})
export class RankingComponent {
  players: Player[] = [];

  constructor(private playersService: PlayersService) {
    this.refresh();
  }

  refresh() {
    this.playersService.list().subscribe((list) => {
      this.players = list.sort((a, b) => {
        const scoreA = a.vitorias - a.derrotas;
        const scoreB = b.vitorias - b.derrotas;
        return scoreB - scoreA;
      });
    });
  }
}
