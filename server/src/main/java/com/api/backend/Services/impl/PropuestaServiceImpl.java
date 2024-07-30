package com.api.backend.Services.impl;

import com.api.backend.DTO.Propuesta.PropuestaDTO;
import com.api.backend.DTO.Propuesta.PropuestaResponseDTO;
import com.api.backend.DTO.Propuesta.PropuestaUpdateDTO;
import com.api.backend.Exception.CantSendPropuestaException;
import com.api.backend.Exception.PropuestaNotFoundExcepcion;
import com.api.backend.Exception.ResourceNotFoundException;
import com.api.backend.Exception.UserCreatedTaskException;
import com.api.backend.Mappers.PropuestaMapper;
import com.api.backend.Repository.PropuestaRepository;
import com.api.backend.Services.PropuestaService;
import com.api.backend.Services.TareaService;
import com.api.backend.entities.Propuesta;
import com.api.backend.entities.Tarea;
import com.api.backend.entities.Usuario;
import com.api.backend.entities.enums.EstadoPropuesta;
import com.api.backend.entities.enums.EstadoTarea;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.Objects;


@Service
@RequiredArgsConstructor
public class PropuestaServiceImpl implements PropuestaService {

    @Lazy
    @Autowired
    private TareaService tareaService;
    private final UsuarioServiceImpl usuarioService;
    private final PropuestaRepository propuestaRepository;
    private final PropuestaMapper propuestaMapper;




    @Override
    public PropuestaResponseDTO savePropuesta(PropuestaDTO propuestaDTO) {
        Usuario freelance = usuarioService.getLoggedUser();
        Tarea tarea = tareaService.getTaskById(propuestaDTO.getTareaId());
        PropuestaValidations(tarea, freelance);
        Propuesta propuesta = propuestaMapper.toPropuesta(propuestaDTO);
        propuesta.setTarea(tarea);
        propuesta.setFechaEnvioPropuesta(LocalDate.now());
        propuesta.setEstado(EstadoPropuesta.PENDIENTE);
        propuesta.setFreelance(freelance);
        propuestaRepository.save(propuesta);

        return propuestaMapper.toPropuestaDTO(propuesta);



    }

    @Override
    public Page<PropuestaResponseDTO> getPropuestasByTareaId(Pageable pageable, Long tareaId) {
        Page<Propuesta> propuestas = propuestaRepository.findByTareaIdAndStatusTrue(pageable,tareaId);
        if(propuestas.isEmpty()){ throw new PropuestaNotFoundExcepcion("No hay propuestas para esta tarea");};
        return propuestas.map(propuestaMapper :: toPropuestaDTO);
    }

    @Override
    @Transactional
    public PropuestaResponseDTO updatePropuesta(Long propuestaId,PropuestaUpdateDTO propuestaUpdateDTO) {
        Propuesta propuesta = getPropuestaById(propuestaId);
        propuesta.setDescripcion(propuestaUpdateDTO.getDescripcion());

        return propuestaMapper.toPropuestaDTO(propuesta);
    }

    @Override
    @Transactional
    public void deletePropuesta(Long propuestaId) {
       Propuesta propuesta = getPropuestaById(propuestaId);
       propuesta.setStatus(Boolean.FALSE);
       propuesta.setEstado(EstadoPropuesta.CANCELADA);
    }

    @Override
    public PropuestaResponseDTO findPropuestaById(Long propuestaId) {
        Propuesta propuesta = getPropuestaById(propuestaId);
        return propuestaMapper.toPropuestaDTO(propuesta);
    }

    @Override
    public Page<PropuestaResponseDTO> getPropuestaByFreelancerId(Pageable pageable) {
        Usuario freelance = usuarioService.getLoggedUser();
        Page<Propuesta> propuestas = propuestaRepository.findByFreelanceId(pageable, freelance.getId());
        if(propuestas.isEmpty()){throw new PropuestaNotFoundExcepcion("No hay propuestas creadas por este usuario");}
        return propuestas.map(propuestaMapper::toPropuestaDTO);
    }

    @Override
    public Propuesta getPropuestaById(Long propuestaId) {
        return propuestaRepository.findById(propuestaId).orElseThrow(()-> new ResourceNotFoundException("Propuesta with id:"  + propuestaId  +  "not found"));
    }

    @Override
    public void PropuestaValidations(Tarea tarea, Usuario freelance) {
        if(Objects.equals(tarea.getContratador().getId(), freelance.getId())){
            throw new UserCreatedTaskException("No puedes postularte a una tarea que creaste");
        }
        if(tarea.getEstadoTarea()== EstadoTarea.EN_PROCESO || tarea.getEstadoTarea() == EstadoTarea.COMPLETADA || tarea.getEstadoTarea() == EstadoTarea.CANCELADA){
            throw new CantSendPropuestaException("Esta tarea ya no recibe propuesta");
        }



    }


}
