import React, { useState } from "react";
import Cell from "./cell";

export default function Board() {
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [moves, setMoves] = useState(0);

  function handleLock() {
    setMoves((move) => move + 1);
    setCurrentPlayer((currentPlayer) => (currentPlayer === 1 ? 2 : 1));
  }

  return (
    <div>
      <div>현재 플레이어: {currentPlayer === 1 ? "X" : "O"}</div>
      <div>총 선택 수: {moves}</div>

      <div>
        {Array(9)
          .fill(null)
          .map((_, idx) => (
            <>
              <Cell
                index={idx}
                currentPlayer={currentPlayer}
                onLock={handleLock}
              />
              {idx % 3 === 2 ? <br /> : null}
            </>
          ))}
      </div>
    </div>
  );
}
