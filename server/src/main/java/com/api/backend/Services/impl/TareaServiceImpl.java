package com.api.backend.Services.impl;

import com.api.backend.DTO.Tarea.*;
import com.api.backend.Exception.ResourceNotFoundException;
import com.api.backend.Exception.TaskInProgressException;
import com.api.backend.Exception.TaskNotFoundException;
import com.api.backend.DTO.Tarea.TareaDTO;
import com.api.backend.DTO.Tarea.TareaResponseDTO;
import com.api.backend.DTO.Tarea.TareaUpdateDTO;
import com.api.backend.Exception.*;
import com.api.backend.Mappers.TareaMapper;
import com.api.backend.Repository.TareaRepository;
import com.api.backend.Services.PropuestaService;
import com.api.backend.Services.TareaService;
import com.api.backend.entities.Propuesta;
import com.api.backend.entities.Tarea;
import com.api.backend.entities.Usuario;
import com.api.backend.entities.enums.EstadoPropuesta;
import com.api.backend.entities.enums.EstadoTarea;

import lombok.RequiredArgsConstructor;

import org.springframework.context.annotation.Lazy;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import java.time.LocalDate;
import java.util.Objects;
import java.util.Optional;
import java.util.stream.Collectors;


@Service
@RequiredArgsConstructor
@Lazy
public class TareaServiceImpl implements TareaService {

    
    private final TareaRepository tareaRepository;
    private final UsuarioServiceImpl usuarioService;
    private final HabilidadServiceImpl habilidadService;
    private final CategoriaServiceImpl categoriaService;
    private final TareaMapper tareaMapper;
    
    

    @Override
    public Page<TareaResponseDTO> findAllTasks(Pageable pageable) {
        Page<Tarea> task = tareaRepository.findAllByStatusTrue(pageable);
        if (task.isEmpty()) throw new TaskNotFoundException("No hay tareas");
        return task.map(tareaMapper::toTareaDTO);
    }

    @Override
    public TareaResponseDTO saveTasks(TareaDTO task) {
        Usuario user = usuarioService.getLoggedUser();
        Tarea tarea = tareaMapper.toTarea(task);
        tarea.setContratador(user);
        tarea.setFechaPublicacion(LocalDate.now());
        tarea.setEstadoTarea(EstadoTarea.PUBLICADA);
        tarea.setCategoria(categoriaService.findCategoriaByName(task.getNombreCategoria()));
        tarea.setHabilidades(task
                            .getNombreHabilidades()
                            .stream()
                            .map(habilidadService :: findByName)
                            .toList());
        return tareaMapper.toTareaDTO(tareaRepository.save(tarea));
    }

    @Override
    @Transactional
    public void deleteTasksById(Long id) {
        Tarea tarea = tareaRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Task with id " + id + " not found"));
        tarea.setStatus(Boolean.FALSE);
        tarea.setEstadoTarea(EstadoTarea.CANCELADA);
        
    }


    @Override
    @Transactional
    public TareaResponseDTO updateTask(TareaUpdateDTO taskRequest, Long id) {
    Tarea existingTarea = tareaRepository.findByIdAndStatusTrue(id)
            .orElseThrow(() -> new ResourceNotFoundException("Task with id " + id + " not found"));
    if(existingTarea.getEstadoTarea() == EstadoTarea.EN_PROCESO){
        throw new TaskInProgressException("No se puede editar, La tarea ya esta en progreso");
    }

    Optional.ofNullable(taskRequest.getTitulo()).ifPresent(existingTarea::setTitulo);
    Optional.ofNullable(taskRequest.getDescripcion()).ifPresent(existingTarea::setDescripcion);
    Optional.ofNullable(taskRequest.getPresupuesto()).ifPresent(existingTarea::setPresupuesto);
    Optional.ofNullable(taskRequest.getPlazo()).ifPresent(existingTarea::setPlazo);
    Optional.ofNullable(taskRequest.getNombreHabilidades()).ifPresent(nombresHabilidades ->
        existingTarea.setHabilidades(nombresHabilidades.stream()
                .map(habilidadService::findByName)
                .collect(Collectors.toList()))
    );
    Optional.ofNullable(taskRequest.getNombreCategoria()).ifPresent(nombreCategoria ->
        existingTarea.setCategoria(categoriaService.findCategoriaByName(nombreCategoria))
    );
  

    return tareaMapper.toTareaDTO(existingTarea);
}

    @Override
    public TareaResponseDTO findTaskById(Long id) {
        tareaRepository.findByIdAndStatusTrue(id)
            .orElseThrow(() -> new ResourceNotFoundException("Task with id " + id + " not found"));
        return tareaMapper.toTareaDTO(tareaRepository.findByIdAndStatusTrue(id).get());
    }
    @Override
    public Tarea getTaskById(Long id) {
        Optional <Tarea> optionalTarea = tareaRepository.findByIdAndStatusTrue(id);
        if(optionalTarea.isPresent()){
            return optionalTarea.get();
        }
        throw new ResourceNotFoundException("Task with id " + id + " not found");

    }
    @Override
    public  Page<TareaResponseDTO> findTaskByUserId(Pageable pageable) {
        Long contratadorId =  usuarioService.getLoggedUser().getId();
        Page<Tarea> tasks = tareaRepository.findByContratadorId(pageable, contratadorId);
        if (tasks.isEmpty()) throw new TaskNotFoundException("No hay tareas");
        return tasks.map(tareaMapper :: toTareaDTO);
    }

    @Override
    public Page<TareaResponseDTO> findTaskByCategoria(TareaFindCategoriaDTO categoria, Pageable pageable) {
        Page<Tarea> task = tareaRepository.findByCategoriaNombre(categoria.getNombreCategoria(), pageable);
        if (task.isEmpty()) {
            throw new TaskNotFoundException("No hay tareas");
        }
        return task.map(tareaMapper::toTareaDTO);
    }

    @Override
    public Page<TareaResponseDTO> findTaskByRangePrice(TareaRangePriceDTO rangePrice, Pageable pageable) {
        Page<Tarea> task = tareaRepository.findByRangePrice(rangePrice.getPresupuestoMin(), rangePrice.getPresupuestoMax(), pageable);
        if (task.isEmpty()) {
            throw new TaskNotFoundException("No hay tareas en ese rango de precio");
        }
        return task.map(tareaMapper::toTareaDTO);    }

    @Override
    public Page<TareaResponseDTO> findTaskByDatePublicacion(TareaDateDTO datePublicacion, Pageable pageable) {
        Page<Tarea> task = tareaRepository.findByFechaPublicacionGreaterThanEqual(datePublicacion.getFechaPublicacion(), pageable);
        if (task.isEmpty()) {
            throw new TaskNotFoundException("No hay tareas a partir de esa fecha de publicacion");
        }
        return task.map(tareaMapper::toTareaDTO);    }

    @Override
    public Page<TareaResponseDTO> findTaskByRangeDate(TareaDateDTO rangeDate, Pageable pageable) {
        Page<Tarea> task = tareaRepository.findByFechaPublicacionBetween(rangeDate.getFechaPublicacion(), rangeDate.getPlazo(), pageable);
        if (task.isEmpty()) {
            throw new TaskNotFoundException("No hay tareas en ese rango informado");
        }
        return task.map(tareaMapper::toTareaDTO);
    }


    @Override
    @Transactional
    public void acceptPropuesta(Long tareaId , Long propuestaId) {

        Usuario contratador = usuarioService.getLoggedUser();
        Tarea tarea = getTaskById(tareaId);

        if(!(Objects.equals(contratador.getId(), tarea.getContratador().getId()))){
            throw new OnlyUserCanHandlerPropuestaException("Solo el usuario contratador puede aceptar una propuesta");
        }

        Propuesta propuesta = propuestaService.getPropuestaById(propuestaId);
        propuesta.setEstado(EstadoPropuesta.ACEPTADA);
        tarea.setEstadoTarea(EstadoTarea.EN_PROCESO);
        tarea.setFreelance(propuesta.getFreelance());

    }

    @Override
    @Transactional
    public void declinePropuesta(Long tareaId ,Long propuestaId) {
        Usuario contratador = usuarioService.getLoggedUser();
        Tarea tarea = getTaskById(tareaId);
        if(!(Objects.equals(contratador.getId(), tarea.getContratador().getId()))){
            throw new OnlyUserCanHandlerPropuestaException("Solo el usuario contratador puede rechazar una propuesta");
        }
        Propuesta propuesta = propuestaService.getPropuestaById(propuestaId);
        propuesta.setEstado(EstadoPropuesta.RECHAZADA);
        propuesta.setStatus(Boolean.FALSE);
    }
    @Override
    @Transactional
    public void finishTarea(Long tareaId, Long propuestaId){
        Usuario contratador = usuarioService.getLoggedUser();
        Tarea tarea = getTaskById(tareaId);
        Propuesta propuesta = propuestaService.getPropuestaById(propuestaId);
        if(Objects.equals(propuesta.getFreelance().getId(), tarea.getFreelance().getId())){
            throw new OnlyFreelanceCanFinishTask("Solo el freelance asignado puede finalizar la tarea");
        }
        tarea.setEstadoTarea(EstadoTarea.COMPLETADA);

    }

}
