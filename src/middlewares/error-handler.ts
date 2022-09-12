import { Response, Request, NextFunction } from "express";
import { CustomError } from "../errors/class/custom-error";

export const errorHandler = (
	err: Error,
	req: Request,
	res: Response,
	next: NextFunction
) => {
	if (err instanceof CustomError) {
		return res.status(err.statusCode).send({ errors: err.serialiseError() });
	}

	res.status(400).send(err.message);
};
