import { Button, chakra, Container, useToast } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import TicTacToeAreaController from '../../../../classes/interactable/TicTacToeAreaController';
import { TicTacToeCell } from '../../../../classes/interactable/TicTacToeAreaController';
import { TicTacToeGridPosition } from '../../../../types/CoveyTownSocket';

export type TicTacToeGameProps = {
  gameAreaController: TicTacToeAreaController;
};

/**
 * A component that will render a single cell in the TicTacToe board, styled
 */
const StyledTicTacToeSquare = chakra(Button, {
  baseStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flexBasis: '33%',
    border: '1px solid black',
    height: '33%',
    fontSize: '50px',
    _disabled: {
      opacity: '100%',
    },
  },
});
/**
 * A component that will render the TicTacToe board, styled
 */
const StyledTicTacToeBoard = chakra(Container, {
  baseStyle: {
    display: 'flex',
    width: '400px',
    height: '400px',
    padding: '5px',
    flexWrap: 'wrap',
  },
});

/**
 * A component that renders the TicTacToe board
 *
 * Renders the TicTacToe board as a "StyledTicTacToeBoard", which consists of 9 "StyledTicTacToeSquare"s
 * (one for each cell in the board, starting from the top left and going left to right, top to bottom).
 * Each StyledTicTacToeSquare has an aria-label property that describes the cell's position in the board,
 * formatted as `Cell ${rowIndex},${colIndex}`.
 *
 * The board is re-rendered whenever the board changes, and each cell is re-rendered whenever the value
 * of that cell changes.
 *
 * If the current player is in the game, then each StyledTicTacToeSquare is clickable, and clicking
 * on it will make a move in that cell. If there is an error making the move, then a toast will be
 * displayed with the error message as the description of the toast. If it is not the current player's
 * turn, then the StyledTicTacToeSquare will be disabled.
 *
 * @param gameAreaController the controller for the TicTacToe game
 */
export default function TicTacToeBoard({ gameAreaController }: TicTacToeGameProps): JSX.Element {
  const [board, setBoard] = useState(gameAreaController.board);
  const [isOurTurn, setIsOurTurn] = useState(gameAreaController.isOurTurn);

  const toast = useToast();

  useEffect(() => {
    const handleBoardChanged = (newBoard: TicTacToeCell[][]) => {
      setBoard(newBoard);
    };

    const handleTurnChanged = (newIsOurTurn: boolean) => {
      setIsOurTurn(newIsOurTurn);
    };

    gameAreaController.addListener('boardChanged', handleBoardChanged);
    gameAreaController.addListener('turnChanged', handleTurnChanged);

    return () => {
      gameAreaController.removeListener('boardChanged', handleBoardChanged);
      gameAreaController.removeListener('turnChanged', handleTurnChanged);
    };
  }, [gameAreaController]);

  async function clickButton(row: TicTacToeGridPosition, col: TicTacToeGridPosition) {
    try {
      await gameAreaController.makeMove(row, col);
    } catch (error) {
      toast({
        status: 'error',
        description: `${error}`,
      });
    }
  }

  // loop nine times to create squares for each tic tac toe square
  const boardCells = [];
  for (let i = 0; i < 9; i++) {
    const row = Math.floor(i / 3) as TicTacToeGridPosition;
    const col = (i % 3) as TicTacToeGridPosition;
    //disable the cell if the player is not in the game or if its not their turn
    boardCells.push(
      <StyledTicTacToeSquare
        isDisabled={!gameAreaController.isPlayer || !isOurTurn}
        onClick={() => clickButton(row, col)}
        aria-label={`Cell ${row},${col}`}
        key={`${row}${col}`}>
        {board[row][col]}
      </StyledTicTacToeSquare>,
    );
  }

  return <StyledTicTacToeBoard aria-label='Tic-Tac-Toe Board'> {boardCells} </StyledTicTacToeBoard>;
}
