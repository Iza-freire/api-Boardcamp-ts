import { Request, Response, NextFunction } from "express";
import { Game, GameSchema } from "../schemas/GameSchemas.js";
import { connectionDB } from "../config/database.js";

async function validShemaGames(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const game: Game = req.body;

  const { error } = GameSchema.validate(game, { abortEarly: true });

  if (error) {
    const errors = error.details.map((detail) => detail.message);
    return res.status(400).send({ errors });
  }

  if (game.stockTotal <= 0 || game.pricePerDay <= 0) {
    return res.status(400).send({
      errors: ["stockTotal e pricePerDay devem ser maiores que 0"],
    });
  }

  const nameExist = await connectionDB.query<Game>(
    "SELECT * FROM games WHERE name=$1",
    [game.name]
  );

  if (nameExist.rowCount !== 0) {
    return res.sendStatus(409);
  }

  res.locals.game = game;

  next();
}
export default{
    validShemaGames,
}