import { Game } from '../protocols/index.js';
import { connectionDB } from '../config/database.js';

export class GameRepository {
  async createGame(game: Game): Promise<Game> {
    const { name, image, stockTotal, pricePerDay } = game;
    const result = await connectionDB.query(
      `INSERT INTO games (name, image, "stockTotal", "pricePerDay") VALUES ($1, $2, $3, $4) RETURNING *`,
      [name, image, stockTotal, pricePerDay]
    );
    return result.rows[0];
  }

  async getGames(): Promise<Game[]> {
    const result = await connectionDB.query(`SELECT * FROM games`);
    return result.rows;
  }

  async getGameByName(name: string): Promise<Game | null> {
    const result = await connectionDB.query(`SELECT * FROM games WHERE name=$1`, [name]);

    if (result.rows.length === 0) {
      return null;
    }


    return result.rows[0];
  }
}
