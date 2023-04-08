import { Router } from "express";


const customersRouter = Router();

customersRouter.post("/");
customersRouter.get("/");
customersRouter.get("/:id");
customersRouter.put("/:id");

export default customersRouter;