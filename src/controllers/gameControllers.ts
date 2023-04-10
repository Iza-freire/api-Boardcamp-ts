import { Request, Response } from 'express';
import { GameService } from '../services/gamesService.js';
import { Game } from '../protocols/index.js';

const gameService = new GameService();

export async function createGames(req: Request, res: Response) {
  const game: Game = req.body;
  try {
    const createdGame = await gameService.createGame(game);
    res.status(201).send(createdGame);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
}

async function allGames(req: Request, res: Response): Promise<void> {
  try {
    const games = await gameService.getGames();
    res.send(games);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export default {
  createGames,
  allGames
}





