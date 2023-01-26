import './App.css';
import { useGameContext } from './GameContext.js';

function App() {
  const { state } = useGameContext();
  return (
    <div className="App">
      <Section></Section>
    </div>
  );
}

export default App;

