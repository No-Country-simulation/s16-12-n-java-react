package com.api.backend.Services;

import com.api.backend.DTO.Tarea.TareaDTO;
import com.api.backend.DTO.Tarea.TareaResponseDTO;

import java.util.List;

public interface TareaService {
    List<TareaResponseDTO> findAllTasks();

    TareaResponseDTO saveTasks(TareaDTO task);

    void deleteTasksById(Long id);

    TareaResponseDTO updateTask(TareaDTO task, Long id);
}
