import React from 'react'
import styles from './NewsList.module.css'

import { NewsCard } from './NewsCard/NewsCard'

export const NewsList = (props) => {
  return (
    <div className={styles.NewsList}>
      {props.news.map(({ image, title, date, body }, index) => <NewsCard key={index} body={body} title={title} date={date} image={image} />)}
    </div>
  )
}
