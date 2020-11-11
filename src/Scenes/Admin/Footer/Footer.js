import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <p>&copy; FC Bethel Academy {new Date().getFullYear()}</p>
    </div>
  )
}

export default Footer
