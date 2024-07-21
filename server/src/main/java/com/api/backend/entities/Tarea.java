package com.api.backend.entities;

import com.api.backend.entities.enums.EstadoTarea;
import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name = "tareas")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
public class Tarea extends BaseEntity{

    private String titulo;
    private String descripcion;
    private BigDecimal presupuesto;
    private String imagenUrl;
    private LocalDate plazo;
    private LocalDate fechaPublicacion;
    private EstadoTarea estadoTarea;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "categoria_id")
    private Categoria categoria;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "contratador_id")
    private Usuario contratador;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "freelance_id")
    private Usuario freelance;
    @ManyToMany
    @JoinTable(
        name = "tarea_habilidades",
        joinColumns = @JoinColumn(name= "tarea_id"),
        inverseJoinColumns = @JoinColumn(name = "habilidad_id")
    )
    private List<Habilidad> habilidades;
    
}
