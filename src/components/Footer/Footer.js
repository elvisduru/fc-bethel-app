import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../images/logo.png'

import styles from './Footer.module.css'
import rightChevron from '../../images/right-thin-chevron.svg'
import Axios from 'axios'

export const Footer = () => {

  const [sent, setSent] = useState(false)
  const [email, setEmail] = useState()

  const handleSubscribe = () => {
    if (!email) {
      return
    }
    Axios.post('/api/subscribe', { email })
      .then(response => {
        setSent(response.data.sent)
      })
      .catch(err => console.log(err))
  }

  return (
    <div className={styles.Footer}>
      <nav>
        <Link to="/" ><img src={Logo} alt="" /><p>FC Bethel <br /> International</p></Link>
        <ul className={styles.nav}>
          <li><Link to="/">home</Link></li>
          <li><Link to="/privacy">privacy</Link></li>
          <li><Link to="/cookies">cookies</Link></li>
          <li><Link to="/legal">legal</Link></li>
          <li><Link to="/contact">contact</Link></li>
        </ul>
      </nav>
      <div>
        <div className={styles.subscribe}>
          <div className={styles.left}>
            <h4>Subscribe Now!</h4>
            <p>Submit your email to get our latest feeds</p>
          </div>
          <div className={styles.right}>
            {sent && <p style={{ color: '#2196f3' }}>You have subscribed successfully!</p>}
            <input type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter Email" />
            <img onClick={handleSubscribe} src={rightChevron} alt="" />
          </div>
        </div>
        <p>copyright © {new Date().getFullYear()}</p>
      </div>
    </div>
  )
}
