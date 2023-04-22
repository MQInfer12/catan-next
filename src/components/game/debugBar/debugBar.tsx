import React from 'react'
import styles from './styles.module.scss'
import { useGameVariables } from '@/context/gameVariables'

const DebugBar = () => {
  const { hexagonSize, changeHexagonSize } = useGameVariables();

  return (
    <div className={styles.container}>
      <div>
        <label>Tamaño: </label>
        <input 
          type="number"
          step="5"
          value={hexagonSize} 
          onChange={(e) => changeHexagonSize(Number(e.target.value))}
        />
      </div>
    </div>
  )
}

export default DebugBar