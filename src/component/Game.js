import React from 'react';
import { useGameContext } from '../GameContext.js';
import Board from './Board.js';

export default function Game() {
  const { board } = useGameContext();

  return (
    <div className="game">
      <div className="game-board">
        <Board boxes={board}></Board>
      </div>
      <div className="game-info">
        <div>Next player is X</div>
        <button>Start game</button>
      </div>
    </div>
  );
}
