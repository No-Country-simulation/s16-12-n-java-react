package com.api.backend.entities;

import java.util.List;
import jakarta.persistence.Entity;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "habilidades")
@NoArgsConstructor
@AllArgsConstructor
@Getter
public class Habilidad extends BaseEntity{

    private String nombre;
    @ManyToMany(mappedBy = "habilidades")
    private List<Tarea> tareas;

}
