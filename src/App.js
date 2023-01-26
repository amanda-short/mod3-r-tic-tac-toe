import { useState } from 'react';
import './App.css';
import Game from './component/Game.js';

function App() {
  const [move, setMove] = useState([]);
  const [message, setMessage] = useState([]);
  const [playerOne, setPlayerOne] = useState([]);
  const [playerTwo, setPlayerTwo] = useState([]);

  return <Game />;
}

export default App;
