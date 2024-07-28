package com.api.backend.Services;

import com.api.backend.DTO.Tarea.*;


import com.api.backend.entities.Tarea;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface TareaService {
    Page<TareaResponseDTO> findAllTasks(Pageable pageable);

    TareaResponseDTO saveTasks(TareaDTO task);

    void deleteTasksById(Long id);

    TareaResponseDTO updateTask(TareaUpdateDTO task, Long id);

    TareaResponseDTO findTaskById(Long id);
    Tarea getTaskById(Long id);
    Page<TareaResponseDTO> findTaskByUserId(Pageable pageable);
    Page<TareaResponseDTO> findTaskByCategoria (TareaFindCategoriaDTO categoria, Pageable pageable);

    Page<TareaResponseDTO> findTaskByRangePrice(TareaRangePriceDTO rangePrice, Pageable pageable);

    Page<TareaResponseDTO> findTaskByDatePublicacion(TareaDateDTO datePublicacion, Pageable pageable);

    Page<TareaResponseDTO> findTaskByRangeDate(TareaDateDTO rangeDate, Pageable pageable);
    void acceptPropuesta(Long tareaId, Long propuestaId);
    void declinePropuesta(Long tareaId , Long propuestaId);
    void finishTarea(Long tareaId, Long propuestaId);
}
