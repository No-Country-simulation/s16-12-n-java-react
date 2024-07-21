package com.api.backend.DTO.Tarea;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.FutureOrPresent;
import jakarta.validation.constraints.Size;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = false)
public class TareaUpdateDTO {

    @Size(max = 100, message = "Title must be less than 100 characters")
    String titulo;
    String descripcion;
    @DecimalMin(value = "0.0", inclusive = false, message = "Price must be greater than zero")
    BigDecimal presupuesto;
    String imagenUrl;
    @FutureOrPresent(message = "Plazo can´t be in past")
    LocalDate plazo;
    @Size(max = 50, message = "Title must be less than 100 characters")
    String nombreCategoria;
    List<String> nombreHabilidades;

}
