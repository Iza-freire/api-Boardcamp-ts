import { Router } from "express";
import validateSchema from "../middlewares/validateMiddlewares.js";
import controller from "../controllers/gameControllers.js"
import { GameSchema } from "../schemas/GameSchemas.js";

const gameRoutes = Router();

gameRoutes.post("/", validateSchema(GameSchema), controller.createGames );
gameRoutes.get("/", controller.allGames);

export default gameRoutes;