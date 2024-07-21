package com.api.backend.DTO.Usuario;


import com.api.backend.DTO.BaseDTO;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = false)
public class UsuarioResponseDTO extends BaseDTO{
    String nombre;
    String email;



}
