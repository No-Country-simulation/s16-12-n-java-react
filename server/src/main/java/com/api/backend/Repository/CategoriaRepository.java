package com.api.backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.api.backend.entities.Categoria;

public interface CategoriaRepository extends JpaRepository<Categoria, Long> {

    Categoria findByNombre(String nombre);

    Boolean existsByNombre(String nombre);

}
