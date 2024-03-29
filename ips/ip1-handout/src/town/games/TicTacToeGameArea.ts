import InvalidParametersError, {
  GAME_ID_MISSMATCH_MESSAGE,
  GAME_NOT_IN_PROGRESS_MESSAGE,
  INVALID_COMMAND_MESSAGE,
} from '../../lib/InvalidParametersError';
import Player from '../../lib/Player';
import {
  InteractableCommand,
  InteractableCommandReturnType,
  InteractableType,
} from '../../types/CoveyTownSocket';
import GameArea from './GameArea';
import TicTacToeGame from './TicTacToeGame';

/**
 * A TicTacToeGameArea is a GameArea that hosts a TicTacToeGame.
 * @see TicTacToeGame
 * @see GameArea
 */
export default class TicTacToeGameArea extends GameArea<TicTacToeGame> {
  protected getType(): InteractableType {
    return 'TicTacToeArea';
  }

  /**
   * Changes the state is the game is over.
   * - push history with the game ID and score.
   */
  private _changeStateIfGameOver(): void {
    if (this.game?.state.status === 'OVER') {
      const players = this.occupants;
      if (this.game.state.winner === players[0].id) {
        this.history.push({
          gameID: this.game.id,
          scores: {
            [players[0].userName]: 1,
            [players[1].userName]: 0,
          },
        });
      } else if (this.game.state.winner === players[1].id) {
        this.history.push({
          gameID: this.game.id,
          scores: {
            [players[0].userName]: 0,
            [players[1].userName]: 1,
          },
        });
      } else if (this.game.state.winner === undefined) {
        this.history.push({
          gameID: this.game.id,
          scores: {
            [players[0].userName]: 0,
            [players[1].userName]: 0,
          },
        });
      }
    }
  }

  /**
   * Handle a command from a player in this game area.
   * Supported commands:
   * - JoinGame (joins the game `this._game`, or creates a new one if none is in progress)
   * - GameMove (applies a move to the game)
   * - LeaveGame (leaves the game)
   *
   * If the command ended the game, records the outcome in this._history
   * If the command is successful (does not throw an error), calls this._emitAreaChanged (necessary
   *  to notify any listeners of a state update, including any change to history)
   * If the command is unsuccessful (throws an error), the error is propagated to the caller
   *
   * @see InteractableCommand
   *
   * @param command command to handle
   * @param player player making the request
   * @returns response to the command, @see InteractableCommandResponse
   * @throws InvalidParametersError if the command is not supported or is invalid. Invalid commands:
   *  - LeaveGame and GameMove: No game in progress (GAME_NOT_IN_PROGRESS_MESSAGE),
   *        or gameID does not match the game in progress (GAME_ID_MISSMATCH_MESSAGE)
   *  - Any command besides LeaveGame, GameMove and JoinGame: INVALID_COMMAND_MESSAGE
   */
  public handleCommand<CommandType extends InteractableCommand>(
    command: CommandType,
    player: Player,
  ): InteractableCommandReturnType<CommandType> {
    let response: InteractableCommandReturnType<CommandType>;
    // If not one of the three commands, throw error
    if (
      command.type !== 'JoinGame' &&
      command.type !== 'LeaveGame' &&
      command.type !== 'GameMove'
    ) {
      throw new InvalidParametersError(INVALID_COMMAND_MESSAGE);
      // If no game in progress and it is a leave or move command, throw an error
    } else if (this.game === undefined && command.type !== 'JoinGame') {
      throw new InvalidParametersError(GAME_NOT_IN_PROGRESS_MESSAGE);
      // Join command
    } else if (command.type === 'JoinGame') {
      if (this.game === undefined) {
        this._game = new TicTacToeGame();
      }
      this.game?.join(player);
      this._emitAreaChanged();
      response = { gameID: this.game?.id } as InteractableCommandReturnType<CommandType>;
      // Game Move Command - apply move and check if game is over
    } else if (command.type === 'GameMove') {
      if (this.game?.id !== command.gameID) {
        throw new InvalidParametersError(GAME_ID_MISSMATCH_MESSAGE);
      }
      this.game?.applyMove({ playerID: player.id, gameID: command.gameID, move: command.move });
      this._changeStateIfGameOver();
      this._emitAreaChanged();
      response = undefined as InteractableCommandReturnType<CommandType>;
      // Leave Command - player leave and change state if the game is over
    } else {
      if (this.game?.id !== command.gameID) {
        throw new InvalidParametersError(GAME_ID_MISSMATCH_MESSAGE);
      }
      this.game.leave(player);
      this._changeStateIfGameOver();
      this._emitAreaChanged();
      response = undefined as InteractableCommandReturnType<CommandType>;
    }
    return response;
  }
}
