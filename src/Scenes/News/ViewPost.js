import React, { useState, useEffect } from 'react'
import styles from './ViewPost.module.css'
import { useParams } from 'react-router-dom';
import axios from 'axios'
import Menu from '../../containers/Menu/Menu';
import { Footer } from '../../components/Footer/Footer';

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

  return (
    <div className={styles.ViewPost}>
      <Menu />
      <main>
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
      </main>
      <Footer />
    </div>
  )
}
