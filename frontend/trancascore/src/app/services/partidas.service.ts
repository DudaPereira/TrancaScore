import { Injectable } from "@angular/core";
import { Partida } from "../models/partida";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({ providedIn: "root" })
export class PartidasService {
  private api = "http://localhost:8080/partidas";

  constructor(private http: HttpClient) {}

  list(): Observable<Partida[]> {
    return this.http.get<Partida[]>(this.api);
  }

  add(partida: { time1: string[]; time2: string[]; vencedores: string }){
    return this.http.post(this.api, partida);
  }
}

