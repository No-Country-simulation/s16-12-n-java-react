package com.api.backend.DTO;

import org.springframework.validation.annotation.Validated;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Validated
public class BaseDTO {
    private Long id;
    private Boolean status = true;
}
