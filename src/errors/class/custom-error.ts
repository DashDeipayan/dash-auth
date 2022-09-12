export abstract class CustomError extends Error {
	abstract statusCode: number;
	constructor(message?: string) {
		super(message);

		Object.setPrototypeOf(this, CustomError.prototype);
	}
	abstract serialiseError(): {
		message: string;
		field?: string;
	}[];
}
