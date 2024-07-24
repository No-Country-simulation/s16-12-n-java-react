package com.api.backend.DTO.Propuesta;

import com.api.backend.entities.Tarea;
import com.api.backend.entities.Usuario;
import com.api.backend.entities.enums.EstadoPropuesta;
import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.math.BigDecimal;
import java.time.LocalDate;

/**
 * DTO for {@link com.api.backend.entities.Propuesta}
 */
@Data
@EqualsAndHashCode(callSuper = false)
public class PropuestaDTO {

    @NotBlank(message = "Title can´t be empty")
    @Size(max = 700, message = "Title must be less than 700 characters")
    private String descripcion;
    @NotNull(message = "Price is mandatory")
    @DecimalMin(value = "0.0", inclusive = false, message = "Price must be greater than zero")
    private BigDecimal presupuesto;
    @NotNull
    @FutureOrPresent(message = "Plazo can´t be in past")
    private LocalDate plazo;
    private String archivoAdjunto;
    @NotNull(message  = "The associated task must be specified")
    private Long tareaId;

}
