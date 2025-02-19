import express from "express";
import AsyncHandler from "../utils/Asynchandler.js";
import { getAllGadgets, createGadget, updateGadget, deleteGadget, selfDestructGadget } from "../controller/gadget.controller.js";
const gadgetRouter = express.Router();

gadgetRouter.get("/", AsyncHandler(getAllGadgets))
gadgetRouter.post("/", AsyncHandler(createGadget))
gadgetRouter.patch("/", AsyncHandler(updateGadget))
gadgetRouter.delete("/", AsyncHandler(deleteGadget))
gadgetRouter.post("/:id/self-destruct", AsyncHandler(selfDestructGadget))

export default gadgetRouter;
