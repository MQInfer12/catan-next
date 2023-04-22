import Page from '@/components/game/page'
import DebugBar from '@/components/game/debugBar/debugBar';
import { useToggleKeyCombination } from '@/hooks/useToggleKeyCombination';

const Game = () => {
  const showDebugBar = useToggleKeyCombination(["shift", "d"]);

  return (
    <>
      {
        showDebugBar &&
        <DebugBar />
      }
      <Page />
    </>
  )
}

export default Game