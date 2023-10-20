import React from 'react';
import { GameResult } from '../../../types/CoveyTownSocket';

/**
 * A component that renders a list of GameResult's as a leaderboard, formatted as a table with the following columns:
 * - Player: the name of the player
 * - Wins: the number of games the player has won
 * - Losses: the number of games the player has lost
 * - Ties: the number of games the player has tied
 * Each column has a header (a table header `th` element) with the name of the column.
 *
 *
 * The table is sorted by the number of wins, with the player with the most wins at the top.
 *
 * @returns
 */
export default function Leaderboard({ results }: { results: GameResult[] }): JSX.Element {
  const playerResults: { [name: string]: { wins: number; losses: number; ties: number } } = {};

  results.forEach(result => {
    const { scores } = result;
    const playerNames = Object.keys(scores);

    playerNames.forEach(name => {
      if (!playerResults[name]) {
        playerResults[name] = { wins: 0, losses: 0, ties: 0 };
      }
    });

    const [playerOneName, playerOneScore] = Object.entries(scores)[0];
    const [playerTwoName, playerTwoScore] = Object.entries(scores)[1];

    if (playerOneScore == 1 && playerTwoScore == 0) {
      playerResults[playerOneName].wins++;
      playerResults[playerTwoName].losses++;
    } else if (playerOneScore == 0 && playerTwoScore == 0) {
      playerResults[playerOneName].ties++;
      playerResults[playerTwoName].ties++;
    } else if (playerTwoScore == 1 && playerOneScore == 0) {
      playerResults[playerOneName].losses++;
      playerResults[playerTwoName].wins++;
    }
  });

  const sortedPlayerStatsArray = Object.entries(playerResults).sort(
    (a, b) => b[1].wins - a[1].wins,
  );

  const sortedPlayerStats = sortedPlayerStatsArray.reduce(
    (acc, [key, value]) => {
      acc[key] = value;
      return acc;
    },
    {} as { [name: string]: { wins: number; losses: number; ties: number } },
  );

  // playerResults.sort((a, b) => b.wins - a.wins);

  // const statsArray = Object.entries(playerResults).map(([name, stats]) => ({
  //   name,
  //   wins: stats.wins,
  //   losses: stats.losses,
  //   ties: stats.ties,
  // }));

  // statsArray.sort((a, b) => b.wins - a.wins);

  // const sortedPlayerStats = statsArray.reduce((acc, player) => {
  //   acc[player.name] = {
  //     wins: player.wins,
  //     losses: player.losses,
  //     ties: player.ties,
  //   };
  //   return acc;
  // }, {});

  return (
    <table>
      <thead>
        <tr>
          <th>Player</th>
          <th>Wins</th>
          <th>Losses</th>
          <th>Ties</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(sortedPlayerStats).map(playerName => (
          <tr key={playerName}>
            <td role='gridcell'>{playerName}</td>
            <td role='gridcell'>{sortedPlayerStats[playerName].wins}</td>
            <td role='gridcell'>{sortedPlayerStats[playerName].losses}</td>
            <td role='gridcell'>{sortedPlayerStats[playerName].ties}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
