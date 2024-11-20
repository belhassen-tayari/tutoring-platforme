package com.example.tutoring.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(GenericHttpException.class)
    public ResponseEntity<ErrorResponse> handleGenericException(GenericHttpException ex) {
        ErrorResponse errorResponse = new ErrorResponse( ex.getMessage());
        return new ResponseEntity<>(errorResponse, ex.getStatus());
    }

    @JsonInclude(Include.NON_NULL)
    public static class ErrorResponse {
        private String error;

        public ErrorResponse(String error) {
            this.error = error;
        }

        public String getError() {
            return error;
        }

        public void setError(String error) {
            this.error = error;
        }


    }
}