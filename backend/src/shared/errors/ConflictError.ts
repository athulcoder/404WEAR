import { AppError } from "./AppError";

export class ConflitError extends AppError{

    constructor(message ="Conflict"){
        super(message,400,"CONFLICT");
    }
}