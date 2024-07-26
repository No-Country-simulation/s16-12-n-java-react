package com.api.backend.Services;

import com.api.backend.DTO.Propuesta.PropuestaDTO;
import com.api.backend.DTO.Propuesta.PropuestaResponseDTO;

public interface PropuestaService {

    PropuestaResponseDTO savePropuesta(PropuestaDTO propuestaDTO);



}
