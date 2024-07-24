package com.api.backend.Services;

import com.api.backend.DTO.Tarea.TareaDTO;
import com.api.backend.DTO.Tarea.TareaResponseDTO;
import com.api.backend.DTO.Tarea.TareaUpdateDTO;


import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface TareaService {
    Page<TareaResponseDTO> findAllTasks(Pageable pageable);

    TareaResponseDTO saveTasks(TareaDTO task);

    void deleteTasksById(Long id);

    TareaResponseDTO updateTask(TareaUpdateDTO task, Long id);

    TareaResponseDTO findTaskById(Long id);

   Page<TareaResponseDTO> findTaskByUserId(Pageable pageable);
}
