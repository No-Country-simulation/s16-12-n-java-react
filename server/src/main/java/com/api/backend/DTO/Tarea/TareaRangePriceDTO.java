package com.api.backend.DTO.Tarea;

import jakarta.validation.constraints.DecimalMax;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.math.BigDecimal;

@Data
@EqualsAndHashCode(callSuper = false)
public class TareaRangePriceDTO {
    @DecimalMin(value = "0.0", inclusive = false, message = "Price must be greater than zero")
    @NotNull
    BigDecimal presupuestoMin;
    @DecimalMax(value = "999999", message = "Price must be greater than presupuestoMin")
    @NotNull
    BigDecimal presupuestoMax;

}
