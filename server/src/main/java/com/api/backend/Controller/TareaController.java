package com.api.backend.Controller;

import com.api.backend.DTO.Tarea.TareaDTO;
import com.api.backend.DTO.Tarea.TareaResponseDTO;
import com.api.backend.Services.impl.TareaServiceImpl;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/tareas")
@RequiredArgsConstructor
public class TareaController {
    
    private final TareaServiceImpl tareaService;

    @PostMapping("/save")
    public ResponseEntity<TareaResponseDTO> createTarea(@RequestBody @Valid TareaDTO tareaRequest) {
        TareaResponseDTO tarea = tareaService.saveTasks(tareaRequest);
        return ResponseEntity.ok().body(tarea);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<TareaResponseDTO> updateTarea(@RequestBody TareaDTO tareaRequest, @PathVariable Long id) {
        TareaResponseDTO tarea = tareaService.updateTask(tareaRequest, id);
        return ResponseEntity.ok().body(tarea);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteTarea(@PathVariable Long id) {
        tareaService.deleteTasksById(id);
        return ResponseEntity.ok().body("Deleted tarea with ID: " + id);
    }

    @GetMapping("/findAll")
    public ResponseEntity<List<TareaResponseDTO>> findAllTareas() {
        List<TareaResponseDTO> tareas = tareaService.findAllTasks();
        return ResponseEntity.ok().body(tareas);
    }
}
