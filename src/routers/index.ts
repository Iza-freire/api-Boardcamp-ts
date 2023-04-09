import { Router } from "express";
import gameRoutes from "./gameRoutes.js";
import rentalsRouter from "./rentalsRoutes.js";
import customersRouter from "./customerRoutes.js"

const routes: Router = Router();

routes.use("/games", gameRoutes);
routes.use("/customers", customersRouter)
//routes.use("/rentals", rentalsRouter);

export default routes;