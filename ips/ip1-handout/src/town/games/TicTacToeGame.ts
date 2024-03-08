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
  /**
   * Helper to check if the move is on a space that is already occupied.
   * @param move the current game move to apply to the game.
   * @returns boolean for if the board position is empty.
   */

  private _checkBoardPositionEmpty(move: GameMove<TicTacToeMove>): boolean {
    for (let index = 0; index < this.state.moves.length; index++) {
      if (
        this.state.moves[index].col === move.move.col &&
        this.state.moves[index].row === move.move.row
      ) {
        return false;
      }
    }
    return true;
  }

  /**
   * Validates the move.
   * Returns error message is move if invalid.
   * A move is invalid if:
   *    - The move is on a space that is already occupied (use BOARD_POSITION_NOT_EMPTY_MESSAGE)
   *    - The move is not the player's turn (MOVE_NOT_YOUR_TURN_MESSAGE)
   *    - The game is not in progress (GAME_NOT_IN_PROGRESS_MESSAGE)
   * @param move the current game move to apply to the game.
   * @returns empty string if there is the move is valid, else returns error message.
   */
  private _invalidMoveErrorMessage(move: GameMove<TicTacToeMove>): string {
    let errorMessage = '';
    // compare move player ID and state to determine the current game piece
    const currentGamePiece = move.playerID === this.state.x ? 'X' : 'O';
    if (!this._checkBoardPositionEmpty(move)) {
      errorMessage = BOARD_POSITION_NOT_EMPTY_MESSAGE;
    } else if (
      // Check if it is not the players turn
      (this._movesFromPlayer('X').length > this._movesFromPlayer('O').length &&
        currentGamePiece === 'X') ||
      (this._movesFromPlayer('X').length === this._movesFromPlayer('O').length &&
        currentGamePiece === 'O')
    ) {
      errorMessage = MOVE_NOT_YOUR_TURN_MESSAGE;
    } else if (this.state.status !== 'IN_PROGRESS') {
      errorMessage = GAME_NOT_IN_PROGRESS_MESSAGE;
    }
    return errorMessage;
  }

  /**
   * Gets moves from one of the players.
   * @param playerGamePiece 'X' or 'O' game piece.
   * @returns Array of TicTacToeMoves from specfied player game piece.
   */
  private _movesFromPlayer(playerGamePiece: string): TicTacToeMove[] {
    return this.state.moves.filter(m => m.gamePiece === playerGamePiece);
  }

  /**
   * Check if the given move will end the game.
   * @param move current game move.
   * @returns true if the move is a game ending move.
   */
  private _checkIfGameEndingMove(move: GameMove<TicTacToeMove>): boolean {
    let rowCounter = 0;
    let colCounter = 0;
    let leftToRightDiagCounter = 0;
    let rightToLeftDiagCounter = 0;
    // Get moves only from the player whose turn it is
    const movesFromPlayer = this._movesFromPlayer(move.move.gamePiece);
    for (let i = 0; i < movesFromPlayer.length; i++) {
      if (movesFromPlayer[i].row === move.move.row) {
        rowCounter++;
      }
      if (movesFromPlayer[i].col === move.move.col) {
        colCounter++;
      }
      if (movesFromPlayer[i].row === movesFromPlayer[i].col) {
        leftToRightDiagCounter++;
      }
      if (movesFromPlayer[i].row + movesFromPlayer[i].col === 2) {
        rightToLeftDiagCounter++;
      }
    }
    // If three in a row in the vertical, horizontal, or diagonal direction --> game ending move
    if (
      rowCounter === 3 ||
      colCounter === 3 ||
      leftToRightDiagCounter === 3 ||
      rightToLeftDiagCounter === 3
    ) {
      return true;
    }
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
    if (invalidMoveMessage !== '') {
      throw new InvalidParametersError(invalidMoveMessage);
    } else {
      const currentGamePiece = move.playerID === this.state.x ? 'X' : 'O';
      // update state with the move
      this.state = {
        ...this.state,
        moves: [
          ...this.state.moves,
          { row: move.move.row, col: move.move.col, gamePiece: currentGamePiece },
        ],
      };
      if (this._checkIfGameEndingMove(move)) {
        this.state.status = 'OVER';
        this.state.winner = move.playerID;
      } else if (this.state.moves.length === 9) {
        this.state.status = 'OVER';
        this.state.winner = undefined;
      }
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
    // Check if player is already in game
    if (playerIDs.includes(player.id)) {
      throw new InvalidParametersError(PLAYER_ALREADY_IN_GAME_MESSAGE);
    } else if (this._players.length === 2) {
      throw new InvalidParametersError(GAME_FULL_MESSAGE);
      // State X is always filled first, then O
    } else if (this.state.x === undefined) {
      this.state.x = player.id;
      this.state.status = 'WAITING_TO_START';
    } else {
      this.state.o = player.id;
      this.state.status = 'IN_PROGRESS';
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
    const playerIDs = this._players.map(p => p.id);
    if (!playerIDs.includes(player.id)) {
      throw new InvalidParametersError(PLAYER_NOT_IN_GAME_MESSAGE);
    }
    // If game is in progress, check if player is X or O
    if (this.state.x !== undefined && this.state.o !== undefined) {
      if (player.id === this.state.x) {
        this.state = {
          ...this.state,
          winner: this.state.o,
          status: 'OVER',
        };
      } else {
        this.state = {
          ...this.state,
          winner: this.state.x,
          status: 'OVER',
        };
      }
      // If game does not have two players, set status to waiting to start
    } else if (player.id === this.state.x) {
      this.state = {
        ...this.state,
        status: 'WAITING_TO_START',
        x: undefined,
      };
    }
  }
}
