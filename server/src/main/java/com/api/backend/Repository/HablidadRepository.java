package com.api.backend.Repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.api.backend.entities.Habilidad;

public interface HablidadRepository extends JpaRepository<Habilidad, Long> {

    Habilidad findByNombre(String name);
    Boolean existsByNombre(String name);
}
