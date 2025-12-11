package com.pereira.trancascore_app.service;

import com.pereira.trancascore_app.model.Jogador;
import com.pereira.trancascore_app.repository.JogadorRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JogadorService {

    private final JogadorRepository jogadorRepository;

    public JogadorService(JogadorRepository jogadorRepository) {
        this.jogadorRepository = jogadorRepository;
    }

    public Jogador adicionarJogador(String nome) {
        // evita duplicados no POST manual
        return jogadorRepository.findByNome(nome)
                .orElseGet(() -> jogadorRepository.save(new Jogador(nome)));
    }

    public List<Jogador> listarJogadores() {
        return jogadorRepository.findAll();
    }

    public void deletarJogador(String id) {
        jogadorRepository.deleteById(id);
    }

    // usado pelo PartidaService para salvar vitórias/derrotas
    public void registrarResultado(String nome, boolean venceu) {
        Jogador jogador = jogadorRepository.findByNome(nome)
                .orElse(new Jogador(nome));

        if (venceu) {
            jogador.setVitorias(jogador.getVitorias() + 1);
        } else {
            jogador.setDerrotas(jogador.getDerrotas() + 1);
        }

        jogadorRepository.save(jogador);
    }
}
