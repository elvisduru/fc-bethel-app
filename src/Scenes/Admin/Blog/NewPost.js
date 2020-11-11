import React, { useState } from 'react'
import styles from './NewPost.module.css'
import axios from "axios"

import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { Link, useParams } from 'react-router-dom'
import { useEffect } from 'react'

export const NewPost = () => {
  const [status, setStatus] = useState({ msg: "", url: "" })
  const [body, setBody] = useState('')
  const [fields, setFields] = useState({ title: "", subtitle: "" })
  const [image, setImage] = useState()

  let { id } = useParams();

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
      ['link', 'image'],
      ['clean']
    ],
  }

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ]

  const handleInput = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value })
  }

  const handleSubmit = async () => {
    const blog = { ...fields, body, image }
    let formdata = new FormData()
    for (let key in blog) {
      formdata.append(key, blog[key])
    }
    try {
      if (id) {
        const res = await axios.put(`/api/blog/${id}`, formdata)
        setStatus(res.data)
      } else {
        const res = await axios.post('/api/blog', formdata)
        setStatus(res.data)
      }
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    const fetchPost = async () => {
      try {
        if (!id) {
          return
        }
        const res = await axios.get(`/api/blog/${id}`)
        setBody(res.data.body)

        const { title, subtitle } = res.data
        setFields({ title, subtitle })
      } catch (e) {
        console.log(e)
      }
    }
    fetchPost()
  }, [id])

  return (
    <div className={styles.NewPost}>
      {status.msg && <div className={styles.alert}>
        <p>{status.msg} <Link style={{ textDecoration: 'underline' }} to={id ? `/admin/blog/${id}` : status.url}>View Post</Link></p>
        <p onClick={() => setStatus({ msg: "", url: "" })}>&times;</p>
      </div>}
      <h2>{id ? 'Edit' : 'New'} Post</h2>
      <div className={styles.listbox}>
        <div className={styles.listitem}>
          <div className={styles.formgroup}>
            <input style={{ fontSize: '24px' }} type="text" name="title" onChange={handleInput} value={fields.title} placeholder="Your Post Title Here" />
            <label htmlFor="title">Title</label>
          </div>
        </div>
        <div className={styles.listitem}>
          <div className={styles.formgroup}>
            <input type="text" name="subtitle" onChange={handleInput} value={fields.subtitle} placeholder="Your Post Subtitle Here" />
            <label htmlFor="title">Subtitle</label>
          </div>
        </div>
        <div className={styles.listitem}>
          <ReactQuill style={{ height: '200px', marginBottom: '40px' }} placeholder="Create your post..." modules={modules} formats={formats} value={body} onChange={value => setBody(value)} />
        </div>
        <div className={styles.listitem} style={{ flexDirection: 'row' }}>
          <label htmlFor="featuredImg">Feature Image: </label>
          <input type="file" name="image" onChange={e => setImage(e.target.files[0])} id="featuredImg" accept="image/*" />
        </div>
      </div>
      <button onClick={handleSubmit}>{id ? 'Update' : 'Publish'}</button>
    </div>
  )
}
