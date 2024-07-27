package com.api.backend.Mappers;

import com.api.backend.DTO.Propuesta.PropuestaDTO;
import com.api.backend.DTO.Propuesta.PropuestaResponseDTO;
import com.api.backend.entities.Propuesta;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring", uses = {UsuarioMapper.class})
public interface PropuestaMapper {

    Propuesta toPropuesta(PropuestaDTO propuestaDTO);
    PropuestaResponseDTO toPropuestaDTO(Propuesta propuesta);

}
