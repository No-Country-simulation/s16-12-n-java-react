package com.api.backend.DTO.Tarea;

import java.math.BigDecimal;
import java.time.LocalDate;

import com.api.backend.DTO.BaseDTO;
import com.api.backend.entities.Usuario;
import com.api.backend.entities.enums.EstadoTarea;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = false)
public class TareaResponseDTO extends BaseDTO{
    
    String titulo;
    String descripcion;
    BigDecimal presupuesto;
    String ImagenUrl;
    LocalDate plazo;
    LocalDate fechaPublicacion;
    EstadoTarea estadoTarea;
    Usuario contratador;
    Usuario freelance;    
}

