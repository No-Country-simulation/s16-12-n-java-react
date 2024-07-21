package com.api.backend.DTO.Tarea;

import jakarta.validation.constraints.*;
import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDate;

import com.api.backend.DTO.BaseDTO;


/**
 * DTO for {@link com.api.backend.entities.Tarea}
 */
@Data
@EqualsAndHashCode(callSuper = false)
public class TareaDTO extends BaseDTO{

    @NotBlank(message = "Title can´t be empty")
    @Size(max = 100, message = "Title must be less than 100 characters")
    String titulo;
    @NotBlank(message = "Description can´t be empty")
    String descripcion;
    @NotNull(message = "Price is mandatory")
    @DecimalMin(value = "0.0", inclusive = false, message = "Price must be greater than zero")
    BigDecimal presupuesto;
    @NotBlank
    String imagenUrl;
    @NotNull
    @FutureOrPresent(message = "Plazo can´t be in past")
    LocalDate plazo;
       
}