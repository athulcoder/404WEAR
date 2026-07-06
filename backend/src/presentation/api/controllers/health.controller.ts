import { Request, Response } from "express";
import { ApiResponse } from "../../../shared/response";

export class HealthController {
    constructor(){}

    static status(_req:Request, res:Response){
        ApiResponse.success(res, "Server is healthy and it is working fine ");
    }
}