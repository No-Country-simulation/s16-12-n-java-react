package com.api.backend.Mappers;

import java.util.List;
import java.util.stream.Collectors;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import com.api.backend.DTO.Tarea.TareaDTO;
import com.api.backend.DTO.Tarea.TareaResponseDTO;
import com.api.backend.entities.Categoria;
import com.api.backend.entities.Habilidad;
import com.api.backend.entities.Tarea;


@Mapper(componentModel = "spring", uses = {UsuarioMapper.class, HabilidadMapper.class, CategoriaMapper.class})
public interface TareaMapper{
    Tarea toTarea(TareaDTO tareaDTO);

    @Mapping(source = "habilidades", target = "habilidades")
    @Mapping(source = "categoria", target = "categoria")
    TareaResponseDTO toTareaDTO(Tarea tarea);

     default List<String> mapHabilidadesToString(List<Habilidad> habilidades) {
        return habilidades.stream()
                          .map(Habilidad::getNombre) 
                          .collect(Collectors.toList());
    }

    default String mapCategoriaToString(Categoria categoria){
        return categoria.getNombre();
    }
}
