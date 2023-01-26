import { useGameContext } from '../GameContext.js';

export default function Board({ state }) {
  const { state } = useGameContext();
    return (
      <div className="board">
        <div className="pos1"></div>
        <div className="pos2"></div>
        <div className="pos3"></div>
        <div className="pos4"></div>
        <div className="pos5"></div>
        <div className="pos6"></div>
        <div className="pos7"></div>
        <div className="pos8"></div>
        <div className="pos9"></div>
      </div>
    );
}
