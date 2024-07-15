package com.api.backend.Services;

import com.api.backend.entities.DTO.Auth.AuthResponseDto;
import com.api.backend.entities.DTO.Auth.LoginRequestDto;
import com.api.backend.entities.DTO.Auth.RegisterRequestDto;

import jakarta.validation.Valid;

public interface UsuarioService {
    AuthResponseDto login(@Valid LoginRequestDto loginRequestDto);
    AuthResponseDto register(@Valid RegisterRequestDto registerRequestDto);

}
