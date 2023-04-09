import { Game } from '../schemas/GameSchemas.js';
import { GameRepository } from '../repositories/gamesRepositories.js';

const gameRepository = new GameRepository();

export class GameService {
 async createGame(game: Game): Promise<Game> {
   const existingGame = await gameRepository.getGameByName(game.name);
   if (existingGame) {
     throw new Error('Game already exists');
   }
   return gameRepository.createGame(game);
 }

 async getGames(): Promise<Game[]> {
   return gameRepository.getGames();
 }
}
