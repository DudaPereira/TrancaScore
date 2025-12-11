package com.pereira.trancascore_app.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
import java.util.List;

@Document(collection = "partidas")
public class Partida {
    @Id
    private String id;
    private List<String> time1;
    private List<String> time2;
    private String vencedores; // time1 ou time2
    private LocalDateTime data;

    // Construtor padrão (necessário para o Spring)
    public Partida() {
        this.data = LocalDateTime.now();
    }

    // Construtor com parâmetros
    public Partida(List<String> time1, List<String> time2, String vencedores) {
        this.time1 = time1;
        this.time2 = time2;
        this.vencedores = vencedores;
        this.data = LocalDateTime.now(); // <--- data gerada automaticamente
    }

    // Getters e Setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public List<String> getTime1() {
        return time1;
    }

    public void setTime1(List<String> time1) {
        this.time1 = time1;
    }

    public List<String> getTime2() {
        return time2;
    }

    public void setTime2(List<String> time2) {
        this.time2 = time2;
    }

    public String getVencedores() {
        return vencedores;
    }

    public void setVencedores(String vencedores) {
        this.vencedores = vencedores;
    }

    public LocalDateTime getData() {
        return data;
    }

    public void setData(LocalDateTime data) {
        this.data = data;
    }
}
