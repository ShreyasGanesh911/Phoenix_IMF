import { Request, Response, NextFunction } from "express";

const AsyncHandler = (passedFunction: Function) => (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(passedFunction(req, res, next)).catch(next)
}

export default AsyncHandler;
