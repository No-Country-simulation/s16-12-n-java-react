package com.api.backend.Config.Application;

import com.api.backend.DTO.Tarea.TareaDTO;
import com.api.backend.DTO.Tarea.TareaResponseDTO;
import com.api.backend.Mappers.TareaMapper;
import com.api.backend.entities.Tarea;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Service;

@Configuration
public class AppConfig {

    @Service
    public class TareaService {

        @Autowired
        private TareaMapper tareaMapper;

        public Tarea createTarea(TareaDTO tareaDTO) {
            // ... (Perform additional validation or processing as needed)
            Tarea tarea = tareaMapper.toTarea(tareaDTO);
            // ... (Save the Tarea object to the database or perform other actions)
            return tarea;
        }

        public TareaResponseDTO getTareaDTO(Tarea tarea) {
            // ... (Perform additional validation or processing as needed)
            TareaResponseDTO tareaResponseDTO = tareaMapper.toTareaDTO(tarea);
            return tareaResponseDTO;
        }
    }

}
