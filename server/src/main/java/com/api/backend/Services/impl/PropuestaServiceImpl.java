package com.api.backend.Services.impl;

import com.api.backend.DTO.Propuesta.PropuestaDTO;
import com.api.backend.DTO.Propuesta.PropuestaResponseDTO;
import com.api.backend.DTO.Propuesta.PropuestaUpdateDTO;
import com.api.backend.Repository.PropuestaRepository;
import com.api.backend.Repository.TareaRepository;
import com.api.backend.Repository.UsuarioRepository;
import com.api.backend.Services.PropuestaService;
import com.api.backend.entities.Propuesta;
import com.api.backend.entities.Tarea;
import com.api.backend.entities.Usuario;
import com.api.backend.entities.enums.EstadoPropuesta;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class PropuestaServiceImpl implements PropuestaService {

    private final TareaRepository tareaRepository;
    private final UsuarioRepository usuarioRepository;
    private final PropuestaRepository propuestaRepository;
    private final UsuarioServiceImpl usuarioService;


    @Override
    public Page<PropuestaResponseDTO> findAllPropuestas(Pageable pageable) {
//        List<PropuestaResponseDTO> propuestas = propuestaRepository.findAllByStatusTrue(pageable)
//                .stream()
//                .map(propuesta -> {
//                    PropuestaResponseDTO propuestaResponseDTO = new PropuestaResponseDTO();
//                    propuestaResponseDTO.setId(propuesta.getId());
//                    propuestaResponseDTO.setDescripcion(propuesta.getDescripcion());
//                    propuestaResponseDTO.setPresupuesto(propuesta.getPresupuesto());
//                    propuestaResponseDTO.setPlazo(propuesta.getPlazo());
//                    propuestaResponseDTO.setFechaEnvioPropuesta(propuesta.getFechaEnvioPropuesta());
//                    propuestaResponseDTO.setEstado(propuesta.getEstado());
//                    propuestaResponseDTO.setArchivoAdjunto(propuesta.getArchivoAdjunto());
//                    propuestaResponseDTO.setTareaId(propuesta.getTarea().getId()); // Propuesta aplicada
//                    propuestaResponseDTO.setUsuarioId(propuesta.getUsuario().getId()); // Usuario freelance que se postulo
//                    return propuestaResponseDTO;
//                })
//                .collect(Collectors.toList());
//
//        // Get the total number of elements from the original Page
//        int totalElements = propuestaRepository.findAllByStatusTrue().getSize();
//
//        // Create a new PageImpl using the converted list, pageable information, and total elements
//        return new PageImpl<>(propuestas, pageable, totalElements);
        return null;
    }


    @Override
    public PropuestaResponseDTO savePropuesta(PropuestaDTO propuestaDTO) {
        // 1. Crear entidad Propuesta a partir del DTO
        Propuesta propuesta = new Propuesta();
        propuesta.setDescripcion(propuestaDTO.getDescripcion());
        propuesta.setPresupuesto(propuestaDTO.getPresupuesto());
        propuesta.setPlazo(propuestaDTO.getPlazo());
        propuesta.setFechaEnvioPropuesta(LocalDate.now());
        propuesta.setArchivoAdjunto(propuestaDTO.getArchivoAdjunto());
        propuesta.setEstado(EstadoPropuesta.PENDIENTE); // Estado predeterminado en la creacion de la propuesta

        // 2. Establecer relaciones (tarea y usuario)
        Tarea tarea = tareaRepository.getReferenceById(propuestaDTO.getTareaId());
        propuesta.setTarea(tarea);

        Usuario usuario = usuarioRepository.getReferenceById(usuarioService.getUserByEmail().getId());
        propuesta.setUsuario(usuario);

        // 3. Guardar entidad propuesta en la base de datos
        propuestaRepository.save(propuesta);

        // 4. Crear PropuestaResponseDTO a partir de la propuesta guardada
        PropuestaResponseDTO propuestaResponseDTO = new PropuestaResponseDTO();
        propuestaResponseDTO.setId(propuesta.getId());
        propuestaResponseDTO.setDescripcion(propuesta.getDescripcion());
        propuestaResponseDTO.setPresupuesto(propuesta.getPresupuesto());
        propuestaResponseDTO.setPlazo(propuesta.getPlazo());
        propuestaResponseDTO.setFechaEnvioPropuesta(propuesta.getFechaEnvioPropuesta());
        propuestaResponseDTO.setEstado(propuesta.getEstado());
        propuestaResponseDTO.setArchivoAdjunto(propuesta.getArchivoAdjunto());

        propuestaResponseDTO.setTareaId(propuesta.getTarea().getId()); // Propuesta aplicada

        propuestaResponseDTO.setUsuarioId(propuesta.getUsuario().getId()); // Usuario freelance que se postulo

        // 5. Devolver PropuestaResponseDTO
        return propuestaResponseDTO;
    }

    @Override
    public void deletePropuestaById(Long id) {

    }

    @Override
    public PropuestaResponseDTO updatePropuesta(PropuestaUpdateDTO propuesta, Long id) {
        return null;
    }

    @Override
    public PropuestaResponseDTO findPropuestaById(Long id) {
        return null;
    }
}
