package com.api.backend.DTO.Tarea;

import jakarta.validation.constraints.Size;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = false)
public class TareaFindCategoriaDTO {
    @Size(max = 50, message = "Title must be less than 100 characters")
    String nombreCategoria;
}
