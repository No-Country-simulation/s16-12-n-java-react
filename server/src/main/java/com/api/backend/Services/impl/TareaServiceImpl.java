package com.api.backend.Services.impl;

import com.api.backend.DTO.Tarea.TareaDTO;
import com.api.backend.DTO.Tarea.TareaResponseDTO;
import com.api.backend.DTO.Tarea.TareaUpdateDTO;
import com.api.backend.Exception.ResourceNotFoundException;
import com.api.backend.Exception.TaskInProgressException;
import com.api.backend.Exception.TaskNotFoundException;
import com.api.backend.Mappers.TareaMapper;
import com.api.backend.Repository.TareaRepository;
import com.api.backend.Services.TareaService;
import com.api.backend.entities.Tarea;
import com.api.backend.entities.Usuario;
import com.api.backend.entities.enums.EstadoTarea;

import lombok.RequiredArgsConstructor;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import java.time.LocalDate;
import java.util.Optional;
import java.util.stream.Collectors;


@Service
@RequiredArgsConstructor
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
        Usuario user = usuarioService.getUserByEmail();
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
    public  Page<TareaResponseDTO> findTaskByUserId(Pageable pageable) {
        Long contratadorId =  usuarioService.getUserByEmail().getId();
        Page<Tarea> tasks = tareaRepository.findByContratadorId(pageable, contratadorId);
        if (tasks.isEmpty()) throw new TaskNotFoundException("No hay tareas");
        return tasks.map(tareaMapper :: toTareaDTO);
    }


}
