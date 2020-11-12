import React from "react";
import styles from "./About.module.css";

import { Fade, Zoom } from "react-reveal";

import ballImg from "../../images/ball.jpg";

import arrowRight from "../../images/arrow-right.svg";

export const About = () => {
  return (
    <div id="about" className={styles.About}>
      <main>
        <div className={styles.left}>
          <Fade bottom duration={800}>
            <p>
              At FC Bethel International we have a culture of hard work which
              has earned us our reputation, both locally and internationally as
              one of Nigeria’s foremost developing football academies.
            </p>
            <p>
              The Academy has and will continue to discover, nurture, designate
              young talents while playing a pivotal role in their growth while
              at some stage in their development, by mutual consent, youngsters
              would be designated to professional clubs under FIFA jurisdictions
              to join meaningful projects across the globe.
              <br />
              <br />
              On the pitch, we have a long history of developing successful
              talents within Nigeria, Africa and Europe at large.
            </p>
            <a
              className={styles.link}
              href="/news/Our-Success-Story2020-11-12-18:29:20"
            >
              read more
              <img src={arrowRight} alt="" />
            </a>
          </Fade>
        </div>
        <div className={styles.right}>
          <Zoom delay={400} duration={500}>
            <img src={ballImg} alt="" />
          </Zoom>
          <Zoom delay={800} duration={300}>
            <p>
              Football
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="59.426"
                height="59.426"
                viewBox="0 0 59.426 59.426"
              >
                <path
                  id="Icon_material-add-circle"
                  data-name="Icon material-add-circle"
                  d="M30.963,1.25A29.713,29.713,0,1,0,60.676,30.963,29.724,29.724,0,0,0,30.963,1.25ZM45.82,33.934H33.934V45.82H27.992V33.934H16.107V27.992H27.992V16.107h5.943V27.992H45.82Z"
                  transform="translate(-1.25 -1.25)"
                  fill="#c27fc8"
                />
              </svg>
            </p>
          </Zoom>
          <Zoom delay={1000} duration={300}>
            <p>
              Education
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="59.426"
                height="59.426"
                viewBox="0 0 59.426 59.426"
              >
                <path
                  id="Icon_material-add-circle"
                  data-name="Icon material-add-circle"
                  d="M30.963,1.25A29.713,29.713,0,1,0,60.676,30.963,29.724,29.724,0,0,0,30.963,1.25ZM45.82,33.934H33.934V45.82H27.992V33.934H16.107V27.992H27.992V16.107h5.943V27.992H45.82Z"
                  transform="translate(-1.25 -1.25)"
                  fill="#7FD0FF"
                />
              </svg>
            </p>
          </Zoom>
          <Zoom delay={1200} duration={300}>
            <p>
              Academy Life
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="59.426"
                height="59.426"
                viewBox="0 0 59.426 59.426"
              >
                <path
                  id="Icon_material-add-circle"
                  data-name="Icon material-add-circle"
                  d="M30.963,1.25A29.713,29.713,0,1,0,60.676,30.963,29.724,29.724,0,0,0,30.963,1.25ZM45.82,33.934H33.934V45.82H27.992V33.934H16.107V27.992H27.992V16.107h5.943V27.992H45.82Z"
                  transform="translate(-1.25 -1.25)"
                  fill="#7FC695"
                />
              </svg>
            </p>
          </Zoom>
        </div>
      </main>
    </div>
  );
};
