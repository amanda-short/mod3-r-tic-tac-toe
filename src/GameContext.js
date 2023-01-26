import { useState, createContext, useContext } from 'react';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [move, setMove] = useState([]);
  const [message, setMessage] = useState([]);
  const [playerOne, setPlayerOne] = useState([]);
  const [playerTwo, setPlayerTwo] = useState([]);

  return (
    <GameContext.Provider
      value={{
        move,
        setMove,
        message,
        setMessage,
        playerOne,
        setPlayerOne,
        playerTwo,
        setPlayerTwo,
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
