package com.pereira.trancascore_app.service;

import com.pereira.trancascore_app.model.Jogador;
import com.pereira.trancascore_app.model.Partida;
import com.pereira.trancascore_app.repository.JogadorRepository;
import com.pereira.trancascore_app.repository.PartidaRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PartidaService {
    private final PartidaRepository partidaRepository;
    private final JogadorRepository jogadorRepository;

    public PartidaService(PartidaRepository partidaRepository, JogadorRepository jogadorRepository) {
        this.partidaRepository = partidaRepository;
        this.jogadorRepository = jogadorRepository;
    }

    public Partida registrarPartidas(List<String> time1, List<String> time2, String vencedores) {

        //  VALIDAR se todos os jogadores existem
        validarJogadoresExistem(time1);
        validarJogadoresExistem(time2);

        Partida partida = new Partida(time1, time2, vencedores);

        // atualizar estatísticas
        if (vencedores.equals("time1")) {
            atualizarEstatisticas(time1, true);
            atualizarEstatisticas(time2, false);
        } else {
            atualizarEstatisticas(time2, true);
            atualizarEstatisticas(time1, false);
        }

        return partidaRepository.save(partida);
    }

    private void validarJogadoresExistem(List<String> jogadores) {
        for (String nome : jogadores) {
            boolean existe = jogadorRepository.findAll()
                    .stream()
                    .anyMatch(j -> j.getNome().equalsIgnoreCase(nome));

            if (!existe) {
                throw new RuntimeException("Jogador não encontrado: " + nome);
            }
        }
    }

    public void atualizarEstatisticas(List<String> jogadores, boolean vitoria) {
        for (String nome : jogadores) {
            Jogador jogador = jogadorRepository.findAll()
                    .stream()
                    .filter(j -> j.getNome().equalsIgnoreCase(nome))
                    .findFirst()
                    .orElse(null);

            if (jogador != null) {
                if (vitoria) jogador.setVitorias(jogador.getVitorias() + 1);
                else jogador.setDerrotas(jogador.getDerrotas() + 1);

                jogadorRepository.save(jogador);
            }
        }
    }
}

