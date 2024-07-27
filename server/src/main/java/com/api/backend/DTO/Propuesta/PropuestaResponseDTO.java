package com.api.backend.DTO.Propuesta;

import com.api.backend.DTO.BaseDTO;
import com.api.backend.DTO.Usuario.UsuarioResponseDTO;
import com.api.backend.entities.Usuario;
import com.api.backend.entities.enums.EstadoPropuesta;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.math.BigDecimal;
import java.time.LocalDate;

@Data
@EqualsAndHashCode(callSuper = false)
public class PropuestaResponseDTO extends BaseDTO {


    private String descripcion;
    private LocalDate fechaEnvioPropuesta;
    private EstadoPropuesta estado;
    private UsuarioResponseDTO freelance;


}
