import React, { useState, useEffect } from 'react'
import styles from './ViewPost.module.css'
import { useParams, Link } from 'react-router-dom';
import axios from 'axios'

export const ViewPost = (props) => {
  const [post, setPost] = useState();

  const { id } = useParams()

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get(`/api/blog/${id}`)
      setPost(res.data)
    }

    fetchPost()
  }, [id])

  const handleDelete = async (id) => {
    try {
      console.log(id)
      const res = await axios.delete(`/api/blog/${id}`)
      setPost(res.data)
      props.history.goBack()
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className={styles.ViewPost}>
      <div className={styles.left}>
        <Link to={`/admin/blog/edit/${id}`}>Edit</Link>
        <button onClick={() => handleDelete(id)}>Delete</button>
      </div>
      <div className={styles.right}>
        <div className={styles.content}>
          {post && (
            <>
              <h3>{new Date(post.createdAt).toDateString()}</h3>
              <h1>{post.title}</h1>
              <p>{post.subtitle}</p>
              <div className={styles.featuredImg}>
                <img src={post.image} alt="" />
              </div>
              <div className={styles.body} dangerouslySetInnerHTML={{ __html: post.body }}></div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
