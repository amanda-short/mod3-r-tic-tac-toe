import React from 'react';
import { useGameContext } from '../GameContext.js';
import Box from './Box.js';

export default function Board() {
  const { board } = useGameContext();

  return (
    <div className="board">
      {board.map((boxContent, index) => (
        <Box key={index} {...{ boxContent }} {...{ index }} />
      ))}
    </div>
  );
}


