import { ValidationError } from "express-validator";
import { CustomError } from "./class/custom-error";

export class RequestValidationError extends CustomError {
	statusCode = 400;
	constructor(public error: ValidationError[]) {
		super();
		Object.setPrototypeOf(this, RequestValidationError.prototype);
	}

	serialiseError() {
		return this.error.map((err) => {
			return { message: err.msg, field: err.param };
		});
	}
}
