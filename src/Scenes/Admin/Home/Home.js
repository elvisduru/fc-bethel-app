import React from 'react'
import styles from './Home.module.css'

import newPostImg from '../../../images/contract.svg'
import viewPostsImg from '../../../images/blogging.svg'
import galleryImg from '../../../images/art.svg'
import teamImg from '../../../images/sport.svg'
import contactIcon from '../../../images/phone-contact-black.svg';
import recycleIcon from '../../../images/recycle-black.svg';
import rssIcon from '../../../images/rss-black.svg';
import { LinkCard } from '../../../components/LinkCard/LinkCard'

export const Home = () => {
  return (
    <div className={styles.Home}>
      <h1>Hello, What would you like to do?</h1>
      <main>
        <section>
          <h4>Blog</h4>
          <div>
            <LinkCard image={newPostImg} text="Create Post" url="/admin/blog/new" />
            <LinkCard image={viewPostsImg} text="View Posts" url="/admin/blog/" />
          </div>
        </section>
        <section>
          <h4>Website</h4>
          <div>
            <LinkCard image={galleryImg} text="Upload Image(s)" url="/admin/gallery" />
            <LinkCard image={teamImg} text="Edit Team Info" />
          </div>
        </section>
        <section>
          <h4>Forms</h4>
          <div>
            <LinkCard image={contactIcon} text="View Contacts" url="/admin/contact" />
            <LinkCard image={recycleIcon} text="View Partnerships" url="/admin/partnership" />
            <LinkCard image={rssIcon} text="View Subscribers" url="/admin/subscribe" />
          </div>
        </section>
      </main>
    </div>
  )
}
