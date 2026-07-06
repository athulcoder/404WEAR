
export interface ApiResponseSuccess<T>{
    success:true,
    message:string,
    data:T
}

export interface ApiResponseError{
    success:false;
    error:{
        code:string
        message:string
    }
}