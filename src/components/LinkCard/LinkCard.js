import React from 'react'
import styles from './LinkCard.module.css'
import { Link } from 'react-router-dom'

export const LinkCard = ({ image, text, url }) => {
  return (
    <div className={styles.LinkCard}>
      <Link to={url}></Link>
      <div className={styles.top}>
        <img src={image} alt="" />
      </div>
      <div className={styles.bottom}>
        {text}
      </div>
    </div>
  )
}
