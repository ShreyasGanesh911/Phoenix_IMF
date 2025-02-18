import express from "express";
import cors from "cors";
import gadgetRouter from "./Routes/gadget.route.js";
import APIError from "./utils/APIError.js";
const app = express();
app.use(express.json());
app.use(cors());

app.use("/gadget", gadgetRouter);

app.use(APIError);
export default app;
