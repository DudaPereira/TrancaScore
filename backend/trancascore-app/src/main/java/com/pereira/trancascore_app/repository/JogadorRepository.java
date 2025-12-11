package com.pereira.trancascore_app.repository;

import com.pereira.trancascore_app.model.Jogador;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface JogadorRepository extends MongoRepository<Jogador, String> {
    Optional<Jogador> findByNome(String nome);
}
