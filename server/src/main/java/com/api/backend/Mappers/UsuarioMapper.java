package com.api.backend.Mappers;

import org.mapstruct.Mapper;

import com.api.backend.DTO.Usuario.UsuarioResponseDTO;
import com.api.backend.entities.Usuario;

@Mapper(componentModel = "spring")
public interface UsuarioMapper {

    Usuario toUsuario(UsuarioResponseDTO UsuarioDTO);
    UsuarioResponseDTO toUsuarioResponseDTO(Usuario usuario);

}
