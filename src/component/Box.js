import React from 'react';
import { useGameContext } from '../GameContext.js';

export default function Box({ boxContent, index }) {
  const { active, currentPlayer, setCurrentPlayer, board } = useGameContext();

  function handleClick() {
    if (boxContent === 'X') {
      return;
    }
    if (boxContent === 'O') {
      return;
    }
    if (!active) {
      return;
    } else {
      board[index] = currentPlayer;
      if (currentPlayer === 'X') {
        setCurrentPlayer('O');
      } else {
        setCurrentPlayer('X');
      }
    }
  }

  return (
    <>
      <button className="button" onClick={handleClick}></button>
      <div>
        {boxContent}
        <p>{index}</p>
      </div>
    </>
  );
}
