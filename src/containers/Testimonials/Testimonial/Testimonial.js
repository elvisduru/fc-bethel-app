import React from "react";
import styles from "./Testimonial.module.css";

export const Testimonial = ({ text, name }) => {
  return (
    <div className={styles.Testimonial}>
      <p>
        <span>"</span>
        {text}
      </p>
      <span>- {name}</span>
    </div>
  );
};
