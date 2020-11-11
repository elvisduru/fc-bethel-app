import React, { useEffect, useState } from "react";
import styles from "./News.module.css";

import axios from 'axios'
import { PostCard } from "../../components/PostCard/PostCard";

export const News = (props) => {

  const [posts, setPosts] = useState();

  const fetchPosts = async () => {
    const res = await axios.get('/api/blog')
    setPosts(res.data)
  }
  useEffect(() => {
    fetchPosts()
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  if (!posts) {
    return null
  }
  return (
    <div className={styles.News} id="news">
      <h2>Latest News</h2>
      <main>
        {posts && posts.map(({ slug, title, subtitle, image, createdAt, _id }, index) => <PostCard history={props.history} key={_id} image={image} title={title} subtitle={subtitle} url={slug} date={createdAt} />)}
      </main>
    </div>
  )
};
