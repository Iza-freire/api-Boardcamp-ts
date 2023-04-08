import { Router } from "express";


const rentalsRouter = Router();

rentalsRouter.post("/");
rentalsRouter.get("/");
rentalsRouter.post("/:id/return");
rentalsRouter.delete("/:id");

export default rentalsRouter;