package com.api.backend.DTO.Auth;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public record LoginRequestDto(
        @NotBlank
        @Email
        String email,
        @NotBlank
        String contrasena
) {

}
