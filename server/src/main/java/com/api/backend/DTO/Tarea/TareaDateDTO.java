package com.api.backend.DTO.Tarea;

import jakarta.validation.constraints.NotNull;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.time.LocalDate;

@Data
@EqualsAndHashCode(callSuper = false)
public class TareaDateDTO {

    @NotNull
    private LocalDate fechaPublicacion;
    private LocalDate plazo;

}
