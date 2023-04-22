import Page from '@/components/game'
import DebugBar from '@/components/game/debugBar';
import { useEffect, useState } from 'react'

const Game = () => {
  const [keysPressed, setKeysPressed] = useState<string[]>([]);
  const [showDebugBar, setShowDebugBar] = useState<boolean>(false);

  useEffect(() => { 
    document.onkeydown = (e) => {
      setKeysPressed(old => Array.from(new Set([...old, e.key])));
    }
    document.onkeyup = (e) => {
      setKeysPressed(old => old.filter(key => key != e.key));
    }
  }, []);

  if(keysPressed.includes("A") && keysPressed.includes("Shift")) {
    setKeysPressed([]);
    setShowDebugBar(old => !old);
  }

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