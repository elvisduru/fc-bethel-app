import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';
import userIcon from '../../../images/user.png';
import dashboardIcon from '../../../images/dashboard.svg';
import ordersIcon from '../../../images/orders.svg';
import formsIcon from '../../../images/forms.svg';
import contactIcon from '../../../images/phone-contact.svg';
import recycleIcon from '../../../images/recycle.svg';
import rssIcon from '../../../images/rss.svg';

import newPostImg from '../../../images/contract-white.svg'
import viewPostsImg from '../../../images/blog-white.svg'
import galleryImg from '../../../images/art-white.svg'
import teamImg from '../../../images/sport-white.svg'

const NavBar = (props) => {
  return (
    <div className={styles.NavBar}>
      <div className={styles.title}>
        Admin Dashboard
      </div>
      <div className={styles.user}>
        <img src={userIcon} alt="" />
        <div>
          <p>Admin</p>
          <p>Administrator</p>
        </div>
      </div>
      <div className={styles.links}>
        <NavLink exact to="/admin">
          <img src={dashboardIcon} alt="" />
          <p>Dashboard</p>
        </NavLink>
        <div className={styles.section}>
          <img src={ordersIcon} alt="" />
          <p>Blog</p>
        </div>
        <NavLink exact to="/admin/blog/new">
          <img src={newPostImg} alt="" />
          <p>New Post</p>
        </NavLink>
        <NavLink exact to="/admin/blog">
          <img src={viewPostsImg} alt="" />
          <p>View All Posts</p>
        </NavLink>
        <div className={styles.section}>
          <img src={ordersIcon} alt="" />
          <p>Website</p>
        </div>
        <NavLink to="/admin/gallery">
          <img src={galleryImg} alt="" />
          <p>Gallery</p>
        </NavLink>
        <NavLink to="/admin/team">
          <img src={teamImg} alt="" />
          <p>Team</p>
        </NavLink>
        <div className={styles.section}>
          <img src={formsIcon} alt="" />
          <p>Form Submissions</p>
        </div>
        <NavLink to="/admin/contact">
          <img src={contactIcon} alt="" />
          <p>Contact Form</p>
        </NavLink>
        <NavLink to="/admin/partnership">
          <img src={recycleIcon} alt="" />
          <p>Partnership Form</p>
        </NavLink>
        <NavLink to="/admin/subscribe">
          <img src={rssIcon} alt="" />
          <p>Subscribers</p>
        </NavLink>
      </div>
    </div >
  )
}

export default NavBar;
