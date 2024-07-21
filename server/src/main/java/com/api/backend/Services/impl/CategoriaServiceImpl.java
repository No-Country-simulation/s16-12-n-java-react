package com.api.backend.Services.impl;

import org.springframework.stereotype.Service;

import com.api.backend.Exception.CategoryNotFoundExcepcion;
import com.api.backend.Repository.CategoriaRepository;
import com.api.backend.Services.CategoriaService;
import com.api.backend.entities.Categoria;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CategoriaServiceImpl implements CategoriaService {

    private final CategoriaRepository categoriaRepository;

    @Override
    public Categoria findCategoriaByName(String name) {
        if (!categoriaRepository.existsByNombre(name)){
            throw new CategoryNotFoundExcepcion("No existe la categoria: "+ name);
        }
        return categoriaRepository.findByNombre(name);
    }



}
