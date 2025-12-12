package com.pereira.trancascore_app.controller;

import com.pereira.trancascore_app.model.Jogador;
import com.pereira.trancascore_app.service.JogadorService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/jogadores")
public class JogadorController {
    private final JogadorService jogadorService;

    public JogadorController(JogadorService jogadorService){
        this.jogadorService = jogadorService;
    }

    @PostMapping
    public Jogador adicionar(@RequestBody Jogador jogador){
        return jogadorService.adicionarJogador(jogador.getNome());
    }

    @GetMapping
    public List<Jogador> listar(){
        return jogadorService.listarJogadores();
    }

    @DeleteMapping("/{id}")
    public void deletar(@PathVariable String id){
        jogadorService.deletarJogador(id);
    }
}
