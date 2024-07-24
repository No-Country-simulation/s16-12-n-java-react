package com.api.backend.DTO.Propuesta;

import com.api.backend.entities.enums.EstadoPropuesta;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.math.BigDecimal;
import java.time.LocalDate;

@Data
@EqualsAndHashCode(callSuper = false)
public class PropuestaUpdateDTO {
    private String descripcion;
    private BigDecimal presupuesto;
    private LocalDate plazo;
    private String archivoAdjunto;
}
