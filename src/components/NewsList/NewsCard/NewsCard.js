import React from 'react';
import styles from './NewsCard.module.css';

export const NewsCard = ({ image, title, date, body }) => {
  return (
    <div className={styles.NewsCard}>
      <div className={styles.cardImg}>
        <img src={image} alt="" />
      </div>
      <div className={styles.cardBody}>
        <h4>{title}</h4>
        <p>{date}</p>
        <div>{body}</div>
      </div>
    </div>
  )
}
