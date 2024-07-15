package com.api.backend.Exception;

public class EmailOrPasswordIncorrectException extends RuntimeException {
    public EmailOrPasswordIncorrectException(String msg) {
        super(msg);
    }
}
