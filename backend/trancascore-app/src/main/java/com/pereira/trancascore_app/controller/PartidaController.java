package com.pereira.trancascore_app.controller;

import com.pereira.trancascore_app.model.Partida;
import com.pereira.trancascore_app.repository.PartidaRepository;
import com.pereira.trancascore_app.service.JogadorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/partidas")
public class PartidaController {

    @Autowired
    private PartidaRepository partidaRepository;

    @Autowired
    private JogadorService jogadorService;

    @PostMapping
    public Partida criarPartida(@RequestBody Partida partida) {

        boolean time1Venceu = "time1".equals(partida.getVencedores());
        boolean time2Venceu = "time2".equals(partida.getVencedores());

        // time 1
        partida.getTime1().forEach(nome -> {
            jogadorService.registrarResultado(nome, time1Venceu);
        });

        // time 2
        partida.getTime2().forEach(nome -> {
            jogadorService.registrarResultado(nome, time2Venceu);
        });

        return partidaRepository.save(partida);
    }


    @GetMapping
    public List<Partida> listarPartidas() {
        return partidaRepository.findAll();
    }
}
