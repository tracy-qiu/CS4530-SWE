/* eslint-disable no-console */
import InvalidParametersError, {
  BOARD_POSITION_NOT_EMPTY_MESSAGE,
  GAME_FULL_MESSAGE,
  GAME_NOT_IN_PROGRESS_MESSAGE,
  MOVE_NOT_YOUR_TURN_MESSAGE,
  PLAYER_ALREADY_IN_GAME_MESSAGE,
  PLAYER_NOT_IN_GAME_MESSAGE,
} from '../../lib/InvalidParametersError';
import Player from '../../lib/Player';
import { GameMove, TicTacToeGameState, TicTacToeMove } from '../../types/CoveyTownSocket';
import Game from './Game';

/**
 * A TicTacToeGame is a Game that implements the rules of Tic Tac Toe.
 * @see https://en.wikipedia.org/wiki/Tic-tac-toe
 */
export default class TicTacToeGame extends Game<TicTacToeGameState, TicTacToeMove> {
  public constructor() {
    super({
      moves: [],
      status: 'WAITING_TO_START',
    });
  }

  private _invalidMoveErrorMessage(move: GameMove<TicTacToeMove>): string {
    let errorMessage = '';
    const currentGamePiece = move.playerID === this.state.x ? 'X' : 'O';
    if (
      this._movesFromPlayer('X').includes(move.move) ||
      this._movesFromPlayer('O').includes(move.move)
    ) {
      errorMessage = BOARD_POSITION_NOT_EMPTY_MESSAGE;
    } else if (
      (this._movesFromPlayer('X').length > this._movesFromPlayer('O').length &&
        currentGamePiece === 'X') ||
      (this._movesFromPlayer('O').length > this._movesFromPlayer('X').length &&
        currentGamePiece === 'O')
    ) {
      errorMessage = MOVE_NOT_YOUR_TURN_MESSAGE;
    } else if (this.state.status !== 'IN_PROGRESS') {
      // console.log(this.state.status);
      errorMessage = GAME_NOT_IN_PROGRESS_MESSAGE;
    }
    return errorMessage;
  }

  private _movesFromPlayer(playerGamePiece: string): TicTacToeMove[] {
    return this.state.moves.filter(m => m.gamePiece === playerGamePiece);
  }

  private _checkGameOver(): boolean {
    // const playerXMoves = this._movesFromPlayer('X');
    // const playerOMoves = this._movesFromPlayer('O');
    return false;
  }

  /*
   * Applies a player's move to the game.
   * Uses the player's ID to determine which game piece they are using (ignores move.gamePiece)
   * Validates the move before applying it. If the move is invalid, throws an InvalidParametersError with
   * the error message specified below.
   * A move is invalid if:
   *    - The move is on a space that is already occupied (use BOARD_POSITION_NOT_EMPTY_MESSAGE)
   *    - The move is not the player's turn (MOVE_NOT_YOUR_TURN_MESSAGE)
   *    - The game is not in progress (GAME_NOT_IN_PROGRESS_MESSAGE)
   *
   * If the move is valid, applies the move to the game and updates the game state.
   *
   * If the move ends the game, updates the game's state.
   * If the move results in a tie, updates the game's state to set the status to OVER and sets winner to undefined.
   * If the move results in a win, updates the game's state to set the status to OVER and sets the winner to the player who made the move.
   * A player wins if they have 3 in a row (horizontally, vertically, or diagonally).
   *
   * @param move The move to apply to the game
   * @throws InvalidParametersError if the move is invalid (with specific message noted above)
   */
  public applyMove(move: GameMove<TicTacToeMove>): void {
    const invalidMoveMessage = this._invalidMoveErrorMessage(move);
    if (invalidMoveMessage === '') {
      const currentGamePiece = move.playerID === this.state.x ? 'X' : 'O';
      this.state = {
        ...this.state,
        moves: [
          ...this.state.moves,
          { gamePiece: currentGamePiece, row: move.move.row, col: move.move.col },
        ],
      };
      if (this._checkGameOver()) {
        this.state = {
          ...this.state,
          status: 'OVER',
          winner: currentGamePiece,
        };
      } else if (this.state.moves.length === 9) {
        this.state = {
          ...this.state,
          status: 'OVER',
          winner: undefined,
        };
      }
    } else {
      throw new InvalidParametersError(invalidMoveMessage);
    }
  }

  /**
   * Adds a player to the game.
   * Updates the game's state to reflect the new player.
   * If the game is now full (has two players), updates the game's state to set the status to IN_PROGRESS.
   *
   * @param player The player to join the game
   * @throws InvalidParametersError if the player is already in the game (PLAYER_ALREADY_IN_GAME_MESSAGE)
   *  or the game is full (GAME_FULL_MESSAGE)
   */
  protected _join(player: Player): void {
    const playerIDs = this._players.map(p => p.id);
    console.log(playerIDs);
    console.log(player.id);
    console.log(playerIDs.includes(player.id));
    if (this.state.status === 'WAITING_TO_START') {
      if (this.state.x === undefined) {
        this.state.x = player.id;
      } else if (this.state.o === undefined) {
        this.state.o = player.id;
      }
      if (this.state.x !== undefined && this.state.o !== undefined) {
        this.state = {
          ...this.state,
          status: 'IN_PROGRESS',
        };
      }
    } else if (playerIDs.includes(player.id)) {
      throw new InvalidParametersError(PLAYER_ALREADY_IN_GAME_MESSAGE);
    } else if (this._players.length === 2) {
      throw new InvalidParametersError(GAME_FULL_MESSAGE);
    } else if (this.state.status === 'OVER') {
      // console.log('game was over!!');
      this.state = {
        ...this.state,
        status: 'WAITING_TO_START',
        x: undefined,
        o: undefined,
        winner: undefined,
      };
    }
  }

  /**
   * Removes a player from the game.
   * Updates the game's state to reflect the player leaving.
   * If the game has two players in it at the time of call to this method,
   *   updates the game's status to OVER and sets the winner to the other player.
   * If the game does not yet have two players in it at the time of call to this method,
   *   updates the game's status to WAITING_TO_START.
   *
   * @param player The player to remove from the game
   * @throws InvalidParametersError if the player is not in the game (PLAYER_NOT_IN_GAME_MESSAGE)
   */
  protected _leave(player: Player): void {
    if (this._players.length === 2) {
      const playerIDs = this._players.map(p => p.id);
      console.log(playerIDs);
      console.log(player.id);
      console.log(playerIDs.includes(player.id));
      if (playerIDs.includes(player.id)) {
        if (player.id === this.state.x) {
          this.state = {
            ...this.state,
            winner: this.state.o,
            status: 'OVER',
            moves: [],
          };
        } else {
          this.state = {
            ...this.state,
            winner: this.state.x,
            status: 'OVER',
            moves: [],
          };
        }
      } else {
        throw new InvalidParametersError(PLAYER_NOT_IN_GAME_MESSAGE);
      }
    } else {
      const playerIDs = this._players.map(p => p.id);
      if (playerIDs.includes(player.id)) {
        if (player.id === this.state.x) {
          this.state = {
            ...this.state,
            status: 'WAITING_TO_START',
            x: undefined,
          };
        } else {
          this.state = {
            ...this.state,
            status: 'WAITING_TO_START',
            o: undefined,
          };
        }
      }
    }
  }
}
