package com.api.backend.Controller;


import com.api.backend.DTO.Error.ErrorResponseDto;
import com.api.backend.DTO.Tarea.TareaDTO;
import com.api.backend.DTO.Tarea.TareaResponseDTO;
import com.api.backend.DTO.Tarea.TareaUpdateDTO;
import com.api.backend.Services.impl.TareaServiceImpl;

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
@RequestMapping("api/v1/tareas")
@RequiredArgsConstructor
@SecurityRequirement(name = "bearer-key")
@Tag(name = "Tarea")
public class TareaController {
    
    private final TareaServiceImpl tareaService;


      @Operation(
            summary="Endpoint para crear una tarea",
            description = "Este endpoint solo puede ser consultado por usuarios registrados y logueados, y requiere para su autenticación del ingreso del JWT que se obtiene al loguearse",
            method = "POST",
            requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(
                description = "Los elementos de este body son requeridos, se debe ingresar una categoria valida sin ñ y sin acento (Diseno Grafico, Diseno de Interfaces, Animacion y Multimedia) y una habilidad valida (Adobe Photoshop, Adobe Illustrator, Figma, Sketch, Prototyping, Wireframing, Animacion 3D,Video Editing)",
                content= @Content(schema = @Schema(implementation = TareaDTO.class))
            ),
            responses = {
                    @ApiResponse(
                            responseCode = "200",
                            description = "Success. En caso de éxito, devuelve un  Json con los datos de la tarea creado, incluyendo los datos de la persona que creo la tarea",
                            content = @Content(schema = @Schema(implementation = TareaResponseDTO.class,
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
                            content = @Content(schema = @Schema(implementation = RestResponseEntityExceptionHandler.class
                            ))
                    )
            }
    )
    @PostMapping("/save")
    public ResponseEntity<TareaResponseDTO> createTarea(@RequestBody @Valid TareaDTO tareaRequest) {
        TareaResponseDTO tarea = tareaService.saveTasks(tareaRequest);
        return ResponseEntity.ok().body(tarea);
    }

    @Operation(
        summary="Endpoint para editar una tarea",
        description = "Este endpoint solo puede ser consultado por usuarios registrados y logueados, y requiere para su autenticación del ingreso del JWT que se obtiene al loguearse. Tambien se necesita pasar el id de la tarea a editar por la url",
        method = "PUT",
        requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(
            description = "Los elementos de este body no son requeridos, se puede pasar solo el elemento que se quiera editar, se debe ingresar una categoria valida sin ñ y sin acento (Diseno Grafico, Diseno de Interfaces, Animacion y Multimedia) y una habilidad valida (Adobe Photoshop, Adobe Illustrator, Figma, Sketch, Prototyping, Wireframing, Animacion 3D,Video Editing)",
            content= @Content(schema = @Schema(implementation = TareaUpdateDTO.class))
        ),
        responses = {
                @ApiResponse(
                        responseCode = "200",
                        description = "Success. En caso de éxito, devuelve un  Json con los datos de la tarea editada, incluyendo los datos de la persona que edito la tarea",
                        content = @Content(schema = @Schema(implementation = TareaResponseDTO.class,
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
                        description ="Forbidden. En caso de no contar con los permisos necesarios o cuando existen excepciones no controladas devuelve un error de permisos.",
                        content = @Content(schema = @Schema(implementation = RestResponseEntityExceptionHandler.class
                        ))
                )
        }
)
    @PutMapping("/update/{id}")
    public ResponseEntity<TareaResponseDTO> updateTarea(@RequestBody TareaUpdateDTO tareaRequest, @PathVariable Long id) {
        TareaResponseDTO tarea = tareaService.updateTask(tareaRequest, id);
        return ResponseEntity.ok().body(tarea);
    }
    @Operation(
        summary="Endpoint que elimina una tarea",
        description = "Este endpoint solo puede ser usado por usuarios registrados y logueados, y requiere para su autenticación del ingreso del JWT que se obtiene al loguearse. Tambien se necesita pasar el id de la tarea a eliminar por la url",
        method = "DELETE",
        responses = {
                @ApiResponse(
                        responseCode = "204",
                        description = "No Content. Se muestra cuando se elimino la tarea",
                        content = @Content(schema = @Schema(implementation = RestResponseEntityExceptionHandler.class
                        ))
                ),
                @ApiResponse(
                        responseCode = "404",
                        description = "Not Found. Se muestra cuando el id de la tarea no existe",
                        content = @Content(schema = @Schema(implementation = RestResponseEntityExceptionHandler.class
                        ))
                ),
                @ApiResponse(
                        responseCode = "403",
                        description = "Forbidden. En caso de no contar con los permisos necesarios o cuando existen excepciones no controladas devuelve un error de permisos.",
                        content = @Content(schema = @Schema(implementation = RestResponseEntityExceptionHandler.class
                        ))
                )
        }
)
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteTarea(@PathVariable Long id) {
        tareaService.deleteTasksById(id);
        return ResponseEntity.noContent().build();
    }

    @Operation(
        summary="Endpoint que retorna todos los datos de todas las tareas ",
        description = "Este endpoint se puede consultar sin necesidad de autenticarse.",
        method = "GET",
        responses = {
                @ApiResponse(
                        responseCode = "200",
                        description = "Success. En caso de éxito, el resultado de la consulta se retorna páginado, es decir que la lista total se divide en páginas, comenzando en la página 0. Cada página retorna una lista del objeto paginado, de acuerdo a los parámetros que se hayan seleccionado. \n" +
                                    "Retorna un objeto, que dentro del atributo content, retorna una lista de objetos Tarea con sus datos. También retorna atributos extra sobre la petición. " +
                                    "Si no se encuentra ningún grupo con los parámetros ingresados, la lista retorna vaćía. Si no se colocan parámetros opcionales, el endpoint retorna todos los grupos de viaje de la base de datos. Los parámetros opcionales que no se van a utilizar no deben ingresarse en la consulta. " +
                                    "En caso de ingresarse, ya sea vacíos o nulos, la búsqueda se realizará con esos valores según corresponda" +
                                    "El atributo totalPages devuelve la cantidad de páginas en total que se encontraron. El atributo totalElements devuelve la cantidad total de travel grups(grupos de viaje" +
                                    ") encontrados con los parámetros ingresados",
                        content = @Content(schema = @Schema(implementation = TareaResponseDTO.class,
                                contentMediaType = MediaType.APPLICATION_JSON_VALUE
                        ))
                ),
                @ApiResponse(
                        responseCode = "204",
                        description = "No Content. En caso de no haber tareas creadas",
                        content = @Content(schema = @Schema(implementation = RestResponseEntityExceptionHandler.class
                        ))
                ),
                @ApiResponse(
                        responseCode = "403",
                        description = "Forbidden. En caso de no contar con los permisos necesarios o cuando existen excepciones no controladas devuelve un error de permisos.",
                        content = @Content(schema = @Schema(implementation = RestResponseEntityExceptionHandler.class
                        ))
                )
        }
)

    @GetMapping("/findAll")
    public ResponseEntity  <Page<TareaResponseDTO>> findAllTareas(Pageable pageable) {
        Page<TareaResponseDTO> tareas = tareaService.findAllTasks(pageable);
        return ResponseEntity.ok().body(tareas);
    }


    @Operation(
        summary="Endpoint que busca todos los datos por id de una tarea ",
        description = "Este endpoint puede ser consultado por usuarios sin registrar y sin loguear, y no requiere para su autenticación del ingreso del JWT que se obtiene al loguearse. Tambien se necesita pasar el id de la tarea a buscar por la url",
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
                        responseCode = "204",
                        description = "No Content. En caso de no encontrar la tarea",
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

    @GetMapping("findById/{id}")
    public ResponseEntity<TareaResponseDTO> findTareaById(@PathVariable Long id) {
        TareaResponseDTO tarea = tareaService.findTaskById(id);
        return ResponseEntity.ok().body(tarea);
    }

    @Operation(
            summary="Endpoint que busca todos las tareas creadas por un usuario",
            description = "Este endpoint solo puede ser usado por usuarios registrados y logueados, y requiere para su autenticación del ingreso del JWT que se obtiene al loguearse, es super necesario porque asi el back identifica que tareas hay que traer",
            method = "GET",
            responses = {
                    @ApiResponse(
                            responseCode = "200",
                            description = "Success. En caso de éxito, se retorna los datos de las tareas",
                            content = @Content(schema = @Schema(implementation = TareaResponseDTO.class,
                                    contentMediaType = MediaType.APPLICATION_JSON_VALUE
                            ))
                    ),
                    @ApiResponse(
                            responseCode = "204",
                            description = "No Content. En caso de no encontrar tareas",
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
    @GetMapping("findByUser")
    public ResponseEntity<Page<TareaResponseDTO>> findTaskByUser(Pageable pageable){
          return ResponseEntity.ok().body(tareaService.findTaskByUserId(pageable));
    }
    @Operation(
            summary="Endpoint acepta una propuesta para una tarea",
            description = "Este endpoint solo puede ser usado por usuarios registrados y logueados, y requiere para su autenticación del ingreso del JWT que se obtiene al loguearse, este cambia el estado de la propuesta y de la tarea, pide como parametros el id de la tarea y el id de la propuesta",
            method = "PUT",
            responses = {
                    @ApiResponse(
                            responseCode = "200",
                            description = "Success. En caso de éxito, se retorna un mensaje de exito",
                            content = @Content(schema = @Schema(implementation = String.class))
                    ),
                    @ApiResponse(
                            responseCode = "400",
                            description = "Bad Request. este puede pasar en caso de que el otro contratador que no fue el que creo la tarea intente aceptar propuestas",
                            content = @Content(schema = @Schema(implementation = RestResponseEntityExceptionHandler.class
                            ))
                    ),
                    @ApiResponse(
                            responseCode = "403",
                            description = "Forbidden.  En caso de no contar con los permisos necesarios o en caso de  existir excepciones no controladas devuelve un error de permisos.",
                            content = @Content(schema = @Schema(implementation = RestResponseEntityExceptionHandler.class
                            ))
                    )
            }
    )
    @PutMapping("acceptPropuesta")
    public ResponseEntity<String> acceptPropuesta(@RequestParam Long tareaId, @RequestParam Long propuestaId){
        tareaService.acceptPropuesta(tareaId,propuestaId);
        return ResponseEntity.ok().body("La propuesta se acepto con exito");
    }
    @Operation(
            summary="Endpoint rechaza una propuesta para una tarea",
            description = "Este endpoint solo puede ser usado por usuarios registrados y logueados, y requiere para su autenticación del ingreso del JWT que se obtiene al loguearse, este cambia el estado de la propuesta y de la tarea, pide como parametros el id de la tarea y el id de la propuesta",
            method = "PUT",
            responses = {
                    @ApiResponse(
                            responseCode = "200",
                            description = "Success. En caso de éxito, se retorna un mensaje de exito",
                            content = @Content(schema = @Schema(implementation = String.class))
                    ),
                    @ApiResponse(
                            responseCode = "400",
                            description = "Bad Request. este puede pasar en caso de que el otro contratador que no fue el que creo la tarea intente rechazar propuestas",
                            content = @Content(schema = @Schema(implementation = RestResponseEntityExceptionHandler.class
                            ))
                    ),
                    @ApiResponse(
                            responseCode = "403",
                            description = "Forbidden.  En caso de no contar con los permisos necesarios o en caso de  existir excepciones no controladas devuelve un error de permisos.",
                            content = @Content(schema = @Schema(implementation = RestResponseEntityExceptionHandler.class
                            ))
                    )
            }
    )
    @PutMapping("declinePropuesta")
    public ResponseEntity<String> declinePropuesta(@RequestParam Long tareaId, @RequestParam Long propuestaId){
        tareaService.declinePropuesta(tareaId,propuestaId);
        return ResponseEntity.ok().body("La propuesta se rechazo con exito");
    }
    @Operation(
            summary="Endpoint finaliza una propuesta para una tarea",
            description = "Este endpoint solo puede ser usado por usuarios registrados y logueados, y requiere para su autenticación del ingreso del JWT que se obtiene al loguearse, este cambia el estado de la propuesta y de la tarea, pide como parametros el id de la tarea y el id de la propuesta",
            method = "PUT",
            responses = {
                    @ApiResponse(
                            responseCode = "200",
                            description = "Success. En caso de éxito, se retorna un mensaje de exito",
                            content = @Content(schema = @Schema(implementation = String.class))
                    ),
                    @ApiResponse(
                            responseCode = "400",
                            description = "Bad Request. este puede pasar en caso de que otro freelance que no fue el que esta asignado a la tarea intente finalizar una propuesta",
                            content = @Content(schema = @Schema(implementation = RestResponseEntityExceptionHandler.class
                            ))
                    ),
                    @ApiResponse(
                            responseCode = "403",
                            description = "Forbidden.  En caso de no contar con los permisos necesarios o en caso de  existir excepciones no controladas devuelve un error de permisos.",
                            content = @Content(schema = @Schema(implementation = RestResponseEntityExceptionHandler.class
                            ))
                    )
            }
    )
    @PutMapping("finishTarea")
    public ResponseEntity<String> finishPropuesta(@RequestParam Long tareaId, @RequestParam Long propuestaId){
        tareaService.finishTarea(tareaId,propuestaId);
        return ResponseEntity.ok().body("La propuesta se finalizo con exito");
    }
}
