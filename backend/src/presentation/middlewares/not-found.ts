import { NextFunction, Request, Response } from "express";

import { NotFoundError } from "../../shared/errors";

export function notFoundHandler(
  _req: Request,
  _res: Response,
  next: NextFunction,
): void {
  next(new NotFoundError("Requested resource was not found."));
}