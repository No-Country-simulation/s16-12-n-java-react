package com.api.backend.Controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.api.backend.DTO.Auth.AuthResponseDto;
import com.api.backend.DTO.Auth.LoginRequestDto;
import com.api.backend.DTO.Auth.RegisterRequestDto;
import com.api.backend.DTO.Error.ErrorResponseDto;
import com.api.backend.Services.impl.UsuarioServiceImpl;

import org.springframework.http.MediaType;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("api/usuario/auth")
@RequiredArgsConstructor
@Tag(name = "Usuario")
public class UsuarioController {

    private final UsuarioServiceImpl usuarioService;



     @Operation(
            summary="Endpoint loguear un usuario",
            description = "Endpoint para loguearse",
            method = "POST",
            responses = {
                    @ApiResponse(
                            responseCode = "200",
                            description = "Success. En caso de éxito, devuelve un  Json con el token",
                            content = @Content(schema = @Schema(implementation = AuthResponseDto.class,
                                    contentMediaType = MediaType.APPLICATION_JSON_VALUE
                            ))
                    ),
                    @ApiResponse(
                            responseCode = "400",
                            description = "Bad Request. En caso de error en el ingreso de datos, devuelve, en la mayoría de los casos, un Json que contiene el campo del error y una descripción del mismo.",
                            content = @Content(schema = @Schema(implementation = ErrorResponseDto.class,
                                    contentMediaType = MediaType.APPLICATION_JSON_VALUE
                            ))
                    ),
                    @ApiResponse(
                            responseCode = "403",
                            description = "Forbidden. En caso excepciones no controladas devuelve un error de permisos.",
                            content = @Content(schema = @Schema(implementation = RestResponseEntityExceptionHandler.class
                            ))
                    )
            }
    )
    @PostMapping(value = "login")
    public ResponseEntity<AuthResponseDto> login(@Valid @RequestBody LoginRequestDto loginRequestDto) {
        return ResponseEntity.ok(usuarioService.login(loginRequestDto));
    }
    
    @Operation(
            summary="Endpoint registrar  un usuario",
            description = "Endpoint para registrarse",
            method = "POST",
            responses = {
                    @ApiResponse(
                            responseCode = "200",
                            description = "Success. En caso de éxito, devuelve un  Json con el token",
                            content = @Content(schema = @Schema(implementation = AuthResponseDto.class,
                                    contentMediaType = MediaType.APPLICATION_JSON_VALUE
                            ))
                    ),
                    @ApiResponse(
                            responseCode = "400",
                            description = "Bad Request. En caso de error en el ingreso de datos, devuelve, en la mayoría de los casos, un Json que contiene el campo del error y una descripción del mismo.",
                            content = @Content(schema = @Schema(implementation = ErrorResponseDto.class,
                                    contentMediaType = MediaType.APPLICATION_JSON_VALUE
                            ))
                    ),
                    @ApiResponse(
                            responseCode = "403",
                            description = "Forbidden. En caso excepciones no controladas devuelve un error de permisos.",
                            content = @Content(schema = @Schema(implementation = RestResponseEntityExceptionHandler.class
                            ))
                    )
            }
    )
     @PostMapping(value = "register")
    public ResponseEntity<AuthResponseDto> register(@Valid @RequestBody RegisterRequestDto registerRequestDto){
        return  ResponseEntity.ok(usuarioService.register(registerRequestDto));
    }
}
