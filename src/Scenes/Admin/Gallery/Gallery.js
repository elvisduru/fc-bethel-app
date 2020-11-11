import React, { useState, useEffect } from 'react'
import styles from './Gallery.module.css'
import Axios from 'axios'
import { ImageCard } from '../../../components/ImageCard/ImageCard'

export const Gallery = () => {
  const [formOpen, setFormOpen] = useState(false)
  const [uploads, setUpload] = useState()
  const [status, setStatus] = useState("")
  const [gallery, setGallery] = useState()

  const handleUpload = async () => {
    let formdata = new FormData()
    uploads.forEach((file, i) => {
      formdata.append(i, file)
    })
    const res = await Axios.post('/api/gallery', formdata)
    setStatus(res.data)
    setFormOpen(false)
    fetchGallery()
  }

  const handleDelete = async (id) => {
    try {
      const res = await Axios.delete(`/api/gallery/${id}`)
      setStatus(res.data)
      fetchGallery()
    } catch (e) {
      console.log(e)
    }
  }

  const fetchGallery = async () => {
    const res = await Axios.get('/api/gallery')
    setGallery(res.data)
  }
  useEffect(() => {
    fetchGallery()
  }, [])

  return (
    <div className={styles.Gallery}>
      <div className={styles.top}>
        <h1>Gallery</h1>
        <div className={styles.controls}>
          <button onClick={() => setFormOpen(true)}>New Photo(s)</button>
          <button>Batch Delete</button>
        </div>
      </div>
      <div className={styles.main}>
        {status && <div className={styles.alert}>
          <p>{status}</p>
          <p onClick={() => setStatus("")}>&times;</p>
        </div>}
        <div className={styles.files}>
          {gallery && gallery.map(({ src, _id }, index) => <ImageCard handleDelete={handleDelete} key={index} src={src} id={_id} />)}
        </div>
      </div>
      {formOpen ? (
        <div className={styles.uploadForm}>
          <div onClick={() => setFormOpen(false)} className={styles.backdrop}></div>
          <div className={styles.content}>
            <div className={styles.header}>
              <h3>Modal</h3>
              <p onClick={() => setFormOpen(false)}>&times;</p>
            </div>
            <div className={styles.formgroup}>
              <h2>Upload Files</h2>
              <input type="file" onChange={e => setUpload(Array.from(e.target.files))} accept="image/*,video/*" multiple />
            </div>
            <div className={styles.footer}>
              <button onClick={() => setFormOpen(false)}>Cancel</button>
              <button onClick={handleUpload}>Upload</button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}
