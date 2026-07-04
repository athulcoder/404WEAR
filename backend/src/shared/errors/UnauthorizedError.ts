import { AppError } from "./AppError";

export class UnAuthorizedError extends AppError{

    constructor(message="you are not authorized to get this "){
        super(message,401,"UNAUTHORIZED");
    }
}