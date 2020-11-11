import React from "react";
import styles from "./About.module.css";

import { Fade, Zoom } from 'react-reveal';

import ballImg from '../../images/ball.jpg';

import arrowRight from '../../images/arrow-right.svg';

export const About = () => {
  return (
    <div id="about" className={styles.About}>
      <main>
        <div className={styles.left}>
          <Fade bottom duration={800}>
            <p>
              FC Bethel International have worked hard to earn a reputation, both nationally and internationally, as one of
              Nigeria’s best known and developing football academy.
            </p>
            <p>
              The club has and will continue to discover, nurture and designate young talented players to professional clubs
              under FIFA jurisdictions. On the field, the club has a long history of success both within Nigeria, Africa and
              Europe at large. With players such as Abayomi Emmanuel Adebayo, Godwin Emmanuel just to mention a few
              now plying their football trade in the Nigerian Premier League top flight.
              <br /><br />
              Also, we have some players from FC Bethel International Football Academy who have broken into first team
selection in Europe such as Dinopeter Jude Airaodion who just finished his season with Turk Ocagi Limasol in
Cyprus.
            </p>
            <a className={styles.link} href="/news/About-FC-Bethel-International2020-03-17-16:54:57">read more<img src={arrowRight} alt="" /></a>
          </Fade>
        </div>
        <div className={styles.right}>
          <Zoom delay={400} duration={500}>
            <img src={ballImg} alt="" />
          </Zoom>
          <Zoom delay={800} duration={300}>
            <p>
              Football
            <svg xmlns="http://www.w3.org/2000/svg" width="59.426" height="59.426" viewBox="0 0 59.426 59.426">
                <path id="Icon_material-add-circle" data-name="Icon material-add-circle" d="M30.963,1.25A29.713,29.713,0,1,0,60.676,30.963,29.724,29.724,0,0,0,30.963,1.25ZM45.82,33.934H33.934V45.82H27.992V33.934H16.107V27.992H27.992V16.107h5.943V27.992H45.82Z" transform="translate(-1.25 -1.25)" fill="#c27fc8" />
              </svg>
            </p>
          </Zoom>
          <Zoom delay={1000} duration={300}>
            <p>
              Education
            <svg xmlns="http://www.w3.org/2000/svg" width="59.426" height="59.426" viewBox="0 0 59.426 59.426">
                <path id="Icon_material-add-circle" data-name="Icon material-add-circle" d="M30.963,1.25A29.713,29.713,0,1,0,60.676,30.963,29.724,29.724,0,0,0,30.963,1.25ZM45.82,33.934H33.934V45.82H27.992V33.934H16.107V27.992H27.992V16.107h5.943V27.992H45.82Z" transform="translate(-1.25 -1.25)" fill="#7FD0FF" />
              </svg>
            </p>
          </Zoom>
          <Zoom delay={1200} duration={300}>
            <p>
              Academy Life
            <svg xmlns="http://www.w3.org/2000/svg" width="59.426" height="59.426" viewBox="0 0 59.426 59.426">
                <path id="Icon_material-add-circle" data-name="Icon material-add-circle" d="M30.963,1.25A29.713,29.713,0,1,0,60.676,30.963,29.724,29.724,0,0,0,30.963,1.25ZM45.82,33.934H33.934V45.82H27.992V33.934H16.107V27.992H27.992V16.107h5.943V27.992H45.82Z" transform="translate(-1.25 -1.25)" fill="#7FC695" />
              </svg>
            </p>
          </Zoom>
        </div>
      </main>
    </div>
  );
};
