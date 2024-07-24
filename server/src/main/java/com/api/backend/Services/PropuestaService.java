package com.api.backend.Services;

import com.api.backend.DTO.Propuesta.PropuestaDTO;
import com.api.backend.DTO.Propuesta.PropuestaResponseDTO;
import com.api.backend.DTO.Propuesta.PropuestaUpdateDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface PropuestaService {
    Page<PropuestaResponseDTO> findAllPropuestas(Pageable pageable);

    PropuestaResponseDTO savePropuesta(PropuestaDTO propuestaDTO);

    void deletePropuestaById(Long id);

    PropuestaResponseDTO updatePropuesta(PropuestaUpdateDTO propuesta, Long id);

    PropuestaResponseDTO findPropuestaById(Long id);
}
