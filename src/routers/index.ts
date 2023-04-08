import { Router } from "express";
import gameRoutes from "./gameRoutes.js";
import rentalsRouter from "./rentalsRoutes.js";
import customersRouter from "./customerRoutes.js"

const routes: Router = Router();

routes.use("/games", gameRoutes);
routes.use("/rentals", rentalsRouter);
routes.use("/customers", customersRouter)

export default routes;