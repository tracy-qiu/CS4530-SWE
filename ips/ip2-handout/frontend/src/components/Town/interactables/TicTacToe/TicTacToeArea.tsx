import {
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useToast,
  Button,
} from '@chakra-ui/react';
import React, { useCallback, useState, useEffect } from 'react';
import TicTacToeAreaController from '../../../../classes/interactable/TicTacToeAreaController';
import { useInteractable, useInteractableAreaController } from '../../../../classes/TownController';
import useTownController from '../../../../hooks/useTownController';
import { InteractableID } from '../../../../types/CoveyTownSocket';
import GameAreaInteractable from '../GameArea';
import Leaderboard from '../Leaderboard';
import TicTacToeBoard from './TicTacToeBoard';
import PlayerController from '../../../../classes/PlayerController';

/**
 * The TicTacToeArea component renders the TicTacToe game area.
 * It renders the current state of the area, optionally allowing the player to join the game.
 *
 * It uses Chakra-UI components (does not use other GUI widgets)
 *
 * It uses the TicTacToeAreaController to get the current state of the game.
 * It listens for the 'gameUpdated' and 'gameEnd' events on the controller, and re-renders accordingly.
 * It subscribes to these events when the component mounts, and unsubscribes when the component unmounts. It also unsubscribes when the gameAreaController changes.
 *
 * It renders the following:
 * - A leaderboard (@see Leaderboard.tsx), which is passed the game history as a prop
 * - A list of observers' usernames (in a list with the aria-label 'list of observers in the game', one username per-listitem)
 * - A list of players' usernames (in a list with the aria-label 'list of players in the game', one item for X and one for O)
 *    - If there is no player in the game, the username is '(No player yet!)'
 *    - List the players as (exactly) `X: ${username}` and `O: ${username}`
 * - A message indicating the current game status:
 *    - If the game is in progress, the message is 'Game in progress, {moveCount} moves in, currently {whoseTurn}'s turn'. If it is currently our player's turn, the message is 'Game in progress, {moveCount} moves in, currently your turn'
 *    - Otherwise the message is 'Game {not yet started | over}.'
 * - If the game is in status WAITING_TO_START or OVER, a button to join the game is displayed, with the text 'Join New Game'
 *    - Clicking the button calls the joinGame method on the gameAreaController
 *    - Before calling joinGame method, the button is disabled and has the property isLoading set to true, and is re-enabled when the method call completes
 *    - If the method call fails, a toast is displayed with the error message as the description of the toast (and status 'error')
 *    - Once the player joins the game, the button dissapears
 * - The TicTacToeBoard component, which is passed the current gameAreaController as a prop (@see TicTacToeBoard.tsx)
 *
 * - When the game ends, a toast is displayed with the result of the game:
 *    - Tie: description 'Game ended in a tie'
 *    - Our player won: description 'You won!'
 *    - Our player lost: description 'You lost :('
 *
 */
function TicTacToeArea({ interactableID }: { interactableID: InteractableID }): JSX.Element {
  const gameAreaController = useInteractableAreaController<TicTacToeAreaController>(interactableID);

  const [observers, setObservers] = useState(gameAreaController.observers);
  const [x, setX] = useState<PlayerController | undefined>(gameAreaController.x);
  const [o, setO] = useState<PlayerController | undefined>(gameAreaController.o);
  const [history, setHistory] = useState(gameAreaController.history);
  const [status, setStatus] = useState(gameAreaController.status);
  const [moveCount, setMoveCount] = useState(gameAreaController.moveCount);
  const [whoseTurn, setWhoseTurn] = useState(gameAreaController.whoseTurn);
  const [isOurTurn, setIsOurTurn] = useState(gameAreaController.isOurTurn);
  const [winner, setWinner] = useState(gameAreaController.winner);
  const [joinButtonDisabled, setJoinButtonDisabled] = useState(false);
  const [loadingJoinGame, setLoadingJoinGame] = useState(false);
  const [isPlayer, setIsPlayer] = useState(gameAreaController.isPlayer);

  const toast = useToast();

  useEffect(() => {
    const handleGameUpdated = () => {
      setObservers(gameAreaController.observers);
      setHistory(gameAreaController.history);
      setX(gameAreaController.x);
      setO(gameAreaController.o);
      setStatus(gameAreaController.status);
      setMoveCount(gameAreaController.moveCount);
      setWhoseTurn(gameAreaController.whoseTurn);
      setIsOurTurn(gameAreaController.isOurTurn);
      setWinner(gameAreaController.winner);
      setIsPlayer(gameAreaController.isPlayer);
      if (status == 'IN_PROGRESS') {
        setJoinButtonDisabled(true);
        setLoadingJoinGame(false);
      } else if (gameAreaController.status == 'WAITING_TO_START') {
        setJoinButtonDisabled(false);
        setLoadingJoinGame(false);
      }
    };

    const handleGameEnd = () => {
      //display who won using toast
      return (
        <div>
          {!winner &&
            toast({
              description: 'Game ended in a tie',
            })}
          {((winner == x && gameAreaController.gamePiece == 'X') ||
            (winner == o && gameAreaController.gamePiece == 'O')) &&
            toast({
              description: 'You won!',
            })}

          {((winner == x && gameAreaController.gamePiece == 'O') ||
            (winner == o && gameAreaController.gamePiece == 'X')) &&
            toast({
              description: 'You lost :(',
            })}
        </div>
      );
    };
    gameAreaController.addListener('gameUpdated', handleGameUpdated);
    gameAreaController.addListener('gameEnd', handleGameEnd);
    return () => {
      gameAreaController.removeListener('gameUpdated', handleGameUpdated);
      gameAreaController.removeListener('gameEnd', handleGameEnd);
    };
  }, [gameAreaController, x, o, status, toast, winner]);

  async function joinGameClick() {
    try {
      setJoinButtonDisabled(true);
      setLoadingJoinGame(true);
      await gameAreaController.joinGame();
      setJoinButtonDisabled(false);
      setLoadingJoinGame(false);
    } catch (error) {
      toast({
        status: 'error',
        description: `${error}`,
      });
    }
  }
  // TODO - implement this component
  return (
    <div>
      <Leaderboard results={history} />
      <ul aria-label='list of observers in the game'>
        {observers.map(observer => (
          <li key={observer.userName}>{observer.userName}</li>
        ))}
      </ul>
      <ul aria-label='list of players in the game' role='list'>
        <li> X: {x?.userName || '(No player yet!)'}</li>
        <li> O: {o?.userName || '(No player yet!)'} </li>
      </ul>
      {status == 'IN_PROGRESS' && !isOurTurn && (
        <div>
          Game in progress, {moveCount} moves in, currently {whoseTurn?.userName}&apos;s turn
        </div>
      )}
      {status == 'IN_PROGRESS' && isOurTurn && (
        <div>Game in progress, {moveCount} moves in, currently your turn</div>
      )}
      {status == 'WAITING_TO_START' && <div>Game not yet started</div>}
      {status == 'OVER' && <div>Game over</div>}
      {(status == 'WAITING_TO_START' || status == 'OVER') && !isPlayer && (
        <Button isDisabled={joinButtonDisabled} onClick={() => joinGameClick()}>
          {!loadingJoinGame && `Join New Game`}
          {loadingJoinGame && `Loading...`}
        </Button>
      )}
      <TicTacToeBoard gameAreaController={gameAreaController}></TicTacToeBoard>
    </div>
  );
}

// Do not edit below this line
/**
 * A wrapper component for the TicTacToeArea component.
 * Determines if the player is currently in a tic tac toe area on the map, and if so,
 * renders the TicTacToeArea component in a modal.
 *
 */
export default function TicTacToeAreaWrapper(): JSX.Element {
  const gameArea = useInteractable<GameAreaInteractable>('gameArea');
  const townController = useTownController();
  const closeModal = useCallback(() => {
    if (gameArea) {
      townController.interactEnd(gameArea);
      const controller = townController.getGameAreaController(gameArea);
      controller.leaveGame();
    }
  }, [townController, gameArea]);

  if (gameArea && gameArea.getData('type') === 'TicTacToe') {
    return (
      <Modal isOpen={true} onClose={closeModal} closeOnOverlayClick={false}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{gameArea.name}</ModalHeader>
          <ModalCloseButton />
          <TicTacToeArea interactableID={gameArea.name} />;
        </ModalContent>
      </Modal>
    );
  }
  return <></>;
}
