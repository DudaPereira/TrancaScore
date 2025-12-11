import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Player } from "../models/player";

@Injectable({ providedIn: "root" })
export class PlayersService {
  private api = "http://localhost:8080/jogadores";

  constructor(private http: HttpClient) {}

  list(): Observable<Player[]> {
    return this.http.get<Player[]>(this.api);
  }

  add(nome: string): Observable<Player> {
    return this.http.post<Player>(this.api, { nome });
  }

   remove(id: string): Observable<void> {
    return this.http.delete<void>(`${this.api}/${id}`);
  }
}