import { useState, createContext, useContext } from 'react';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [currentPlayer, setCurrentPlayer] = useState(['X']);
  const [active, setActive] = useState(['']);
  const [message, setMessage] = useState('Your turn X');
  const [board, setBoard] = useState(['X', '', 'X', '', 'O', '', '', '', '']);

  return (
    <GameContext.Provider
      value={{
        currentPlayer,
        setCurrentPlayer,
        message,
        setMessage,
        board,
        setBoard,
        active,
        setActive,
      }}
    >
      {' '}
      {children}
    </GameContext.Provider>
  );
};

const useGameContext = () => {
  const context = useContext(GameContext);
  return context;
};

export { GameProvider, useGameContext };
