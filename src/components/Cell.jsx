import React, { useState } from "react";
export default function Cell({ currentPlayer, index, onLock }) {
  const [pressed, setPressed] = useState(false);
  const [owner, setOwner] = useState(null);

  function handleClick() {
    if (pressed) return;

    setPressed(true);
    setOwner(currentPlayer);
    onLock(currentPlayer);
  }

  const symbol = owner === 1 ? "X" : owner === 2 ? "O" : "";

  return (
    <button onClick={handleClick} pressed={pressed} index={index}>
      {symbol}
    </button>
  );
}
