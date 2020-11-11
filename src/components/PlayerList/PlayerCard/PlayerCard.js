import React from 'react';
import styles from './PlayerCard.module.css';

import { Fade } from "react-reveal";

export const PlayerCard = ({ name, image, number, setUser, findPlayer }) => {
  return (
    <Fade>
      <div className={styles.PlayerCard} onClick={() => setUser(findPlayer(name))} >
        <div className={styles.top}>
          <img src={image} alt="" />
          <figure>{number}</figure>
        </div>
        <div className={styles.bottom}>
          <p>{name}</p>
        </div>
      </div>
    </Fade>
  )
}
