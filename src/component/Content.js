import { useGameContext } from '../GameContext.js';

export default function Content({ state }) {
  const { state } = useGameContext();
  return <div></div>;
}
