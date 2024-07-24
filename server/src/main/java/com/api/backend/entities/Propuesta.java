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
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "descripcion", nullable = false)
    private String descripcion;

    @Column(name = "presupuesto", nullable = false)
    private BigDecimal presupuesto;

    @Column(name = "plazo", nullable = false)
    private LocalDate plazo;

    @Column(name = "fecha_envio_propuesta", nullable = false)
    private LocalDate fechaEnvioPropuesta;

    @Column(name = "archivo_adjunto")
    private String archivoAdjunto;

    @Enumerated(EnumType.STRING)
    @Column(name = "estado", nullable = false)
    private EstadoPropuesta estado;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "tarea_id", nullable = false)
    private Tarea tarea;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "usuario_id", nullable = false)
    private Usuario usuario;

}

