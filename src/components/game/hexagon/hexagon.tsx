import React from 'react'
import styles from './styles.module.scss'
import { useGameVariables } from '@/context/gameVariables'

const Hexagon = () => {
  const { hexagonSize } = useGameVariables();

  return (
    <div 
      style={{
        marginTop: `${hexagonSize / -6}px`,
        filter: 
          `drop-shadow(-${hexagonSize / 20}px 0px ${hexagonSize / 30}px rgba(245,207,103,.75)) 
          drop-shadow(${hexagonSize / 20}px 0px ${hexagonSize / 30}px rgba(245,207,103,.75))
          drop-shadow(0px ${hexagonSize / 20}px ${hexagonSize / 30}px rgba(245,207,103,.75))
          drop-shadow(0px -${hexagonSize / 20}px ${hexagonSize / 30}px rgba(245,207,103,.75))`
      }}
      className={styles.hexagonContainer}
    >
      <div 
        className={styles.hexagon}
        style={{ height: `${hexagonSize}px` }}
      >
        <div className={styles.background}></div>
      </div>
    </div>
  )
}

export default Hexagon