package com.api.backend.Controller;

import com.api.backend.DTO.Error.ErrorResponseDto;
import com.api.backend.DTO.Propuesta.PropuestaDTO;
import com.api.backend.DTO.Propuesta.PropuestaResponseDTO;
import com.api.backend.Services.impl.PropuestaServiceImpl;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/propuestas")
@RequiredArgsConstructor
@SecurityRequirement(name = "bearer-key")
@Tag(name = "Propuesta")
public class PropuestaController {

    private final PropuestaServiceImpl propuestaService;

    @Operation(
            summary = "Endpoint para crear una propuesta",
            description = "Este endpoint solo puede ser consultado por usuarios registrados y logueados, y requiere para su autenticación del ingreso del JWT que se obtiene al loguearse. Se deben ingresar los datos de la propuesta, incluyendo la tarea asociada, el usuario contratador y el usuario freelance.",
            method = "POST",
            requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(
                    description = "Los elementos de este body son requeridos. Se deben ingresar los datos de la propuesta, incluyendo la tarea asociada (id), el usuario contratador (id) y el usuario freelance (id).",
                    content = @Content(schema = @Schema(implementation = PropuestaDTO.class))
            ),
            responses = {
                    @ApiResponse(
                            responseCode = "200",
                            description = "Success. En caso de éxito, devuelve un Json con los datos de la propuesta creada.",
                            content = @Content(schema = @Schema(implementation = PropuestaResponseDTO.class,
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
                            description = "Forbidden. En caso de no contar con los permisos necesarios o cuando existen excepciones no controladas devuelve un error de permisos.",
                            content = @Content(schema = @Schema(implementation = RestResponseEntityExceptionHandler.class))
                    )
            }
    )
    @PostMapping("/save")
    public ResponseEntity<PropuestaResponseDTO> createPropuesta(@RequestBody @Valid PropuestaDTO propuestaDTO) {
        PropuestaResponseDTO propuesta = propuestaService.savePropuesta(propuestaDTO);
        return ResponseEntity.ok().body(propuesta);
    }

    @Operation(
            summary = "Endpoint para listar todas las propuestas",
            description = "Este endpoint solo puede ser consultado por usuarios registrados y logueados, y requiere para su autenticación del ingreso del JWT que se obtiene al loguearse. Se listan todas las propuestas existentes en el sistema.",
            method = "GET",
            responses = {
                    @ApiResponse(
                            responseCode = "200",
                            description = "Success. En caso de éxito, devuelve un Json con los datos de las propuestas listadas.",
                            content = @Content(schema = @Schema(implementation = Page.class,
                                    contentMediaType = MediaType.APPLICATION_JSON_VALUE))
                    ),
                    @ApiResponse(
                            responseCode = "403",
                            description = "Forbidden. En caso de no contar con los permisos necesarios o cuando existen excepciones no controladas devuelve un error de permisos.",
                            content = @Content(schema = @Schema(implementation = RestResponseEntityExceptionHandler.class))
                    )
            }
    )

    @GetMapping("/findAll")
    public ResponseEntity<Page<PropuestaResponseDTO>> findAllTareas(Pageable pageable) {
        Page<PropuestaResponseDTO> propuestas = propuestaService.findAllPropuestas(pageable);
        return ResponseEntity.ok().body(propuestas);
    }
}


