package com.api.backend.DTO.Propuesta;

import com.api.backend.DTO.BaseDTO;
import com.api.backend.entities.enums.EstadoPropuesta;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.math.BigDecimal;
import java.time.LocalDate;

@Data
@EqualsAndHashCode(callSuper = false)
public class PropuestaResponseDTO extends BaseDTO {

    private Long id;
    private String descripcion;
    private BigDecimal presupuesto;
    private LocalDate plazo;
    private LocalDate fechaEnvioPropuesta;
    private EstadoPropuesta estado;
    private String archivoAdjunto;
    private Long tareaId;
    private Long usuarioId;


}
