package com.AniHome.AniHome.api.exception;

public class CustomErrorResponse {
	private int status;
	private String message;
	
	public CustomErrorResponse() {
		
	}

	public CustomErrorResponse(int status, String message) {
		this.status = status;
		this.message = message;
	}

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

}
