package com.api.backend.Exception;

public class CantSendPropuestaException extends RuntimeException {
    public CantSendPropuestaException(String s) {
        super(s);
    }
}
