package com.api.backend.DTO;

import org.springframework.validation.annotation.Validated;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Validated
public class BaseDTO {
    private Long id;
    @JsonIgnore
    private Boolean status = true;
}
