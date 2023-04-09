import { Request, Response } from 'express';
import { GameService } from '../services/gamesService.js';

const gameService = new GameService();

async function createGames(req: Request, res: Response): Promise<void> {
  try {
    const game = await gameService.createGame(req.body);
    res.status(201).send('Game created successfully!');
  } catch (err) {
    res.status(500).send(err.message);
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




