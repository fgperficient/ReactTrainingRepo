import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import GameOver from "./components/GameOver";
import { useState } from "react";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning-combination";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

const setActivePlayer = turns => {
  let currentPlayer = "X";
  if (turns.length > 0 && turns[0].player == "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
};

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [players, setPlayers] = useState({ X: "Player1", O: "Player2" });

  const activePlayer = setActivePlayer(gameTurns);

  const gameBoard = [...initialGameBoard.map(array => [...array])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  let hasWinner;

  for (const combination of WINNING_COMBINATIONS) {
    const firstPairSimbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondPairSimbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdPairSimbol =
      gameBoard[combination[2].row][combination[2].column];
    if (
      firstPairSimbol &&
      firstPairSimbol === secondPairSimbol &&
      secondPairSimbol === thirdPairSimbol
    ) {
      hasWinner = players[firstPairSimbol] ?? firstPairSimbol;
    }
  }

  const draw = gameTurns.length === 9 && !hasWinner;

  const handleSelectSquare = (rowIndex, colIndex) => {
    setGameTurns(prevTurns => {
      let currentPlayer = "X";
      if (prevTurns.length > 0 && prevTurns[0].player == "X") {
        currentPlayer = "O";
      }
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns
      ];
      return updatedTurns;
    });
  };

  const handleRestart = () => {
    setGameTurns([]);
  };

  const handlePlayerNameChange = (symbol, newName) => {
    debugger;
    setPlayers(prevPlayers => {
      return {
        ...prevPlayers,
        [symbol]: newName
      };
    });
  };

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            key={1}
            name={players.X}
            symbol={"X"}
            isActive={activePlayer === "X"}
            onChangeName={handlePlayerNameChange}
          />
          <Player
            key={2}
            name={players.O}
            symbol={"O"}
            isActive={activePlayer === "O"}
            onChangeName={handlePlayerNameChange}
          />
        </ol>
        {(hasWinner || draw) && (
          <GameOver winner={hasWinner} onRestart={handleRestart} />
        )}
        <GameBoard
          onSelecSquare={handleSelectSquare}
          board={gameBoard}
          hasWinner={hasWinner}
        />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
