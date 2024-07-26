package com.api.backend.Services.impl;

import com.api.backend.DTO.Propuesta.PropuestaDTO;
import com.api.backend.DTO.Propuesta.PropuestaResponseDTO;
import com.api.backend.Exception.UserCreatedTaskException;
import com.api.backend.Mappers.PropuestaMapper;
import com.api.backend.Mappers.TareaMapper;
import com.api.backend.Repository.PropuestaRepository;
import com.api.backend.Services.PropuestaService;
import com.api.backend.entities.Propuesta;
import com.api.backend.entities.Tarea;
import com.api.backend.entities.Usuario;
import com.api.backend.entities.enums.EstadoPropuesta;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.Objects;


@Service
@RequiredArgsConstructor
public class PropuestaServiceImpl implements PropuestaService {

    private final TareaServiceImpl tareaService;
    private final UsuarioServiceImpl usuarioService;
    private final PropuestaRepository propuestaRepository;
    private final PropuestaMapper propuestaMapper;



    @Override
    public PropuestaResponseDTO savePropuesta(PropuestaDTO propuestaDTO) {
        Usuario freelance = usuarioService.getUserByEmail();
        Tarea tarea = tareaService.getTaskById(propuestaDTO.getTareaId());
        if(Objects.equals(tarea.getContratador().getId(), freelance.getId())){
            throw new UserCreatedTaskException("No puedes postularte a una tarea que creaste");
        }
        Propuesta propuesta = propuestaMapper.toPropuesta(propuestaDTO);
        propuesta.setTarea(tarea);
        propuesta.setFechaEnvioPropuesta(LocalDate.now());
        propuesta.setEstado(EstadoPropuesta.PENDIENTE);
        propuesta.setFreelance(freelance);
        propuestaRepository.save(propuesta);

        return propuestaMapper.toPropuestaDTO(propuesta);



    }



}
