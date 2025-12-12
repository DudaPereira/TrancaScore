import { Injectable } from "@angular/core";
import { Partida } from "../models/partida";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable({ providedIn: "root" })
export class PartidasService {
  private apiUrl = `${environment.apiUrl}/partidas`;

  constructor(private http: HttpClient) {}

  list(): Observable<Partida[]> {
    return this.http.get<Partida[]>(this.apiUrl);
  }

  add(partida: { time1: string[]; time2: string[]; vencedores: string }){
    return this.http.post(this.apiUrl, partida);
  }
}

