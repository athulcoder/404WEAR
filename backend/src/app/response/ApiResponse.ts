import { ApiResponseError, ApiResponseSuccess } from "./types";
import { Response } from "express";
export class ApiResponse {


    static success<T> (
        res:Response,
        data:T,
        message="Success",

    ):Response<ApiResponseSuccess<T>>{
        return res.status(200).json({
            success:true,
            message,
            data
        })
    }

    static create<T>(
        res:Response,
        message="Created Successfully",
        data: T,

    ):Response<ApiResponseSuccess<T>>{
        return res.status(201).json({
            success:true,
            message,
            data,

        })
    }

    static noContent(
        res:Response
    ){
        return res.status(204).send();
    }

    static error(
        res:Response,
        statusCode:number,
        code:string,
        message:string,

    ):Response<ApiResponseError>{
        return res.status(statusCode).json({
            success:false,
            error:{
                code,
                message
            }
        })
    }
}


