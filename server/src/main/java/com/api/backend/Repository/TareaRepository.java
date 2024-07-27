package com.api.backend.Repository;

import com.api.backend.entities.Tarea;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TareaRepository extends JpaRepository<Tarea, Long> {
    Page<Tarea> findAllByStatusTrue(Pageable pageable);

    Optional<Tarea> findByIdAndStatusTrue(Long id);

    Page<Tarea> findByContratadorId(Pageable pageable, Long userId);
}