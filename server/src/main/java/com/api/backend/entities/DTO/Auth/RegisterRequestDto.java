package com.api.backend.entities.DTO.Auth;

import jakarta.validation.constraints.NotBlank;


public record RegisterRequestDto(  
    @NotBlank
    String email,
    @NotBlank
    String contrasena,
    @NotBlank
    String nombre) {

}
