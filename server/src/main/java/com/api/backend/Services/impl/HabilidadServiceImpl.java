package com.api.backend.Services.impl;


import org.springframework.stereotype.Service;

import com.api.backend.Exception.HabilidadNotFoundExcepcion;
import com.api.backend.Repository.HablidadRepository;
import com.api.backend.Services.HabilidadService;
import com.api.backend.entities.Habilidad;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class HabilidadServiceImpl implements HabilidadService {

    private final HablidadRepository hablidadRepository;

    @Override
    public Habilidad findByName(String name) {
        if(!hablidadRepository.existsByNombre(name)){
            throw new HabilidadNotFoundExcepcion("La habilidad: "+ name +  " no es valida");
        }
        return hablidadRepository.findByNombre(name);
        
    }

}
