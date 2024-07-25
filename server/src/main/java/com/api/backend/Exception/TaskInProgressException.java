package com.api.backend.Exception;

public class TaskInProgressException extends RuntimeException {
    public TaskInProgressException(String s) {
        super(s);
    }
}
