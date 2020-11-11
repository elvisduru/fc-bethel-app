import React, { Component } from 'react';
import styles from './Contact.module.css';
import Menu from '../../containers/Menu/Menu';

import axios from 'axios'

import { Footer } from '../../components/Footer/Footer';

import { Slide } from 'react-reveal';

export default class Contact extends Component {
  state = {
    fields: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
    messageSent: false,
    error: false
  }

  handleInput = e => {
    const fields = { ...this.state.fields };
    fields[e.target.name] = e.target.value;
    this.setState({ fields })
  }

  handleSubmit = () => {
    const contact = { ...this.state.fields };
    if (!contact.name && !contact.phone && !contact.email) {
      this.setState({ error: true })
      return;
    }
    axios.post('/api/contact', contact)
      .then(response => {
        if (response.data.err) {
          this.setState({ error: true })
        }
        this.setState({ messageSent: response.data.sent })
      })
      .catch(err => console.log(err));
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className={styles.Contact}>
        <Menu />
        <section className={styles.formWrapper}>
          <div className={styles.imgWrapperLeft}>
            <Slide left>
              <div className={styles.address}>
                <p className={styles.addressItem}>
                  FC BETHEL INTERNATIONAL <br /><br /> HEADQUATERS <br /> 3rd Floor Brassar's Place <br /> 16 Victoria Arobieke Street, <br /> Off Admiralty Way, <br /> Lekki Phase 1, Lagos. <br /> Nigeria.
              </p>
                <p className={styles.addressItem}>Phone / Email <br /> +234 810 776 3821 <br /> 01 4537 121 <br /> info@fcbethelinternational.com</p>
              </div>
            </Slide>
          </div>
          <div className={styles.form}>
            <Slide right cascade>
              <div>
                <h1>Contact Us</h1>
                <p>WHAT WOULD YOU LIKE TO TELL US ?</p>
                {this.state.error && <p className={styles.error}>Please fill the required fields!</p>}
                <label htmlFor="name">
                  <p>
                    NAME
                </p>
                  <input style={this.state.error ? { borderColor: 'orangered', borderWidth: '1px', borderStyle: 'solid' } : null} onChange={this.handleInput} type="text" name="name" id="name" />
                </label>
                <label htmlFor="email">
                  <p>
                    EMAIL
                </p>
                  <input style={this.state.error ? { borderColor: 'orangered', borderWidth: '1px', borderStyle: 'solid' } : null} onChange={this.handleInput} type="email" name="email" id="email" />
                </label>
                <label htmlFor="phone">
                  <p>
                    PHONE
                </p>
                  <input style={this.state.error ? { borderColor: 'orangered', borderWidth: '1px', borderStyle: 'solid' } : null} onChange={this.handleInput} type="text" name="phone" id="phone" />
                </label>
                <label htmlFor="subject">
                  <p>
                    SUBJECT
                </p>
                  <input onChange={this.handleInput} type="text" name="subject" id="subject" />
                </label>
                <label htmlFor="message">
                  <p>
                    MESSAGE
                </p>
                  <textarea onChange={this.handleInput} name="message" id="message" />
                </label>
                <button onClick={this.handleSubmit}>{this.state.messageSent ? 'MESSAGE SENT SUCCESSFULLY' : 'SEND MESSAGE'}</button>
              </div>
            </Slide>
          </div>
        </section>
        <Footer />
      </div>
    )
  }
}
