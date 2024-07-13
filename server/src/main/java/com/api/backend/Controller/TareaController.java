package com.api.backend.Controller;

import com.api.backend.Services.TareaService;
import com.api.backend.entities.DTO.TareaRequest;
import com.api.backend.entities.Tarea;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/tareas")
public class TareaController {
    @Autowired
    TareaService tareaService;

    @PostMapping("/save")
    public ResponseEntity<Tarea> createTarea(@RequestBody TareaRequest tareaRequest, @RequestParam Long userId) {
        Tarea tarea = tareaService.saveTasks(tareaRequest, userId);
        return ResponseEntity.ok().body(tarea);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Tarea> updateTarea(@RequestBody TareaRequest tareaRequest, @PathVariable Long id) {
        Tarea tarea = tareaService.updateTask(tareaRequest, id);
        return ResponseEntity.ok().body(tarea);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteTarea(@PathVariable Long id) {
        Tarea deletedTarea = tareaService.deleteTasksById(id);
        return ResponseEntity.ok().body("Deleted tarea with ID: " + id);
    }

    @GetMapping("/findAll")
    public ResponseEntity<List<Tarea>> findAllTareas() {
        List<Tarea> tareas = tareaService.findAllTasks();
        return ResponseEntity.ok().body(tareas);
    }
}
