export interface Partida {
  id: string;
  date: string;
  time1: string[];
  time2: string[];
  vencedores: "time1" | "time2";
}
