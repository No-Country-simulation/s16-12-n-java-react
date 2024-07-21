package com.api.backend.DTO.Tarea;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

import com.api.backend.DTO.BaseDTO;
import com.api.backend.DTO.Usuario.UsuarioResponseDTO;
import com.api.backend.entities.enums.EstadoTarea;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = false)
public class TareaResponseDTO extends BaseDTO{
    
    String titulo;
    String descripcion;
    BigDecimal presupuesto;
    String imagenUrl;
    LocalDate plazo;
    LocalDate fechaPublicacion;
    EstadoTarea estadoTarea;
    String categoria;
    UsuarioResponseDTO contratador;
    UsuarioResponseDTO freelance;
    List<String> habilidades;    
}

