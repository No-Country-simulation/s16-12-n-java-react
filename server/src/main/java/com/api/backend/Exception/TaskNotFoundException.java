package com.api.backend.Exception;

public class TaskNotFoundException extends RuntimeException {
    public TaskNotFoundException(String msg){
        super(msg);
    }

}
