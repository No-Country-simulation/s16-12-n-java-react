package com.api.backend.Exception;

public class OnlyFreelanceCanFinishTask extends RuntimeException {
    public OnlyFreelanceCanFinishTask(String s) {
        super(s);
    }
}
