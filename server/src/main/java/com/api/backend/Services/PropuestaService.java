package com.api.backend.Services;

import com.api.backend.DTO.Propuesta.PropuestaDTO;
import com.api.backend.DTO.Propuesta.PropuestaResponseDTO;
import com.api.backend.DTO.Propuesta.PropuestaUpdateDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface PropuestaService {

    PropuestaResponseDTO savePropuesta(PropuestaDTO propuestaDTO);
    Page<PropuestaResponseDTO> getPropuestasByTareaId(Pageable pageable, Long tareaId);
    PropuestaResponseDTO updatePropuesta(Long propuestaId, PropuestaUpdateDTO propuestaUpdateDTO);
    void deletePropuesta(Long propuestaId);
    PropuestaResponseDTO findPropuestaById(Long id);
    Page<PropuestaResponseDTO> getPropuestaByFreelancerId(Pageable pageable);
}
