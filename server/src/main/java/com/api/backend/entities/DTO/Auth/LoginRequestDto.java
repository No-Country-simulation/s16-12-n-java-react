package com.api.backend.entities.DTO.Auth;

import jakarta.validation.constraints.NotBlank;

public record LoginRequestDto(
        @NotBlank
        String email,
        @NotBlank
        String contrasena
) {

}
