import { createPlayerForTesting } from '../../TestUtils';
import {
  PLAYER_ALREADY_IN_GAME_MESSAGE,
  MOVE_NOT_YOUR_TURN_MESSAGE,
  BOARD_POSITION_NOT_EMPTY_MESSAGE,
  GAME_NOT_IN_PROGRESS_MESSAGE,
  GAME_FULL_MESSAGE,
  PLAYER_NOT_IN_GAME_MESSAGE,
} from '../../lib/InvalidParametersError';
import Player from '../../lib/Player';
import { TicTacToeMove } from '../../types/CoveyTownSocket';
import TicTacToeGame from './TicTacToeGame';

describe('TicTacToeGame', () => {
  let game: TicTacToeGame;

  beforeEach(() => {
    game = new TicTacToeGame();
  });

  describe('[T1.1] _join', () => {
    describe('When the player can be added', () => {
      it('makes the first player X and initializes the state with status WAITING_TO_START', () => {
        const player = createPlayerForTesting();
        const player2 = createPlayerForTesting();
        const player3 = createPlayerForTesting();
        game.join(player);
        expect(game.state.x).toEqual(player.id);
        expect(game.state.o).toBeUndefined();
        expect(game.state.moves).toHaveLength(0);
        expect(game.state.status).toEqual('WAITING_TO_START');
        expect(game.state.winner).toBeUndefined();
        expect(() => game.join(player)).toThrowError(PLAYER_ALREADY_IN_GAME_MESSAGE);
        game.join(player2);
        expect(game.state.x).toEqual(player.id);
        expect(game.state.o).toEqual(player2.id);
        expect(game.state.moves).toHaveLength(0);
        expect(game.state.status).toEqual('IN_PROGRESS');
        expect(game.state.winner).toBeUndefined();
        expect(() => game.join(player3)).toThrowError(GAME_FULL_MESSAGE);
      });
    });
    describe('[T1.2] _leave', () => {
      describe('when the player is in the game', () => {
        describe('when the game is in progress, it should set the game status to OVER and declare the other player the winner', () => {
          test('when x leaves', () => {
            const player1 = createPlayerForTesting();
            const player2 = createPlayerForTesting();
            const player3 = createPlayerForTesting();
            game.join(player1);

            game.leave(player1);
            expect(game.state.x).toBeUndefined();
            expect(game.state.o).toBeUndefined();
            expect(game.state.status).toEqual('WAITING_TO_START');

            game.join(player1);
            game.join(player2);
            expect(game.state.x).toEqual(player1.id);
            expect(game.state.o).toEqual(player2.id);
            expect(() => game.leave(player3)).toThrowError(PLAYER_NOT_IN_GAME_MESSAGE);

            game.leave(player1);

            expect(game.state.status).toEqual('OVER');
            expect(game.state.winner).toEqual(player2.id);
            expect(game.state.moves).toHaveLength(0);

            expect(game.state.x).toEqual(player1.id);
            expect(game.state.o).toEqual(player2.id);

            const game2 = new TicTacToeGame();
            game2.join(player1);
            game2.join(player2);
            game2.leave(player2);
            expect(game2.state.status).toEqual('OVER');
            expect(game2.state.winner).toEqual(player1.id);
            expect(game2.state.moves).toHaveLength(0);
          });
        });
      });
    });
    describe('applyMove', () => {
      describe('when given a valid move', () => {
        let player1: Player;
        let player2: Player;
        beforeEach(() => {
          player1 = createPlayerForTesting();
          player2 = createPlayerForTesting();
        });
        it('[T2.1] should add the move to the game state', () => {
          const move: TicTacToeMove = { row: 1, col: 2, gamePiece: 'X' };
          const move2: TicTacToeMove = { row: 2, col: 2, gamePiece: 'O' };
          const move3: TicTacToeMove = { row: 2, col: 2, gamePiece: 'X' };

          game.join(player1);
          expect(() =>
            game.applyMove({
              gameID: game.id,
              playerID: player1.id,
              move,
            }),
          ).toThrowError(GAME_NOT_IN_PROGRESS_MESSAGE);
          game.join(player2);

          expect(() =>
            game.applyMove({
              gameID: game.id,
              playerID: player2.id,
              move,
            }),
          ).toThrowError(MOVE_NOT_YOUR_TURN_MESSAGE);

          game.applyMove({
            gameID: game.id,
            playerID: player1.id,
            move,
          });
          expect(game.state.moves).toHaveLength(1);
          expect(game.state.moves[0]).toEqual(move);
          expect(game.state.status).toEqual('IN_PROGRESS');

          expect(() =>
            game.applyMove({
              gameID: game.id,
              playerID: player2.id,
              move,
            }),
          ).toThrowError(BOARD_POSITION_NOT_EMPTY_MESSAGE);

          game.applyMove({
            gameID: game.id,
            playerID: player2.id,
            move: move2,
          });

          expect(game.state.moves).toHaveLength(2);
          expect(game.state.moves[1]).toEqual(move2);

          expect(() =>
            game.applyMove({
              gameID: game.id,
              playerID: player1.id,
              move: move3,
            }),
          ).toThrowError(BOARD_POSITION_NOT_EMPTY_MESSAGE);
          expect(game.state.moves).toHaveLength(2);
        });
        it('should be able to detect X winning a game by first column and set status to OVER', () => {
          game.join(player1);
          game.join(player2);
          const move1: TicTacToeMove = { row: 1, col: 0, gamePiece: 'X' };
          const move2: TicTacToeMove = { row: 1, col: 1, gamePiece: 'O' };
          const move2BadMove: TicTacToeMove = { row: 1, col: 1, gamePiece: 'X' };
          const move3: TicTacToeMove = { row: 0, col: 0, gamePiece: 'X' };
          const move4: TicTacToeMove = { row: 0, col: 1, gamePiece: 'O' };
          const move5: TicTacToeMove = { row: 1, col: 2, gamePiece: 'X' };
          const move6: TicTacToeMove = { row: 0, col: 2, gamePiece: 'O' };
          const move7: TicTacToeMove = { row: 2, col: 1, gamePiece: 'X' };
          const move8: TicTacToeMove = { row: 2, col: 2, gamePiece: 'O' };
          const move9: TicTacToeMove = { row: 2, col: 0, gamePiece: 'X' };
          game.applyMove({
            gameID: game.id,
            playerID: player1.id,
            move: move1,
          });
          game.applyMove({
            gameID: game.id,
            playerID: player2.id,
            move: move2,
          });
          expect(() =>
            game.applyMove({
              gameID: game.id,
              playerID: player1.id,
              move: move2BadMove,
            }),
          ).toThrowError(BOARD_POSITION_NOT_EMPTY_MESSAGE);
          game.applyMove({
            gameID: game.id,
            playerID: player1.id,
            move: move3,
          });
          game.applyMove({
            gameID: game.id,
            playerID: player2.id,
            move: move4,
          });
          game.applyMove({
            gameID: game.id,
            playerID: player1.id,
            move: move5,
          });
          expect(game.state.status).toEqual('IN_PROGRESS');
          expect(game.state.winner).toBeUndefined();
          expect(game.state.moves).toHaveLength(5);
          expect(game.state.moves[4]).toEqual(move5);
          game.applyMove({
            gameID: game.id,
            playerID: player2.id,
            move: move6,
          });
          game.applyMove({
            gameID: game.id,
            playerID: player1.id,
            move: move7,
          });
          game.applyMove({
            gameID: game.id,
            playerID: player2.id,
            move: move8,
          });
          game.applyMove({
            gameID: game.id,
            playerID: player1.id,
            move: move9,
          });
          expect(game.state.status).toEqual('OVER');
          expect(game.state.winner).toEqual(player1.id);
          expect(game.state.moves).toHaveLength(9);
          expect(game.state.moves[8]).toEqual(move9);
        });
        it('should be able to detect O winning a game by second column and set status to OVER', () => {
          game.join(player1);
          game.join(player2);
          const move1: TicTacToeMove = { row: 0, col: 2, gamePiece: 'X' };
          const move2: TicTacToeMove = { row: 1, col: 1, gamePiece: 'O' };
          const move3: TicTacToeMove = { row: 0, col: 0, gamePiece: 'X' };
          const move4: TicTacToeMove = { row: 0, col: 1, gamePiece: 'O' };
          const move5: TicTacToeMove = { row: 1, col: 2, gamePiece: 'X' };
          const move6: TicTacToeMove = { row: 2, col: 1, gamePiece: 'O' };
          game.applyMove({
            gameID: game.id,
            playerID: player1.id,
            move: move1,
          });
          game.applyMove({
            gameID: game.id,
            playerID: player2.id,
            move: move2,
          });
          expect(() =>
            game.applyMove({
              gameID: game.id,
              playerID: player2.id,
              move: move2,
            }),
          ).toThrowError(BOARD_POSITION_NOT_EMPTY_MESSAGE);
          game.applyMove({
            gameID: game.id,
            playerID: player1.id,
            move: move3,
          });
          game.applyMove({
            gameID: game.id,
            playerID: player2.id,
            move: move4,
          });
          expect(() =>
            game.applyMove({
              gameID: game.id,
              playerID: player2.id,
              move: move6,
            }),
          ).toThrowError(MOVE_NOT_YOUR_TURN_MESSAGE);
          game.applyMove({
            gameID: game.id,
            playerID: player1.id,
            move: move5,
          });
          expect(game.state.status).toEqual('IN_PROGRESS');
          expect(game.state.winner).toBeUndefined();
          expect(game.state.moves).toHaveLength(5);
          expect(game.state.moves[4]).toEqual(move5);
          game.applyMove({
            gameID: game.id,
            playerID: player2.id,
            move: move6,
          });
          expect(game.state.status).toEqual('OVER');
          expect(game.state.winner).toEqual(player2.id);
          expect(game.state.moves).toHaveLength(6);
          expect(game.state.moves[2]).toEqual(move3);
        });
        it('should be able to detect O winning a game by third column and set status to OVER', () => {
          game.join(player1);
          game.join(player2);
          const move1: TicTacToeMove = { row: 1, col: 1, gamePiece: 'X' };
          const move2: TicTacToeMove = { row: 1, col: 0, gamePiece: 'O' };
          const move3: TicTacToeMove = { row: 0, col: 0, gamePiece: 'X' };
          const move4: TicTacToeMove = { row: 0, col: 2, gamePiece: 'O' };
          const move5: TicTacToeMove = { row: 0, col: 1, gamePiece: 'X' };
          const move6: TicTacToeMove = { row: 2, col: 2, gamePiece: 'O' };
          const move7: TicTacToeMove = { row: 2, col: 0, gamePiece: 'X' };
          const move8: TicTacToeMove = { row: 1, col: 2, gamePiece: 'O' };
          game.applyMove({
            gameID: game.id,
            playerID: player1.id,
            move: move1,
          });
          game.applyMove({
            gameID: game.id,
            playerID: player2.id,
            move: move2,
          });
          game.applyMove({
            gameID: game.id,
            playerID: player1.id,
            move: move3,
          });
          game.applyMove({
            gameID: game.id,
            playerID: player2.id,
            move: move4,
          });
          game.applyMove({
            gameID: game.id,
            playerID: player1.id,
            move: move5,
          });
          expect(() =>
            game.applyMove({
              gameID: game.id,
              playerID: player1.id,
              move: move5,
            }),
          ).toThrowError(BOARD_POSITION_NOT_EMPTY_MESSAGE);
          expect(game.state.status).toEqual('IN_PROGRESS');
          expect(game.state.winner).toBeUndefined();
          expect(game.state.moves).toHaveLength(5);
          expect(game.state.moves[4]).toEqual(move5);
          game.applyMove({
            gameID: game.id,
            playerID: player2.id,
            move: move6,
          });
          game.applyMove({
            gameID: game.id,
            playerID: player1.id,
            move: move7,
          });
          game.applyMove({
            gameID: game.id,
            playerID: player2.id,
            move: move8,
          });
          expect(game.state.status).toEqual('OVER');
          expect(game.state.winner).toEqual(player2.id);
          expect(game.state.moves).toHaveLength(8);
          expect(game.state.moves[7]).toEqual(move8);
        });
        it('should be able to detect X winning a game by first row and set status to OVER', () => {
          game.join(player1);
          game.join(player2);
          const move1: TicTacToeMove = { row: 0, col: 2, gamePiece: 'X' };
          const move2: TicTacToeMove = { row: 1, col: 1, gamePiece: 'O' };
          const move3: TicTacToeMove = { row: 0, col: 0, gamePiece: 'X' };
          const move4: TicTacToeMove = { row: 1, col: 0, gamePiece: 'O' };
          const move5: TicTacToeMove = { row: 0, col: 1, gamePiece: 'X' };
          const badMove: TicTacToeMove = { row: 2, col: 1, gamePiece: 'O' };
          game.applyMove({
            gameID: game.id,
            playerID: player1.id,
            move: move1,
          });
          game.applyMove({
            gameID: game.id,
            playerID: player2.id,
            move: move2,
          });
          game.applyMove({
            gameID: game.id,
            playerID: player1.id,
            move: move3,
          });
          game.applyMove({
            gameID: game.id,
            playerID: player2.id,
            move: move4,
          });
          game.applyMove({
            gameID: game.id,
            playerID: player1.id,
            move: move5,
          });
          expect(game.state.status).toEqual('OVER');
          expect(game.state.winner).toEqual(player1.id);
          expect(game.state.moves).toHaveLength(5);
          expect(game.state.moves[4]).toEqual(move5);
          expect(() =>
            game.applyMove({
              gameID: game.id,
              playerID: player2.id,
              move: badMove,
            }),
          ).toThrowError(GAME_NOT_IN_PROGRESS_MESSAGE);
        });
        it('should be able to detect O winning a game by second row and set status to OVER', () => {
          const move2: TicTacToeMove = { row: 1, col: 1, gamePiece: 'O' };
          expect(() =>
            game.applyMove({
              gameID: game.id,
              playerID: player1.id,
              move: move2,
            }),
          ).toThrowError(MOVE_NOT_YOUR_TURN_MESSAGE);
          game.join(player1);
          game.join(player2);
          const move1: TicTacToeMove = { row: 2, col: 2, gamePiece: 'X' };
          const move3: TicTacToeMove = { row: 0, col: 2, gamePiece: 'X' };
          const move4: TicTacToeMove = { row: 1, col: 2, gamePiece: 'O' };
          const move5: TicTacToeMove = { row: 0, col: 0, gamePiece: 'X' };
          const move6: TicTacToeMove = { row: 0, col: 1, gamePiece: 'O' };
          const move7: TicTacToeMove = { row: 2, col: 0, gamePiece: 'X' };
          const move8: TicTacToeMove = { row: 1, col: 0, gamePiece: 'O' };

          game.applyMove({
            gameID: game.id,
            playerID: player1.id,
            move: move1,
          });
          game.applyMove({
            gameID: game.id,
            playerID: player2.id,
            move: move2,
          });
          game.applyMove({
            gameID: game.id,
            playerID: player1.id,
            move: move3,
          });
          game.applyMove({
            gameID: game.id,
            playerID: player2.id,
            move: move4,
          });
          game.applyMove({
            gameID: game.id,
            playerID: player1.id,
            move: move5,
          });
          expect(game.state.status).toEqual('IN_PROGRESS');
          expect(game.state.winner).toBeUndefined();
          expect(game.state.moves).toHaveLength(5);
          expect(game.state.moves[4]).toEqual(move5);
          game.applyMove({
            gameID: game.id,
            playerID: player2.id,
            move: move6,
          });
          game.applyMove({
            gameID: game.id,
            playerID: player1.id,
            move: move7,
          });
          game.applyMove({
            gameID: game.id,
            playerID: player2.id,
            move: move8,
          });
          expect(game.state.status).toEqual('OVER');
          expect(game.state.winner).toEqual(player2.id);
          expect(game.state.moves).toHaveLength(8);
          expect(game.state.moves[7]).toEqual(move8);
        });
        it('should be able to detect O winning a game by third row and set status to OVER', () => {
          game.join(player1);
          game.join(player2);
          const move1: TicTacToeMove = { row: 0, col: 0, gamePiece: 'X' };
          const move2: TicTacToeMove = { row: 2, col: 0, gamePiece: 'O' };
          const move3: TicTacToeMove = { row: 1, col: 1, gamePiece: 'X' };
          const move4: TicTacToeMove = { row: 2, col: 2, gamePiece: 'O' };
          const move5: TicTacToeMove = { row: 1, col: 2, gamePiece: 'X' };
          const move6: TicTacToeMove = { row: 1, col: 0, gamePiece: 'O' };
          const move7: TicTacToeMove = { row: 0, col: 1, gamePiece: 'X' };
          const move8: TicTacToeMove = { row: 2, col: 1, gamePiece: 'O' };

          game.applyMove({
            gameID: game.id,
            playerID: player1.id,
            move: move1,
          });
          game.applyMove({
            gameID: game.id,
            playerID: player2.id,
            move: move2,
          });
          game.applyMove({
            gameID: game.id,
            playerID: player1.id,
            move: move3,
          });
          expect(game.state.status).toEqual('IN_PROGRESS');
          expect(game.state.winner).toBeUndefined();
          expect(game.state.moves).toHaveLength(3);
          expect(game.state.moves[2]).toEqual(move3);
          game.applyMove({
            gameID: game.id,
            playerID: player2.id,
            move: move4,
          });
          game.applyMove({
            gameID: game.id,
            playerID: player1.id,
            move: move5,
          });
          game.applyMove({
            gameID: game.id,
            playerID: player2.id,
            move: move6,
          });
          game.applyMove({
            gameID: game.id,
            playerID: player1.id,
            move: move7,
          });
          game.applyMove({
            gameID: game.id,
            playerID: player2.id,
            move: move8,
          });
          expect(game.state.status).toEqual('OVER');
          expect(game.state.winner).toEqual(player2.id);
          expect(game.state.moves).toHaveLength(8);
          expect(game.state.moves[7]).toEqual(move8);
        });
        it('should be able to detect X winning a game by left to right diagonal and set status to OVER', () => {
          game.join(player1);
          const move1: TicTacToeMove = { row: 0, col: 0, gamePiece: 'X' };
          expect(() =>
            game.applyMove({
              gameID: game.id,
              playerID: player1.id,
              move: move1,
            }),
          ).toThrowError(GAME_NOT_IN_PROGRESS_MESSAGE);
          game.join(player2);
          const move2: TicTacToeMove = { row: 2, col: 0, gamePiece: 'O' };
          const moveBad: TicTacToeMove = { row: 2, col: 2, gamePiece: 'O' };
          const move3: TicTacToeMove = { row: 1, col: 1, gamePiece: 'X' };
          const move4: TicTacToeMove = { row: 1, col: 2, gamePiece: 'O' };
          const move5: TicTacToeMove = { row: 2, col: 2, gamePiece: 'X' };

          game.applyMove({
            gameID: game.id,
            playerID: player1.id,
            move: move1,
          });
          game.applyMove({
            gameID: game.id,
            playerID: player2.id,
            move: move2,
          });
          expect(() =>
            game.applyMove({
              gameID: game.id,
              playerID: player2.id,
              move: moveBad,
            }),
          ).toThrowError(MOVE_NOT_YOUR_TURN_MESSAGE);
          game.applyMove({
            gameID: game.id,
            playerID: player1.id,
            move: move3,
          });
          expect(game.state.status).toEqual('IN_PROGRESS');
          expect(game.state.winner).toBeUndefined();
          expect(game.state.moves).toHaveLength(3);
          expect(game.state.moves[2]).toEqual(move3);
          game.applyMove({
            gameID: game.id,
            playerID: player2.id,
            move: move4,
          });
          game.applyMove({
            gameID: game.id,
            playerID: player1.id,
            move: move5,
          });
          expect(game.state.status).toEqual('OVER');
          expect(game.state.winner).toEqual(player1.id);
          expect(game.state.moves).toHaveLength(5);
          expect(game.state.moves[4]).toEqual(move5);
        });
        it('should be able to detect X winning a game by right to left diagonal and set status to OVER', () => {
          game.join(player1);
          game.join(player2);
          const move1: TicTacToeMove = { row: 0, col: 2, gamePiece: 'X' };
          const move2: TicTacToeMove = { row: 0, col: 0, gamePiece: 'O' };
          const move3: TicTacToeMove = { row: 1, col: 1, gamePiece: 'X' };
          const move4: TicTacToeMove = { row: 1, col: 2, gamePiece: 'O' };
          const move5: TicTacToeMove = { row: 2, col: 0, gamePiece: 'X' };

          game.applyMove({
            gameID: game.id,
            playerID: player1.id,
            move: move1,
          });
          game.applyMove({
            gameID: game.id,
            playerID: player2.id,
            move: move2,
          });
          game.applyMove({
            gameID: game.id,
            playerID: player1.id,
            move: move3,
          });
          expect(game.state.status).toEqual('IN_PROGRESS');
          expect(game.state.winner).toBeUndefined();
          expect(game.state.moves).toHaveLength(3);
          expect(game.state.moves[2]).toEqual(move3);
          game.applyMove({
            gameID: game.id,
            playerID: player2.id,
            move: move4,
          });
          game.applyMove({
            gameID: game.id,
            playerID: player1.id,
            move: move5,
          });
          expect(game.state.status).toEqual('OVER');
          expect(game.state.winner).toEqual(player1.id);
          expect(game.state.moves).toHaveLength(5);
          expect(game.state.moves[4]).toEqual(move5);
        });
        it('should be able to detect tie game, set the winner to undefined and set status to OVER', () => {
          game.join(player1);
          game.join(player2);
          const move1: TicTacToeMove = { row: 0, col: 2, gamePiece: 'X' };
          const move2: TicTacToeMove = { row: 0, col: 0, gamePiece: 'O' };
          const move3: TicTacToeMove = { row: 0, col: 1, gamePiece: 'X' };
          const move4: TicTacToeMove = { row: 2, col: 0, gamePiece: 'O' };
          const move5: TicTacToeMove = { row: 1, col: 1, gamePiece: 'X' };
          const move6: TicTacToeMove = { row: 2, col: 1, gamePiece: 'O' };
          const move7: TicTacToeMove = { row: 2, col: 2, gamePiece: 'X' };
          const moveBad: TicTacToeMove = { row: 1, col: 0, gamePiece: 'X' };
          const move8: TicTacToeMove = { row: 1, col: 2, gamePiece: 'O' };
          const move9: TicTacToeMove = { row: 1, col: 0, gamePiece: 'X' };

          game.applyMove({
            gameID: game.id,
            playerID: player1.id,
            move: move1,
          });
          game.applyMove({
            gameID: game.id,
            playerID: player2.id,
            move: move2,
          });
          game.applyMove({
            gameID: game.id,
            playerID: player1.id,
            move: move3,
          });
          expect(game.state.status).toEqual('IN_PROGRESS');
          expect(game.state.winner).toBeUndefined();
          expect(game.state.moves).toHaveLength(3);
          expect(game.state.moves[2]).toEqual(move3);
          game.applyMove({
            gameID: game.id,
            playerID: player2.id,
            move: move4,
          });
          game.applyMove({
            gameID: game.id,
            playerID: player1.id,
            move: move5,
          });
          game.applyMove({
            gameID: game.id,
            playerID: player2.id,
            move: move6,
          });
          game.applyMove({
            gameID: game.id,
            playerID: player1.id,
            move: move7,
          });
          expect(() =>
            game.applyMove({
              gameID: game.id,
              playerID: player1.id,
              move: moveBad,
            }),
          ).toThrowError(MOVE_NOT_YOUR_TURN_MESSAGE);
          game.applyMove({
            gameID: game.id,
            playerID: player2.id,
            move: move8,
          });
          game.applyMove({
            gameID: game.id,
            playerID: player1.id,
            move: move9,
          });
          expect(game.state.status).toEqual('OVER');
          expect(game.state.winner).toBeUndefined();
          expect(game.state.moves).toHaveLength(9);
          expect(game.state.moves[8]).toEqual(move9);
        });
        it('should be able to detect tie game, set the winner to undefined and set status to OVER', () => {
          game.join(player1);
          game.join(player2);
          const move1: TicTacToeMove = { row: 0, col: 1, gamePiece: 'X' };
          const move2: TicTacToeMove = { row: 0, col: 0, gamePiece: 'O' };
          const move3: TicTacToeMove = { row: 0, col: 2, gamePiece: 'X' };
          const move4: TicTacToeMove = { row: 1, col: 1, gamePiece: 'O' };
          const move5: TicTacToeMove = { row: 1, col: 0, gamePiece: 'X' };
          const move6: TicTacToeMove = { row: 1, col: 2, gamePiece: 'O' };
          const move7: TicTacToeMove = { row: 2, col: 1, gamePiece: 'X' };
          const move8: TicTacToeMove = { row: 2, col: 0, gamePiece: 'O' };
          const move9: TicTacToeMove = { row: 2, col: 2, gamePiece: 'X' };

          game.applyMove({
            gameID: game.id,
            playerID: player1.id,
            move: move1,
          });
          game.applyMove({
            gameID: game.id,
            playerID: player2.id,
            move: move2,
          });
          game.applyMove({
            gameID: game.id,
            playerID: player1.id,
            move: move3,
          });
          expect(game.state.status).toEqual('IN_PROGRESS');
          expect(game.state.winner).toBeUndefined();
          expect(game.state.moves).toHaveLength(3);
          expect(game.state.moves[2]).toEqual(move3);
          game.applyMove({
            gameID: game.id,
            playerID: player2.id,
            move: move4,
          });
          game.applyMove({
            gameID: game.id,
            playerID: player1.id,
            move: move5,
          });
          game.applyMove({
            gameID: game.id,
            playerID: player2.id,
            move: move6,
          });
          game.applyMove({
            gameID: game.id,
            playerID: player1.id,
            move: move7,
          });
          game.applyMove({
            gameID: game.id,
            playerID: player2.id,
            move: move8,
          });
          game.applyMove({
            gameID: game.id,
            playerID: player1.id,
            move: move9,
          });
          expect(game.state.status).toEqual('OVER');
          expect(game.state.winner).toBeUndefined();
          expect(game.state.moves).toHaveLength(9);
          expect(game.state.moves[8]).toEqual(move9);
        });
        it('should be able to determine o as winner when x leaves the game and set status to OVER', () => {
          game.join(player1);
          game.join(player2);
          const move1: TicTacToeMove = { row: 0, col: 2, gamePiece: 'X' };
          const move2: TicTacToeMove = { row: 0, col: 0, gamePiece: 'O' };
          const move3: TicTacToeMove = { row: 0, col: 1, gamePiece: 'X' };
          const move4: TicTacToeMove = { row: 1, col: 0, gamePiece: 'O' };
          const move5: TicTacToeMove = { row: 1, col: 1, gamePiece: 'X' };

          game.applyMove({
            gameID: game.id,
            playerID: player1.id,
            move: move1,
          });
          game.applyMove({
            gameID: game.id,
            playerID: player2.id,
            move: move2,
          });
          game.applyMove({
            gameID: game.id,
            playerID: player1.id,
            move: move3,
          });
          expect(game.state.status).toEqual('IN_PROGRESS');
          expect(game.state.winner).toBeUndefined();
          expect(game.state.moves).toHaveLength(3);
          expect(game.state.moves[2]).toEqual(move3);
          game.applyMove({
            gameID: game.id,
            playerID: player2.id,
            move: move4,
          });
          game.applyMove({
            gameID: game.id,
            playerID: player1.id,
            move: move5,
          });
          game.leave(player1);
          expect(game.state.status).toEqual('OVER');
          expect(game.state.winner).toEqual(player2.id);
          expect(game.state.moves).toHaveLength(5);
          expect(game.state.moves[4]).toEqual(move5);
        });
        it('should be able to determine o as winner when x leaves the game and set status to OVER', () => {
          game.join(player1);
          game.join(player2);
          const move1: TicTacToeMove = { row: 0, col: 1, gamePiece: 'X' };
          const move2: TicTacToeMove = { row: 2, col: 0, gamePiece: 'O' };
          const move3: TicTacToeMove = { row: 0, col: 2, gamePiece: 'X' };
          const move4: TicTacToeMove = { row: 1, col: 2, gamePiece: 'O' };
          const move5: TicTacToeMove = { row: 2, col: 2, gamePiece: 'X' };
          const move6: TicTacToeMove = { row: 1, col: 0, gamePiece: 'O' };

          game.applyMove({
            gameID: game.id,
            playerID: player1.id,
            move: move1,
          });
          game.applyMove({
            gameID: game.id,
            playerID: player2.id,
            move: move2,
          });
          game.applyMove({
            gameID: game.id,
            playerID: player1.id,
            move: move3,
          });
          expect(game.state.status).toEqual('IN_PROGRESS');
          expect(game.state.winner).toBeUndefined();
          expect(game.state.moves).toHaveLength(3);
          expect(game.state.moves[2]).toEqual(move3);
          game.applyMove({
            gameID: game.id,
            playerID: player2.id,
            move: move4,
          });
          game.applyMove({
            gameID: game.id,
            playerID: player1.id,
            move: move5,
          });
          game.applyMove({
            gameID: game.id,
            playerID: player2.id,
            move: move6,
          });
          game.leave(player2);
          expect(game.state.status).toEqual('OVER');
          expect(game.state.winner).toEqual(player1.id);
          expect(game.state.moves).toHaveLength(6);
          expect(game.state.moves[5]).toEqual(move6);
        });
      });
    });
  });
});
