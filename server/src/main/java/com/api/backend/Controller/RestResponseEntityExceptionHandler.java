package com.api.backend.Controller;

import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;

import com.api.backend.DTO.Error.ErrorResponseDto;
import com.api.backend.Exception.EmailOrPasswordIncorrectException;
import com.api.backend.Exception.ResourceNotFoundException;



@RestControllerAdvice
public class RestResponseEntityExceptionHandler {
    @ExceptionHandler(EmailOrPasswordIncorrectException.class)
    public ResponseEntity<Object> handlerResourceNotFoundException(EmailOrPasswordIncorrectException ex) {
        return new ResponseEntity<>(new ErrorResponseDto("Email or password", ex.getMessage()),
                HttpStatus.BAD_REQUEST);
    }

      @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Object> handlerMethodArgumentNotValidException(MethodArgumentNotValidException ex) {
        var errors = ex.getFieldErrors().stream().map(ErrorResponseDto::new).toList();
        return ResponseEntity.badRequest().body(errors);
    }

    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<Object> handlerResourceNotFoundException(ResourceNotFoundException ex) {
        return new ResponseEntity<>(ex.getMessage(),HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(DataIntegrityViolationException.class)
    public ResponseEntity<Object> SQLIntegrityConstraintViolationException(DataIntegrityViolationException ex, WebRequest request) {
        String originalMsg = ex.getMessage();
        String duplicateValue = ObtainDuplicateValue(originalMsg);
        
        if (!duplicateValue.equals("Valor no encontrado")) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(duplicateValue + " is not available");
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Duplicate value not found");
    }
    

    private String ObtainDuplicateValue(String msg) {
        String begin = "Ya existe la llave (";
        String end = ").";
        int indexStart = msg.indexOf(begin) + begin.length();
        int indexEnd = msg.indexOf(end, indexStart);
    
        if (indexStart >= begin.length() && indexEnd > indexStart) {
            String duplicateKeyValue = msg.substring(indexStart, indexEnd);
            // Extraer el valor del paréntesis
            int valueStartIndex = duplicateKeyValue.indexOf(")=(") + 3;
            if (valueStartIndex > 2) {
                return duplicateKeyValue.substring(valueStartIndex);
            }
        }
        return "Valor no encontrado";
    }
    
    
    
    
}
