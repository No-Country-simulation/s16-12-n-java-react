package com.api.backend.Mappers;

import org.mapstruct.Mapper;

import com.api.backend.DTO.Categoria.CategoriaResponseDTO;
import com.api.backend.entities.Categoria;

@Mapper(componentModel = "spring")
public interface CategoriaMapper {

    Categoria toCategoriaDTO(CategoriaResponseDTO categoriaDTO);
    CategoriaResponseDTO toCategoriaResponseDTO (Categoria categoria);


}
