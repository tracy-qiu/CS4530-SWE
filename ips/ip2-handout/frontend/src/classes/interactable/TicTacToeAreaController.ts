import {
  GameArea,
  GameStatus,
  TicTacToeGameState,
  TicTacToeGridPosition,
} from '../../types/CoveyTownSocket';
import PlayerController from '../PlayerController';
import GameAreaController, { GameEventTypes } from './GameAreaController';

export const PLAYER_NOT_IN_GAME_ERROR = 'Player is not in game';

export const NO_GAME_IN_PROGRESS_ERROR = 'No game in progress';

export type TicTacToeCell = 'X' | 'O' | undefined;
export type TicTacToeEvents = GameEventTypes & {
  boardChanged: (board: TicTacToeCell[][]) => void;
  turnChanged: (isOurTurn: boolean) => void;
};

/**
 * This class is responsible for managing the state of the Tic Tac Toe game, and for sending commands to the server
 */
export default class TicTacToeAreaController extends GameAreaController<
  TicTacToeGameState,
  TicTacToeEvents
> {
  /**
   * Returns the current state of the board.
   *
   * The board is a 3x3 array of TicTacToeCell, which is either 'X', 'O', or undefined.
   *
   * The 2-dimensional array is indexed by row and then column, so board[0][0] is the top-left cell,
   * and board[2][2] is the bottom-right cell
   */
  get board(): TicTacToeCell[][] {
    const board = new Array<TicTacToeCell>(3)
      .fill(undefined)
      .map(() => new Array<TicTacToeCell>(3).fill(undefined));
    const moves = this._model.game?.state.moves;
    if (moves) {
      for (let index = 0; index < moves.length; index++) {
        board[moves[index].row][moves[index].col] = moves[index].gamePiece;
      }
    }
    return board;
  }

  /**
   * Returns the player with the 'X' game piece, if there is one, or undefined otherwise
   */
  get x(): PlayerController | undefined {
    const xPlayerID = this._model.game?.state.x;
    if (xPlayerID) {
      const xPlayerControllers = this._players.filter(player => player.id == xPlayerID);
      return xPlayerControllers[0];
    } else {
      return undefined;
    }
  }

  /**
   * Returns the player with the 'O' game piece, if there is one, or undefined otherwise
   */
  get o(): PlayerController | undefined {
    const oPlayerID = this._model.game?.state.o;
    if (oPlayerID) {
      const oPlayerControllers = this._players.filter(player => player.id == oPlayerID);
      return oPlayerControllers[0];
    } else {
      return undefined;
    }
  }

  /**
   * Returns the number of moves that have been made in the game
   */
  get moveCount(): number {
    const moves = this._model.game?.state.moves;
    if (moves) {
      return moves.length;
    }
    return 0; //TODO
  }

  /**
   * Returns the winner of the game, if there is one
   */
  get winner(): PlayerController | undefined {
    const winner = this._model.game?.state.winner;
    if (winner) {
      return this._players.filter(player => player.id == winner)[0];
    }
    return undefined; //TODO
  }

  /**
   * Returns the player whose turn it is, if the game is in progress
   * Returns undefined if the game is not in progress
   */
  get whoseTurn(): PlayerController | undefined {
    if (this._model.game && this._model.game.state.status == 'IN_PROGRESS') {
      if (this._model.game.state.moves.length % 2 == 0) {
        return this.x;
      } else {
        return this.o;
      }
    }
    return undefined;
  }

  /**
   * Returns true if it is our turn to make a move in the game
   * Returns false if it is not our turn, or if the game is not in progress
   */
  get isOurTurn(): boolean {
    if (this._townController.ourPlayer == this.whoseTurn) {
      return true;
    }
    return false;
  }

  /**
   * Returns true if the current player is a player in this game
   */
  get isPlayer(): boolean {
    if (this._players.includes(this._townController.ourPlayer)) {
      return true;
    }
    return false;
  }

  /**
   * Returns the game piece of the current player, if the current player is a player in this game
   *
   * Throws an error PLAYER_NOT_IN_GAME_ERROR if the current player is not a player in this game
   */
  get gamePiece(): 'X' | 'O' {
    if (this.isPlayer) {
      if (this._model.game?.state.x == this._townController.ourPlayer.id) {
        return 'X';
      } else if (this._model.game?.state.o == this._townController.ourPlayer.id) {
        return 'O';
      }
    }
    throw new Error(PLAYER_NOT_IN_GAME_ERROR);
  }

  /**
   * Returns the status of the game.
   * Defaults to 'WAITING_TO_START' if the game is not in progress
   */
  get status(): GameStatus {
    return this._model.game?.state.status ?? 'WAITING_TO_START';
  }

  /**
   * Returns true if the game is in progress
   */
  public isActive(): boolean {
    if (this._model.game?.state.status == 'IN_PROGRESS') {
      return true;
    }
    return false;
  }

  /**
   * Updates the internal state of this TicTacToeAreaController to match the new model.
   *
   * Calls super._updateFrom, which updates the occupants of this game area and
   * other common properties (including this._model).
   *
   * If the board has changed, emits a 'boardChanged' event with the new board. If the board has not changed,
   *  does not emit the event.
   *
   * If the turn has changed, emits a 'turnChanged' event with true if it is our turn, and false otherwise.
   * If the turn has not changed, does not emit the event.
   */
  // actaully update the board
  protected _updateFrom(newModel: GameArea<TicTacToeGameState>): void {
    // const newController = new TicTacToeAreaController(
    //   'new controller',
    //   newModel,
    //   this._townController,
    // );
    const previousBoard = this.board;
    const previousTurn = this.whoseTurn;
    // const newBoard = newController.board;
    // const newPlayerTurn = newController.whoseTurn;
    // if (this._instanceID && this.status === 'IN_PROGRESS') {
    // if (this.board != newBoard) {
    //   this.emit('boardChanged', newBoard);
    // }
    // if (this.whoseTurn != newPlayerTurn) {
    //   if (this.isOurTurn) {
    //     this.emit('turnChanged', true);
    //   } else {
    //     this.emit('turnChanged', false);
    //   }
    // }
    // }
    super._updateFrom(newModel);
    // update the board and save it as new board
    const newBoard: TicTacToeCell[][] = this.board;
    const newTurn = this.whoseTurn;
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        if (newBoard[row][col] != previousBoard[row][col]) {
          this.emit('boardChanged', newBoard);
        }
      }
    }
    if (previousTurn != newTurn) {
      if (this.isOurTurn) {
        this.emit('turnChanged', true);
      } else {
        this.emit('turnChanged', false);
      }
    }
    // loop through both boards to see if there is a update
    // emit change if the board has changed
    // const board = new Array<TicTacToeCell>(3)
    //   .fill(undefined)
    //   .map(() => new Array<TicTacToeCell>(3).fill(undefined));
    // const moves = this._model.game?.state.moves;
    // if (moves) {
    //   for (let index = 0; index < moves.length; index++) {
    //     board[moves[index].row][moves[index].col] = moves[index].gamePiece;
    //   }
    // }
  }

  /**
   * Sends a request to the server to make a move in the game.
   * Uses the this._townController.sendInteractableCommand method to send the request.
   * The request should be of type 'GameMove',
   * and send the gameID provided by `this._instanceID`.
   *
   * If the game is not in progress, throws an error NO_GAME_IN_PROGRESS_ERROR
   *
   * @param row Row of the move
   * @param col Column of the move
   */
  public async makeMove(row: TicTacToeGridPosition, col: TicTacToeGridPosition) {
    if (this._instanceID) {
      this._townController.sendInteractableCommand(this.id, {
        type: 'GameMove',
        gameID: this._instanceID,
        move: { gamePiece: this.gamePiece, row: row, col: col },
      });
    } else {
      throw new Error(NO_GAME_IN_PROGRESS_ERROR);
    }
  }
}
