import React, { Component } from "react";
import styles from "./Partners.module.css";
import Testimonials from "../../containers/Testimonials/Testimonials";

import axios from "axios";
import { Slide, Bounce } from "react-reveal";
import LogoCarousel from "../../components/LogoCarousel/LogoCarousel";

export class Partners extends Component {
  state = {
    openForm: false,
    fields: {
      name: "",
      address: "",
      email: "",
      phone: "",
      type: "",
      message: "",
    },
    messageSent: false,
    error: false,
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleInput = (e) => {
    const fields = { ...this.state.fields };
    fields[e.target.name] = e.target.value;
    this.setState({ fields });
  };

  handleSubmit = () => {
    const fields = { ...this.state.fields };
    axios
      .post("/api/partnership", fields)
      .then((response) => {
        if (response.data.err) {
          this.setState({ error: true });
        }
        this.setState({ messageSent: response.data.sent });
      })
      .catch((err) => console.log(err));
  };

  handleForm = () => {
    this.setState((prevState) => ({ openForm: !prevState.openForm }));
  };

  render() {
    const joinUsForm = this.state.openForm ? (
      <div className={styles.FormOverlay}>
        <div className={styles.joinUsBackdrop} onClick={this.handleForm}></div>
        <Slide bottom>
          <div className={styles.joinUsContent}>
            <div className={styles.header}>
              <h4>Join Us Now</h4>
              <p onClick={this.handleForm}>&times;</p>
            </div>
            {this.state.messageSent ? (
              <Bounce top>
                <div className={styles.success}>
                  <h2>Message Sent Successfully!</h2>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      fill="cadetblue"
                      d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"
                    />
                  </svg>
                </div>
              </Bounce>
            ) : (
              <div className={styles.form}>
                <p>Please fill the form below: </p>
                {this.state.error && (
                  <p className={styles.error}>
                    Please fill the required fields!
                  </p>
                )}
                <input
                  style={this.state.error ? { borderColor: "orangered" } : null}
                  name="name"
                  onChange={this.handleInput}
                  type="text"
                  placeholder="Name"
                />
                <input
                  name="address"
                  onChange={this.handleInput}
                  type="text"
                  placeholder="Address"
                />
                <input
                  style={this.state.error ? { borderColor: "orangered" } : null}
                  name="email"
                  onChange={this.handleInput}
                  type="text"
                  placeholder="Contact Email"
                />
                <input
                  style={this.state.error ? { borderColor: "orangered" } : null}
                  name="phone"
                  onChange={this.handleInput}
                  type="text"
                  placeholder="Phone Number"
                />
                <select name="type" onChange={this.handleInput}>
                  <option value="">Type of Sponsorship</option>
                  <option value="donations">Donations</option>
                  <option value="events">Event Sponsorship</option>
                  <option value="competition">Competition Sponsorship</option>
                  <option value="brand">Brand Sponsorship</option>
                </select>
                <textarea
                  name="message"
                  onChange={this.handleInput}
                  placeholder="Message"
                />
                <button onClick={this.handleSubmit}>Submit</button>
              </div>
            )}
          </div>
        </Slide>
      </div>
    ) : null;

    return (
      <div className={styles.Partners} id="partners">
        <main>
          <h2>Testimonials</h2>
          <Testimonials />
          <hr />
          <h2 style={{ marginBottom: "20px" }}>Our Partners</h2>
          <LogoCarousel />
          <div className={styles.callout}>
            <h4>Become a Sponsor Today!</h4>
            <p>
              We are always looking forward to having backers and sponsors to
              join us. You can be one of us.
            </p>
            <button onClick={this.handleForm}>Join Us</button>
          </div>
          {joinUsForm}
        </main>
      </div>
    );
  }
}
