import React from 'react'
import styles from './styles.module.scss'
import Hexagon from './hexagon/hexagon'
import { useGameVariables } from '@/context/gameVariables'

const Page = () => {
  const { hexagonSize } = useGameVariables();
  
  return (
    <div className={styles.container}>
      <div 
        className={styles.rowContainer}
        style={{
          gap: `${hexagonSize / 12}px`
        }}
      >
        <Hexagon />
        <Hexagon />
        <Hexagon />
      </div>
      <div 
        className={styles.rowContainer}
        style={{
          gap: `${hexagonSize / 12}px`
        }}
      >
        <Hexagon />
        <Hexagon />
        <Hexagon />
        <Hexagon />
      </div>
      <div 
        className={styles.rowContainer}
        style={{
          gap: `${hexagonSize / 12}px`
        }}
      >
        <Hexagon />
        <Hexagon />
        <Hexagon />
        <Hexagon />
        <Hexagon />
      </div>
      <div 
        className={styles.rowContainer}
        style={{
          gap: `${hexagonSize / 12}px`
        }}
      >
        <Hexagon />
        <Hexagon />
        <Hexagon />
        <Hexagon />
      </div>
      <div 
        className={styles.rowContainer}
        style={{
          gap: `${hexagonSize / 12}px`
        }}
      >
        <Hexagon />
        <Hexagon />
        <Hexagon />
      </div>
    </div>
  )
}

export default Page