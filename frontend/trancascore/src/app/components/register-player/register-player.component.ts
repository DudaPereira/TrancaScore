import { Component } from "@angular/core";
import { PlayersService } from "../../services/players.service";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";
import { RouterLink } from "@angular/router";
import { Player } from "../../models/player";
import { DialogComponent } from "../dialog/dialog/dialog.component";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: "app-register-player",
  templateUrl: "./register-player.component.html",
  standalone: true,
  imports: [FormsModule, CommonModule, MatIconModule, RouterLink],
})
export class RegisterPlayerComponent {
  nome = "";
  players: Player[] = [];

  constructor(
    private playersService: PlayersService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.loadPlayers();
  }

  loadPlayers() {
    this.playersService.list().subscribe((res) => {
      this.players = res;
    });
  }

  add() {
    if (!this.nome.trim()) return;

    this.playersService.add(this.nome.trim()).subscribe(() => {
      this.nome = "";
      this.loadPlayers();
      this.showDialog("Jogador registrado com sucesso!", "success");
    });
  }

  remove(id: string) {
    this.playersService.remove(id).subscribe(() => {
      this.loadPlayers();
      this.showDialog("Jogador removido com sucesso!", "success");
    });
  }

  private showDialog(message: string, type: "success") {
    this.dialog.open(DialogComponent, {
      width: "350px",
      data: {
        message,
        type,
        title: type === "success" ? "Sucesso" : "",
      },
    });
  }
}
