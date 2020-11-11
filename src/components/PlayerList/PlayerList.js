import React from 'react';
import styles from './PlayerList.module.css';
import { PlayerCard } from './PlayerCard/PlayerCard';

export const PlayerList = ({ staff, players, title, findPlayer, setUser }) => {
  return (
    <div className={styles.PlayerList}>
      {title ? <h3>{title}</h3> : null}
      <div>
        {players ? players.map(({ name, image, number }, index) => (
          <PlayerCard name={name} image={image} number={number} key={index} findPlayer={findPlayer} setUser={setUser} />
        )) : staff.map(({ name, image, bio, position }, index) => (
          <PlayerCard name={name} image={image} bio={bio} position={position} key={index} findPlayer={findPlayer} setUser={setUser} />
        ))}
      </div>
    </div>
  )
}