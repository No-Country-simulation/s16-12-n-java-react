package com.api.backend.entities;

import com.api.backend.entities.enums.EstadoTarea;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;
import java.util.Date;

@Entity
@Table(name = "tareas")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Tarea {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Long id;

    private String titulo;
    private String descripcion;
    private BigDecimal presupuesto;
    private Date plazo;
    private Date fechaPublicacion;
    private EstadoTarea estadoTarea;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "usuario_id")
    private Usuario usuario;


}
