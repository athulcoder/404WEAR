import { Request, Response, NextFunction } from "express";
import { AppError } from "../../shared/errors";
import { logger } from "../../infrastructure/logger";


export function errorHandler (
    error:Error,
    req:Request,
    res:Response,
    _next: NextFunction,

){
    if (error instanceof AppError){
        logger.warn(error.message);
        return res.status(error.statusCode).json({
            success:false,
            error:{
                code:error.code,
                message:error.message
            }
        });
    }

    logger.error({
    method: req.method,
        url: req.originalUrl,
        error,
    });
    return res.status(500).json({
        success:false,
        error:{
            code:"INTERNAL_SERVER_ERROR",
            message:error.message
        }
    })

}