import { Router } from "express";
import validate from "../middlewares/validateMiddlewares.js";
import controller from "../controllers/gameControllers.js"


const gameRoutes = Router();

gameRoutes.post("/", validate.validShemaGames, controller.createGames );
gameRoutes.get("/", controller.allGames);

export default gameRoutes;