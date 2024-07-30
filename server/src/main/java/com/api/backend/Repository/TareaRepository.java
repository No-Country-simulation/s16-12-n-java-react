package com.api.backend.Repository;

import com.api.backend.entities.Tarea;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.Optional;

import com.api.backend.entities.enums.EstadoTarea;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface TareaRepository extends JpaRepository<Tarea, Long> {
    Page<Tarea> findAllByStatusTrue(Pageable pageable);

    Optional<Tarea> findByIdAndStatusTrue(Long id);

    Page<Tarea> findByContratadorId(Pageable pageable, Long userId);

    @Query("SELECT t FROM Tarea t WHERE t.categoria.nombre = :nombreCategoria")
    Page<Tarea> findByCategoriaNombre(String nombreCategoria, Pageable pageable);

    @Query("SELECT t FROM Tarea t WHERE t.presupuesto > :presupuestoMin AND t.presupuesto < :presupuestoMax")
    Page<Tarea> findByRangePrice(BigDecimal presupuestoMin, BigDecimal presupuestoMax, Pageable pageable);

    Page<Tarea> findByFechaPublicacionGreaterThanEqual(LocalDate fechaPublicacion, Pageable pageable);

    Page<Tarea> findByFechaPublicacionBetween(LocalDate fechaPublicacion, LocalDate plazo, Pageable pageable);
    Page<Tarea> findAllByStatusTrueAndEstadoTarea(Pageable pageable, EstadoTarea estadoTarea);

}