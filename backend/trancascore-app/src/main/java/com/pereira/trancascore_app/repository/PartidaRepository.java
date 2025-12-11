package com.pereira.trancascore_app.repository;

import com.pereira.trancascore_app.model.Partida;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PartidaRepository extends MongoRepository<Partida, String> {
}
