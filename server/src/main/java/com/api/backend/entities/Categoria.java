package com.api.backend.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "Categorias")
@NoArgsConstructor
@AllArgsConstructor
@Getter
public class Categoria extends BaseEntity {
    private String nombre;
    
}
