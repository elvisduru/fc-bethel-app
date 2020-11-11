import React from 'react'
import styles from './ImageCard.module.css'

export const ImageCard = ({ id, src, handleDelete }) => {
  return (
    <div className={styles.ImageCard}>
      <div>
        <button onClick={() => handleDelete(id)}>Delete</button>
      </div>
      <div>
        <img src={src} alt="" />
      </div>
    </div>
  )
}
