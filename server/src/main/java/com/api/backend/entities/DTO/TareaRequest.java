package com.api.backend.entities.DTO;

import com.api.backend.entities.enums.EstadoTarea;
import jakarta.validation.constraints.*;
import lombok.*;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;

/**
 * DTO for {@link com.api.backend.entities.Tarea}
 */
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class TareaRequest {
    @NotBlank(message = "Title can´t be empty")
    @Size(max = 100, message = "Title must be less than 100 characters")
    String titulo;
    @NotBlank(message = "Description can´t be empty")
    String descripcion;
    @NotNull(message = "Price is mandatory")
    @DecimalMin(value = "0.0", inclusive = false, message = "Price must be greater than zero")
    BigDecimal presupuesto;
    Date plazo;
    @NotNull
    Date fechaPublicacion;
    @NotNull
    String estadoTarea;
}