package com.api.backend.Controller;

import com.api.backend.DTO.Error.ErrorResponseDto;
import com.api.backend.DTO.Propuesta.PropuestaDTO;
import com.api.backend.DTO.Propuesta.PropuestaResponseDTO;
import com.api.backend.DTO.Propuesta.PropuestaUpdateDTO;
import com.api.backend.DTO.Tarea.TareaResponseDTO;
import com.api.backend.Services.PropuestaService;
import com.api.backend.Services.impl.PropuestaServiceImpl;
import com.api.backend.entities.Propuesta;
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

    private final PropuestaService propuestaService;

    @Operation(
            summary = "Endpoint para crear una propuesta",
            description = "Este endpoint solo puede ser consultado por usuarios registrados y logueados, y requiere para su autenticación del ingreso del JWT que se obtiene al loguearse. Se deben ingresar la descripcion de la propuesta, incluyendo el id de la tarea asociada, ",
            method = "POST",
            requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(
                    description = "Los elementos de este body son requeridos. Se deben ingresar los datos de la propuesta, incluyendo la tarea asociada (id)",
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
            summary = "Endpoint para listar todas las propuestas asociadas a una tarea",
            description = "Este endpoint solo puede ser consultado por usuarios registrados y logueados, y requiere para su autenticación del ingreso del JWT que se obtiene al loguearse. Se listan todas las propuestas asociadas a una tarea.",
            method = "GET",
            responses = {
                    @ApiResponse(
                            responseCode = "200",
                            description = "Success. En caso de éxito, devuelve un Json con los datos de las propuestas listadas.",
                            content = @Content(schema = @Schema(implementation = Page.class,
                                    contentMediaType = MediaType.APPLICATION_JSON_VALUE))
                    ),
                    @ApiResponse(
                            responseCode = "404",
                            description = "Not found. En caso de no encontrar propuesta para esta tarea",
                            content = @Content(schema = @Schema(implementation = RestResponseEntityExceptionHandler.class))
                    ),
                    @ApiResponse(
                            responseCode = "403",
                            description = "Forbidden. En caso de no contar con los permisos necesarios o cuando existen excepciones no controladas devuelve un error de permisos.",
                            content = @Content(schema = @Schema(implementation = RestResponseEntityExceptionHandler.class))
                    )
            }
    )

    @GetMapping("/findByTarea/{tareaId}")
    public ResponseEntity<Page<PropuestaResponseDTO>> findAllPropuestasByTarea(Pageable pageable, @PathVariable Long tareaId) {
        return ResponseEntity.ok().body(propuestaService.getPropuestasByTareaId(pageable, tareaId));
    }

    @Operation(
            summary = "Endpoint para eliminar una propuesta",
            description = "Este endpoint solo puede ser usado por usuarios registrados y logueados, y requiere para su autenticación del ingreso del JWT que se obtiene al loguearse. Se elimina la propuesta asociada al ID especificado.",
            method = "DELETE",
            responses = {
                    @ApiResponse(
                            responseCode = "204",
                            description = "No Content. En caso de éxito, no devuelve ningún contenido.",
                            content = @Content(schema = @Schema(implementation = Void.class))
                    ),
                    @ApiResponse(
                            responseCode = "403",
                            description = "Forbidden. En caso de no contar con los permisos necesarios o cuando existen excepciones no controladas devuelve un error de permisos.",
                            content = @Content(schema = @Schema(implementation = RestResponseEntityExceptionHandler.class))
                    ),
                    @ApiResponse(
                            responseCode = "404",
                            description = "Not Found. En caso de que la propuesta no exista en el sistema.",
                            content = @Content(schema = @Schema(implementation = ErrorResponseDto.class,
                                    contentMediaType = MediaType.APPLICATION_JSON_VALUE
                            ))
                    )
            }
    )
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePropuesta(@PathVariable Long id) {
        propuestaService.deletePropuesta(id);
        return ResponseEntity.noContent().build();
    }

    @Operation(
            summary = "Endpoint para actualizar una propuesta",
            description = "Este endpoint solo puede ser consultado por usuarios registrados y logueados, y requiere para su autenticación del ingreso del JWT que se obtiene al loguearse. Se actualiza la propuesta con el ID especificado.",
            method = "PUT",
            requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(
                    description = "Los elementos de este body son requeridos. Se deben ingresar los datos de la propuesta a actualizar, El id de la tarea sea pasa por la url",
                    content = @Content(schema = @Schema(implementation = PropuestaDTO.class))
            ),
            responses = {
                    @ApiResponse(
                            responseCode = "200",
                            description = "Success. En caso de éxito, devuelve un Json con los datos de la propuesta actualizada.",
                            content = @Content(schema = @Schema(implementation = PropuestaUpdateDTO.class,
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
                    ),
                    @ApiResponse(
                            responseCode = "404",
                            description = "Not Found. En caso de que la propuesta no exista en el sistema.",
                            content = @Content(schema = @Schema(implementation = ErrorResponseDto.class,
                                    contentMediaType = MediaType.APPLICATION_JSON_VALUE
                            ))
                    )
            }
    )
    @PutMapping("/{id}")
    public ResponseEntity<PropuestaResponseDTO> updatePropuesta(@PathVariable Long id, @Valid @RequestBody PropuestaUpdateDTO propuestaUpdateDTO) {
        return ResponseEntity.ok(propuestaService.updatePropuesta(id,propuestaUpdateDTO));
    }

    @Operation(
            summary="Endpoint que busca todos los datos por id de una propuesta ",
            description = "Este endpoint solo puede ser consultado por usuarios registrados y logueados, y requiere para su autenticación del ingreso del JWT que se obtiene al loguearse. Se pasa el id de la propuesta por la url.",
            method = "GET",
            responses = {
                    @ApiResponse(
                            responseCode = "200",
                            description = "Success. En caso de éxito, se retorna los datos de la tarea",
                            content = @Content(schema = @Schema(implementation = TareaResponseDTO.class,
                                    contentMediaType = MediaType.APPLICATION_JSON_VALUE
                            ))
                    ),
                    @ApiResponse(
                            responseCode = "404",
                            description = "Not found. En caso de no encontrar la tarea",
                            content = @Content(schema = @Schema(implementation = RestResponseEntityExceptionHandler.class
                            ))
                    ),
                    @ApiResponse(
                            responseCode = "403",
                            description = "Forbidden. En caso de no contar con los permisos necesarios o de  existir excepciones no controladas devuelve un error de permisos.",
                            content = @Content(schema = @Schema(implementation = RestResponseEntityExceptionHandler.class
                            ))
                    )
            }
    )

    @GetMapping("/findById/{id}")
    public ResponseEntity<PropuestaResponseDTO> findPropuestaById(@PathVariable Long id){
        return ResponseEntity.ok(propuestaService.findPropuestaById(id));
    }

    @Operation(
            summary="Endpoint que busca todos las propuestas creadas por un usuario",
            description = "Este endpoint solo puede ser usado por usuarios registrados y logueados, y requiere para su autenticación del ingreso del JWT que se obtiene al loguearse, es super necesario porque asi el back identifica que tareas hay que traer",
            method = "GET",
            responses = {
                    @ApiResponse(
                            responseCode = "200",
                            description = "Success. En caso de éxito, se retorna los datos de las propuestas",
                            content = @Content(schema = @Schema(implementation = PropuestaResponseDTO.class,
                                    contentMediaType = MediaType.APPLICATION_JSON_VALUE
                            ))
                    ),
                    @ApiResponse(
                            responseCode = "404",
                            description = "No Found. En caso de no encontrar propuestas",
                            content = @Content(schema = @Schema(implementation = RestResponseEntityExceptionHandler.class
                            ))
                    ),
                    @ApiResponse(
                            responseCode = "403",
                            description = "Forbidden. en caso de  existir excepciones no controladas devuelve un error de permisos.",
                            content = @Content(schema = @Schema(implementation = RestResponseEntityExceptionHandler.class
                            ))
                    )
            }
    )
    @GetMapping("findByFreelance")
    public ResponseEntity<Page<PropuestaResponseDTO>> findByFreelanceId(Pageable pageable){
        return ResponseEntity.ok(propuestaService.getPropuestaByFreelancerId(pageable));
    }



}


