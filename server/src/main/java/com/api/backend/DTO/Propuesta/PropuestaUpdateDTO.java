package com.api.backend.DTO.Propuesta;

import com.api.backend.entities.enums.EstadoPropuesta;
import jakarta.validation.constraints.Size;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.math.BigDecimal;
import java.time.LocalDate;

@Data
@EqualsAndHashCode(callSuper = false)
public class PropuestaUpdateDTO {
    @Size(max = 700, message = "Title must be less than 700 characters")
    private String descripcion;

}
