import { useEffect, useState } from "react";

export const useToggleKeyCombination = (keys: string[]) => {
  const [keysPressed, setKeysPressed] = useState<string[]>([]);
  const [active, setActive] = useState<boolean>(false);
  
  useEffect(() => { 
    document.onkeydown = (e) => {
      setKeysPressed(old => Array.from(new Set([...old, e.key.toLowerCase()])));
    }
    document.onkeyup = (e) => {
      setKeysPressed(old => old.filter(key => key != e.key.toLowerCase()));
    }
  }, []);

  useEffect(() => {
    if(keys.every(key => keysPressed.includes(key))) {
      setKeysPressed([]);
      setActive(old => !old);
    }
  }, [keysPressed]);

  return active;
}