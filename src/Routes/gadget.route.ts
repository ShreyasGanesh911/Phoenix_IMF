import express from "express";
import AsyncHandler from "../utils/Asynchandler.js";
import { getAllGadgets, createGadget, updateGadget, deleteGadget } from "../controller/gadget.controller.js";
const gadgetRouter = express.Router();

gadgetRouter.get("/", AsyncHandler(getAllGadgets))
gadgetRouter.post("/", AsyncHandler(createGadget))
gadgetRouter.patch("/:id", AsyncHandler(updateGadget))
gadgetRouter.delete("/:id", AsyncHandler(deleteGadget))
export default gadgetRouter;
