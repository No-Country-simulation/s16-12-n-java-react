package com.api.backend.Mappers;

import org.mapstruct.Mapper;

import com.api.backend.DTO.Habilidad.HabilidadResponseDTO;
import com.api.backend.entities.Habilidad;

@Mapper(componentModel = "spring")
public interface HabilidadMapper {
    Habilidad toHabilidad(HabilidadResponseDTO habilidadDTO);
    HabilidadResponseDTO toHabilidadDTO(Habilidad habilidad);
   
}
