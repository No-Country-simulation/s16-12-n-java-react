package com.api.backend.Controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.api.backend.Services.impl.UsuarioServiceImpl;
import com.api.backend.entities.DTO.Auth.AuthResponseDto;
import com.api.backend.entities.DTO.Auth.LoginRequestDto;
import com.api.backend.entities.DTO.Auth.RegisterRequestDto;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("api/usuario/auth")
@RequiredArgsConstructor
public class UsuarioController {

    private final UsuarioServiceImpl usuarioService;

    @PostMapping(value = "login")
    public ResponseEntity<AuthResponseDto> login(@Valid @RequestBody LoginRequestDto loginRequestDto) {
        return ResponseEntity.ok(usuarioService.login(loginRequestDto));
    }

     @PostMapping(value = "register")
    public ResponseEntity<AuthResponseDto> register(@Valid @RequestBody RegisterRequestDto registerRequestDto){
        return  ResponseEntity.ok(usuarioService.register(registerRequestDto));
    }
}
