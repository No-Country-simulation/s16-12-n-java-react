package com.api.backend.DTO.Habilidad;

import com.api.backend.DTO.BaseDTO;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = false)
public class HabilidadResponseDTO extends BaseDTO {

    String nombre;

}
