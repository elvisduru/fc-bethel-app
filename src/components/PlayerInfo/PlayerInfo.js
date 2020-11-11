import React from "react";
import styles from "./PlayerInfo.module.css";
import { Divider } from "../Divider/Divider";

import flagGH from "../../images/flag-for-ghana.png";
import flagNG from "../../images/flag-for-nigeria.png";
import leagueImg from "../../images/league.png";

export const PlayerInfo = ({
  number,
  name,
  position,
  nationality,
  image,
  height,
  weight,
  dob,
  club,
  assists,
  goals,
  matches,
  qualities,
  bio
}) => {
  if (bio) {
    return (
      <div className={styles.staffInfo}>
        <div>
          <img src={image} alt="" />
          {bio}
        </div>
      </div>
    )
  } else {
    return (
      <div className={styles.PlayerInfo}>
        <div className={styles.top}>
          <div className={styles.left}>
            <figure>{number < 10 ? "0" + number : number}</figure>
            <h4>{name}</h4>
            <Divider />
            <p>{position}</p>
            <img src={nationality === "Ghanaian" ? flagGH : flagNG} alt="" />
          </div>
          <div className={styles.center}>
            <img src={image} alt="" />
          </div>
          <div className={styles.right}>
            <h6>Name</h6>
            <p>{name}</p>
            <Divider />
            <h6>Height</h6>
            <p>{height} ft</p>
            <Divider />
            <h6>Weight</h6>
            <p>{weight} kg</p>
            <Divider />
            <h6>Date of birth</h6>
            <p>{dob}</p>
            <Divider />
            <h6>Club</h6>
            <p>{club}</p>
          </div>
          {window.innerWidth < 768 ? <div className={styles.bottom}>
            <div>
              <h6>Total Games</h6>
              <p>{matches}</p>
            </div>
            <div>
              <h6>{position === "Goalkeeper" ? "Clean Sheets" : "Total Goals"}</h6>
              <p>{goals}</p>
            </div>
            <div>
              <h6>Total Assists</h6>
              <p>{assists}</p>
            </div>
            <div>
              <h6>Qualities</h6>
              <ul>
                {qualities.map((quality, index) => (
                  <li key={index}>{quality}</li>
                ))}
              </ul>
            </div>
            <div>
              <h6>Current League</h6>
              <img src={leagueImg} alt="" />
            </div>
          </div> : null}
        </div>
        {window.innerWidth > 768 ? <div className={styles.bottom}>
          <div>
            <h6>Total Games</h6>
            <p>{matches}</p>
          </div>
          <div>
            <h6>{position === "Goalkeeper" ? "Clean Sheets" : "Total Goals"}</h6>
            <p>{goals}</p>
          </div>
          <div>
            <h6>Total Assists</h6>
            <p>{assists}</p>
          </div>
          <div>
            <h6>Qualities</h6>
            <ul>
              {qualities.map((quality, index) => (
                <li key={index}>{quality}</li>
              ))}
            </ul>
          </div>
          <div>
            <h6>Current League</h6>
            <img src={leagueImg} alt="" />
          </div>
        </div> : null}
      </div>
    );
  }

};
