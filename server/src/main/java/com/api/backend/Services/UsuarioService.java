package com.api.backend.Services;

import com.api.backend.DTO.Auth.AuthResponseDto;
import com.api.backend.DTO.Auth.LoginRequestDto;
import com.api.backend.DTO.Auth.RegisterRequestDto;
import com.api.backend.entities.Usuario;

import jakarta.validation.Valid;

public interface UsuarioService {
    AuthResponseDto login(@Valid LoginRequestDto loginRequestDto);
    AuthResponseDto register(@Valid RegisterRequestDto registerRequestDto);
    Usuario getUserByEmail();
}
