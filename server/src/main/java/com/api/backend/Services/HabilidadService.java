package com.api.backend.Services;

import com.api.backend.entities.Habilidad;

public interface HabilidadService {
    Habilidad findByName(String name);

}
