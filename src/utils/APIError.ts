import { Request, Response, NextFunction } from "express";
interface CustomError extends Error {
    statusCode: number;
}
const APIError = async(err: CustomError, req: Request, res: Response, next: NextFunction) => {
    let message = err.message || "Internal Server Error";
    let statusCode = err.statusCode || 500;
    console.log("Some Error occured\n",err.message);
    res.status(statusCode).json({
        success: false,
        message
    })
}

export default APIError;
