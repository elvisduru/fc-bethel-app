import React from 'react';
import styles from './Home.module.css';
import { withRouter } from 'react-router-dom';

import { Fade } from "react-reveal";

import playerImg from '../../images/player3.png';

const Home = () => {
  return (
    <div className={styles.Home}>
      <div className={styles.left}>
        <Fade delay={400}>
          <h1>Welcome to <br /> FC Bethel International.</h1>
          <p>Football made easy with our exceptional teaching methods and development program.</p>
          <a href="#about">LEARN MORE</a>
        </Fade>

      </div>
      <div className={styles.right}>
        <Fade left>
          <img src={playerImg} alt="" />
        </Fade>
      </div>
    </div>
  )
}

export default withRouter(Home)