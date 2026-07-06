import { Request, Response, NextFunction } from "express";
import { AppError } from "../../shared/errors";
import { logger } from "../../infrastructure/logger";
import { ApiResponse } from "../../shared/response";


export function errorHandler (
    error:Error,
    req:Request,
    res:Response,
    _next: NextFunction,

){
    if (error instanceof AppError){
        logger.warn(error.message);
        ApiResponse.error(
            res,
            error.statusCode,
            error.code,
            error.message,
        );
        return;

    }

    logger.error({
    method: req.method,
        url: req.originalUrl,
        error,
    });
        ApiResponse.error(
            res,
            500,
            "INTERNAL_SERVER_ERROR",
            "An unexpected error occurred.",
        );

        return;

}