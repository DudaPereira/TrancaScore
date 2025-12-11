import { Component } from "@angular/core";
import { PlayersService } from "../../services/players.service";
import { PartidasService } from "../../services/partidas.service";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";
import { RouterLink } from "@angular/router";
import { MatDialog, MatDialogModule } from "@angular/material/dialog";
import { DialogComponent } from "../dialog/dialog/dialog.component";

@Component({
  selector: "app-new-game",
  templateUrl: "./new-game.component.html",
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    MatIconModule,
    RouterLink,
    MatDialogModule,
  ],
})
export class NewGameComponent {
  players: any[] = [];

  // selected player ids
  p1 = "";
  p2 = "";
  p3 = "";
  p4 = "";

  vitorias: 1 | 2 | null = null;

  constructor(
    private playersService: PlayersService,
    private partidasService: PartidasService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.playersService.list().subscribe({
      next: (players) => {
        this.players = players;
      },
      error: (err) => {
        this.showDialog("Erro ao carregar jogadores", "error");
      },
    });
  }

  save() {
    if (![this.p1, this.p2, this.p3, this.p4].every((x) => x)) {
      return this.showDialog("Selecione todos os jogadores", "warning");
    }

    if (this.vitorias === null) {
      return this.showDialog("Marque o time vencedor", "warning");
    }

    if (new Set([this.p1, this.p2, this.p3, this.p4]).size !== 4) {
      return this.showDialog("Jogadores não podem se repetir", "warning");
    }

    const payload = {
      time1: [this.p1, this.p2],
      time2: [this.p3, this.p4],
      vencedores: this.vitorias === 1 ? "time1" : "time2",
    };

    this.partidasService.add(payload).subscribe({
      next: () => {
        this.showDialog("Partida registrada com sucesso!", "success");
        this.p1 = this.p2 = this.p3 = this.p4 = "";
        this.vitorias = null;
      },
      error: () => this.showDialog("Erro ao registrar partida", "error"),
    });
  }

  private showDialog(
    message: string,
    type: "success" | "error" | "warning" = "warning"
  ) {
    this.dialog.open(DialogComponent, {
      width: "350px",
      data: {
        message,
        type,
        title:
          type === "success"
            ? "Sucesso"
            : type === "error"
            ? "Erro"
            : "Atenção",
      },
    });
  }
}
