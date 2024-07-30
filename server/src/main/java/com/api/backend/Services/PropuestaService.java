package com.api.backend.Services;

import com.api.backend.DTO.Propuesta.PropuestaDTO;
import com.api.backend.DTO.Propuesta.PropuestaResponseDTO;
import com.api.backend.DTO.Propuesta.PropuestaUpdateDTO;
import com.api.backend.entities.Propuesta;
import com.api.backend.entities.Tarea;
import com.api.backend.entities.Usuario;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface PropuestaService {

    PropuestaResponseDTO savePropuesta(PropuestaDTO propuestaDTO);
    Page<PropuestaResponseDTO> getPropuestasByTareaId(Pageable pageable, Long tareaId);
    PropuestaResponseDTO updatePropuesta(Long propuestaId, PropuestaUpdateDTO propuestaUpdateDTO);
    void deletePropuesta(Long propuestaId);
    PropuestaResponseDTO findPropuestaById(Long id);
    Page<PropuestaResponseDTO> getPropuestaByFreelancerId(Pageable pageable);
    Propuesta getPropuestaById(Long propuestaId);
    void PropuestaValidations(Tarea tarea, Usuario freelance);
}
