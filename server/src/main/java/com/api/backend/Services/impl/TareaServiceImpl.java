package com.api.backend.Services.impl;

import com.api.backend.Exception.ResourceNotFoundException;
import com.api.backend.Repository.TareaRepository;
import com.api.backend.Repository.UsuarioRepository;
import com.api.backend.Services.TareaService;
import com.api.backend.entities.DTO.TareaRequest;
import com.api.backend.entities.Tarea;
import com.api.backend.entities.Usuario;
import com.api.backend.entities.enums.EstadoTarea;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.config.Task;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

@Service
public class TareaServiceImpl implements TareaService {

    @Autowired
    TareaRepository tareaRepository;
    @Autowired
    UsuarioRepository userRepository;

    @Override
    public List<Tarea> findAllTasks() {
        List<Tarea> task = tareaRepository.findAll();
        if (task.isEmpty()) throw new ResourceNotFoundException("Tasks not found");
        return task;
    }

    @Override
    public Tarea saveTasks(TareaRequest task, Long userId) {
        Optional<Usuario> user = userRepository.findById(userId);
        if (user.isEmpty()) throw new ResourceNotFoundException("User with id " + userId + " not found");
        return tareaRepository.save(Tarea.builder()
                .descripcion(task.getDescripcion())
                .usuario((Usuario) user.get())
                .fechaPublicacion(task.getFechaPublicacion())
                .presupuesto(task.getPresupuesto())
                .plazo(task.getPlazo())
                .estadoTarea(EstadoTarea.EM_PROCESO)
                .titulo(task.getTitulo())
                .build());
    }

    @Override
    public Tarea deleteTasksById(Long id) {
        Tarea tarea = tareaRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Task with id " + id + " not found"));
        tareaRepository.delete(tarea);
        return tarea;
    }

    @Override
    public Tarea deleteTarea(Tarea task) {
        return null;
    }

    @Override
    public Tarea updateTask(TareaRequest taskRequest, Long id) {
        Tarea existingTarea = tareaRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Task with id " + id + " not found"));

        EstadoTarea estadoTarea = EstadoTarea.valueOf(taskRequest.getEstadoTarea());
        existingTarea.setDescripcion(taskRequest.getDescripcion());
        existingTarea.setFechaPublicacion(taskRequest.getFechaPublicacion());
        existingTarea.setPresupuesto(taskRequest.getPresupuesto());
        existingTarea.setPlazo(taskRequest.getPlazo());
        existingTarea.setEstadoTarea(estadoTarea);
        return tareaRepository.save(existingTarea);
    }
}
