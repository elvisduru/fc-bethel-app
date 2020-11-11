import React, { useState, useEffect } from 'react'
import styles from './Blog.module.css'
import axios from 'axios'
import { PostCard } from '../../../components/PostCard/PostCard';

export const Blog = (props) => {
  const [posts, setPosts] = useState();
  const [status, setStatus] = useState();

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`/api/blog/${id}`)
      setStatus(res.data)
      fetchPosts()
    } catch (e) {
      console.log(e)
    }
  }

  const fetchPosts = async () => {
    const res = await axios.get('/api/blog')
    setPosts(res.data)
  }
  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <div className={styles.Blog}>
      {status && <div className={styles.alert}>
        <p>{status}</p>
        <p onClick={() => setStatus("")}>&times;</p>
      </div>}
      <h2>All Posts</h2>
      <div className={styles.posts}>
        {posts && posts.map(({ slug, title, subtitle, image, createdAt }, index) => <PostCard admin history={props.history} handleDelete={handleDelete} key={index} image={image} title={title} subtitle={subtitle} url={slug} date={createdAt} />)}
      </div>
    </div>
  )
}
