import { Request, Response, NextFunction } from "express";
import ErrorHandler from "../utils/ErrorHandler.js";
const success = true;
//Get all gadgets
export const getAllGadgets = async (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({
        success,
        message: "Hello World"
    })
}

//Create a gadget
export const createGadget = async (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({
        success,
        message: "Hello World"
    })
}

//Update a gadget
export const updateGadget = async (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({
        success,
        message: "Hello World"
    })
}

export const deleteGadget = async (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({
        success,
        message: "Hello World"
    })
}


