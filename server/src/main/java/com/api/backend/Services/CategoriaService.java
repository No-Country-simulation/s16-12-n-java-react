package com.api.backend.Services;

import com.api.backend.entities.Categoria;

public interface CategoriaService {
    Categoria findCategoriaByName(String name);

}
