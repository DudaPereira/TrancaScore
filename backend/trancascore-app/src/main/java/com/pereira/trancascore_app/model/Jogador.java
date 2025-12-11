package com.pereira.trancascore_app.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "jogadores")
public class Jogador {
    @Id
    private String id;
    private String nome;
    private int vitorias;
    private int derrotas;

    public Jogador() {}

    public Jogador(String nome){
        this.nome = nome;
        this.vitorias = 0;
        this.derrotas = 0;
    }

    //getters e setters
    public String getId(){
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public int getVitorias() {
        return vitorias;
    }

    public void setVitorias(int vitorias) {
        this.vitorias = vitorias;
    }

    public int getDerrotas() {
        return derrotas;
    }

    public void setDerrotas(int derrotas) {
        this.derrotas = derrotas;
    }
}
