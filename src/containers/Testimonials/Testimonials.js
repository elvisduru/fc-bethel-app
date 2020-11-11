import React, { Component } from "react";
import styles from "./Testimonials.module.css";
import { Testimonial } from "./Testimonial/Testimonial";

import arrowLeft from "../../images/arrow-left.svg";

export default class Testimonials extends Component {
  state = {
    currentIndex: 0,
    translateValue: 0,
    testimonials: [
      {
        text:
          "Life at the Academy placed me outside my comfort zone. I learned more about myself all the time and how I respond to certain situation. I couldn’t imagine doing anything better than training and playing football every day. It has been awesome.",
        name: "Emmanuel Bature",
      },
      {
        text:
          "Life at the Academy placed me outside my comfort zone. I learned more about myself all the time and how I respond to certain situation. I couldn’t imagine doing anything better than training and playing football every day. It has been awesome.",
        name: "Emmanuel Bature",
      },
      {
        text:
          "Life at the Academy placed me outside my comfort zone. I learned more about myself all the time and how I respond to certain situation. I couldn’t imagine doing anything better than training and playing football every day. It has been awesome.",
        name: "Emmanuel Bature",
      },
    ],
  };

  handlePrevSlide = () => {
    //Sroll to End if at the beginning of Slider
    if (this.state.currentIndex === 0) {
      return this.setState({
        currentIndex: this.state.testimonials.length - 1,
        translateValue: (this.state.testimonials.length - 1) * -100,
      });
    }

    this.setState((prevState) => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + 100,
    }));
  };

  handleNextSlide = () => {
    // Reset if at end of slider
    if (this.state.currentIndex === this.state.testimonials.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0,
      });
    }

    this.setState((prevState) => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue - 100,
    }));
  };

  render() {
    return (
      <div className={styles.Testimonials}>
        <div className={styles.SliderWrapper}>
          <div
            style={{
              transform: `translateX(${this.state.translateValue}%)`,
              transition: "transform ease-out 0.45s",
            }}
          >
            {this.state.testimonials.map(({ text, name }, index) => (
              <Testimonial key={index} text={text} name={name} />
            ))}
          </div>
        </div>
        <div className={styles.Bottom}>
          <button onClick={this.handlePrevSlide}>
            <img src={arrowLeft} alt="" />
          </button>
          <button onClick={this.handleNextSlide}>
            <img
              style={{ transform: "rotate(180deg)" }}
              src={arrowLeft}
              alt=""
            />
          </button>
        </div>
      </div>
    );
  }
}
