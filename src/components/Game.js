import React, { useState } from "react";
import Board from "./Board";
import { calculateWinner } from "./helpers";
import "tachyons";
// import { useWindowSize } from 'react-use'
import Confetti from "react-confetti";

const styles = {
  width: "200px",
  margin: "20px auto",
};

export default function Game() {
  // const { width, height } = useWindowSize()
  const width = 1000;
  const height = 1000;
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(board);
  const handleClick = (i) => {
    const boardCopy = [...board];

    if (winner || boardCopy[i]) return;

    boardCopy[i] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXisNext(!xIsNext);
  };

  const renderMoves = () => (
    <button
      style={{
        borderWidth: "2",
        width: 100,
        height: 40,
        backgroundColor: "#fc6767",
        cursor: "pointer",
      }}
      onClick={() => setBoard(Array(9).fill(null))}
    >
      Start Game{" "}
    </button>
  );
  const winnerCelebration = () => {
    return (
      <>
        <p>Winner {winner}</p>
        <Confetti width={width} height={height} />
      </>
    );
  };

  return (
    <>
      <Board squares={board} onClick={handleClick} />
      <div style={styles} className="tc">
        <p>
          {winner
            ? winnerCelebration()
            : "Next Player: " + (xIsNext ? "X" : "O")}{" "}
        </p>
        {renderMoves()}
      </div>
    </>
  );
}
