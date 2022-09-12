import { CustomError } from "./class/custom-error";

export class NotAuthorisedError extends CustomError {
	statusCode: number = 401;

	constructor() {
		super();

		Object.setPrototypeOf(this, NotAuthorisedError.prototype);
	}

	serialiseError() {
		return [{ message: "Not Authorised" }];
	}
}
