package com.api.backend.Services;

import com.api.backend.entities.DTO.TareaRequest;
import com.api.backend.entities.Tarea;
import org.springframework.scheduling.config.Task;

import java.util.List;

public interface TareaService {
    List<Tarea> findAllTasks();

    Tarea saveTasks(TareaRequest task, Long userId);

    Tarea deleteTasksById(Long id);

    Tarea deleteTarea(Tarea task);

    Tarea updateTask(TareaRequest task,Long id);
}
