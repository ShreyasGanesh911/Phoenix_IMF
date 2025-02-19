import { Request, Response, NextFunction } from "express";
import ErrorHandler from "../utils/ErrorHandler.js";
import db from "../db/db.js";
import codenames from "../assets/names.js";
const validStatus = ["Available", "Deployed", "Destroyed", "Decommissioned"];
const success = true;
//Get all gadgets
export const getAllGadgets = async (req: Request, res: Response, next: NextFunction) => {
    let {status} = req.query;
    if(status) status = (status as string).charAt(0).toUpperCase() + (status as string).slice(1).toLowerCase();
    if(status && !validStatus.includes(status as string)) return next(new ErrorHandler("Invalid status, plz provide a valid status", 400));
    // status = status || ""
    let gadgets = await db.any(
        `SELECT id, name, status, (FLOOR(RANDOM() * 51) + 50) || '%' AS "mission success probability" 
         FROM gadgets`);
    if(status) gadgets = gadgets.filter(e => e.status === status);
    res.status(200).json({
        gadgets,
        success,
        message: "All gadgets retrived successfully"
    })
}
//Create a gadget
export const createGadget = async (req: Request, res: Response, next: NextFunction) => {
    const index = Math.floor(Math.random() * codenames.length);
    const name = codenames[index];
    await db.none("INSERT INTO gadgets (name,status) VALUES ($1,$2)", [name,"Available"]);
    res.status(200).json({
        success,
        message: `Gadget "${name}" created successfully`
    })
}

//Update a gadget
export const updateGadget = async (req: Request, res: Response, next: NextFunction) => {
    const {id,name,status} = req.body
    if(!id)  return next(new ErrorHandler("Gadget ID is required", 400));
    if(!name && !status) return next(new ErrorHandler("Name or status is required", 400));
    if(!validStatus.includes(status)) return next(new ErrorHandler("Invalid status", 400));
    try{
        await db.none(
            `UPDATE gadgets 
             SET name = COALESCE($1, name), status = COALESCE($2, status) 
             WHERE id = $3`,
            [name, status, id]
        );
    }catch(e){
        next(new ErrorHandler("Gadget not found", 404));
        return
    }
    res.status(200).json({
        success,
        message: `Gadget "${name}" updated successfully`
    })
}

//Delete a gadget (Decommission)
export const deleteGadget = async (req: Request, res: Response, next: NextFunction) => {
    const {id} = req.body || req.params;
    if(!id) {
        return next(new ErrorHandler("Gadget ID is required", 400));
        
    }
    try{
        await db.none("UPDATE gadgets SET status = 'Decommissioned', decommissioned_at = NOW() WHERE id = $1", [id]);
    }catch(e){
        return next(new ErrorHandler("Gadget not found", 404));
    }
    res.status(200).json({
        success,
        message: `Gadget with ID ${id} has been decommissioned successfully`
    })
}

//Self-destruct a gadget
export const selfDestructGadget = async (req: Request, res: Response, next: NextFunction) => {
    const code = Math.floor(100000 + Math.random() * 900000);
    res.status(200).json({
        success,
        confirmation_code: code,
        message: "Gadget self-destructed successfully"
    })
}

