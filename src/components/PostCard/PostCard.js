import React from 'react'
import styles from './PostCard.module.css'
import { Link } from 'react-router-dom'

import Logo from '../../images/logo.png'

export const PostCard = ({ url, title, subtitle, image, date, handleDelete, history, admin }) => {
  return (
    <div className={styles.PostCard}>
      {admin ? (
        <Link to={`/admin/blog/${url}`}>
          <div>
            <button onClick={e => {
              e.preventDefault()
              history.push(`/admin/blog/edit/${url}`)
            }}>Edit</button>
            <button onClick={e => {
              e.preventDefault()
              handleDelete(url)
            }}>Delete</button>
          </div>
        </Link>
      ) : <Link to={`/news/${url}`}>
        </Link>}
      <div>
        <img src={image !== "undefined" ? image : Logo} alt="" />
        <div className={styles.footer}>
          <h4>{title}</h4>
          <p>{new Date(date).toLocaleDateString()}</p>
          <p>{subtitle}</p>
        </div>
      </div>
    </div>
  )
}
