package com.api.backend.entities;

import com.api.backend.entities.enums.EstadoPropuesta;
import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
@Table(name = "propuestas")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
public class Propuesta extends BaseEntity{

    @Column(name = "descripcion", nullable = false)
    private String descripcion;

    @Column(name = "fecha_envio_propuesta", nullable = false)
    private LocalDate fechaEnvioPropuesta;

    @Enumerated(EnumType.STRING)
    @Column(name = "estado", nullable = false)
    private EstadoPropuesta estado;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "freelance_id", nullable = false)
    private Usuario freelance;

    @ManyToOne
    @JoinColumn(name = "tarea_id")
    private Tarea tarea;

}

