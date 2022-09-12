import { CustomError } from "./class/custom-error";

export class BadRequestError extends CustomError {
	statusCode: number = 400;
	constructor(public message: string) {
		super(message);
		Object.setPrototypeOf(this, BadRequestError.prototype);
	}
	serialiseError() {
		return [{ message: this.message }];
	}
}
