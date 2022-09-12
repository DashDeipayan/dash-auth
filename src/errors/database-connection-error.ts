import { ValidationError } from "express-validator";
import { CustomError } from "./class/custom-error";

export class DataBaseConnectionError extends CustomError {
	statusCode = 500;
	reason = "Database connection failed";
	constructor() {
		super();
		Object.setPrototypeOf(this, DataBaseConnectionError.prototype);
	}

	serialiseError() {
		return [{ message: this.reason }];
	}
}
