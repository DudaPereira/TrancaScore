import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Player } from "../models/player";
import { environment } from "../../environments/environment";

@Injectable({ providedIn: "root" })
export class PlayersService {
  private apiURL = `${environment.apiUrl}/players`;

  constructor(private http: HttpClient) {}

  list(): Observable<Player[]> {
    return this.http.get<Player[]>(this.apiURL);
  }

  add(nome: string): Observable<Player> {
    return this.http.post<Player>(this.apiURL, { nome });
  }

   remove(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiURL}/${id}`);
  }
}