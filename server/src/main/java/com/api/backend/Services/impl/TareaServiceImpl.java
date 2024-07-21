package com.api.backend.Services.impl;

import com.api.backend.DTO.Tarea.TareaDTO;
import com.api.backend.DTO.Tarea.TareaResponseDTO;
import com.api.backend.Exception.ResourceNotFoundException;
import com.api.backend.Mappers.TareaMapper;
import com.api.backend.Repository.TareaRepository;
import com.api.backend.Services.TareaService;
import com.api.backend.entities.Habilidad;
import com.api.backend.entities.Tarea;
import com.api.backend.entities.Usuario;
import com.api.backend.entities.enums.EstadoTarea;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;


@Service
@RequiredArgsConstructor
public class TareaServiceImpl implements TareaService {

    
    private final TareaRepository tareaRepository;
    private final UsuarioServiceImpl usuarioService;
    private final HabilidadServiceImpl habilidadService;
    private final CategoriaServiceImpl categoriaService;
    private final TareaMapper tareaMapper;
    
    

    @Override
    public List<TareaResponseDTO> findAllTasks() {
        List<Tarea> task = tareaRepository.findAllByStatusTrue();
        if (task.isEmpty()) throw new ResourceNotFoundException("No hay tareas");
        return task.stream().map(tareaMapper::toTareaDTO).toList();
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
    public TareaResponseDTO updateTask(TareaDTO taskRequest, Long id) {
        Tarea existingTarea = tareaRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Task with id " + taskRequest.getId() + " not found"));
        existingTarea.setTitulo(taskRequest.getTitulo());
        existingTarea.setDescripcion(taskRequest.getDescripcion());
        existingTarea.setPresupuesto(taskRequest.getPresupuesto());
        existingTarea.setPlazo(taskRequest.getPlazo());
        existingTarea.setHabilidades(taskRequest
        .getNombreHabilidades()
        .stream()
        .map(habilidadService:: findByName)
        .toList());
        existingTarea.setCategoria(categoriaService.findCategoriaByName(taskRequest.getNombreCategoria()));
        return tareaMapper.toTareaDTO(existingTarea);
    }

}
