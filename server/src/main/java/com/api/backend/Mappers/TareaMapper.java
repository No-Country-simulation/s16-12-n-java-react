package com.api.backend.Mappers;

import org.mapstruct.Mapper;

import com.api.backend.DTO.Tarea.TareaDTO;
import com.api.backend.DTO.Tarea.TareaResponseDTO;
import com.api.backend.entities.Tarea;

@Mapper(componentModel = "spring")
public interface TareaMapper{
    Tarea toTarea(TareaDTO tareaDTO);
    TareaResponseDTO toTareaDTO(Tarea tarea);
}
