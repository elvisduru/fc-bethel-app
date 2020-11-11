import React, { Component } from "react";
import styles from "./Menu.module.css";

import { Slide } from "react-reveal";

import { NavLink, Link, withRouter } from "react-router-dom";

import logo from "../../images/logo.png";

import facebook from "../../images/Facebook-white.svg";
import twitter from "../../images/Twitter-white.svg";
import instagram from "../../images/instagram-white.svg";
import linkedin from "../../images/linkedin-white.svg";
import youtube from "../../images/youtube-white.svg";

class Menu extends Component {
  state = {
    openMenu: false,
    background: false,
  };

  handleOpenMenu = () => {
    this.setState((prevState) => ({ openMenu: !prevState.openMenu }));
  };

  handleScroll = (e) => {
    if (window.pageYOffset > 0) {
      this.setState({ background: true });
    } else {
      this.setState({ background: false });
    }
  };

  componentDidMount() {
    if (this.props.location.pathname === "/") {
      window.addEventListener("scroll", this.handleScroll);
    } else {
      this.setState({ background: true });
    }
  }

  componentWillUnmount() {
    if (this.props.location.pathname === "/") {
      window.removeEventListener("scroll", this.handleScroll);
    }
  }

  render() {
    const mobileMenu = this.state.openMenu ? (
      <Slide right>
        <div className={styles.MobileMenu}>
          <div onClick={this.handleOpenMenu} className={styles.backdrop}></div>
          <div className={styles.content}>
            <p onClick={this.handleOpenMenu}>&times;</p>
            <ul onClick={this.handleOpenMenu}>
              <li>
                <a href="/">home</a>
              </li>
              <li>
                <a href="/#about">about us</a>
              </li>
              <li>
                <a href="/#partners">partners</a>
              </li>
              <li>
                <a href="/#news">news</a>
              </li>
              <li>
                <a href="/#players">our players</a>
              </li>
              <li>
                <Link to="/gallery">gallery</Link>
              </li>
              <li>
                <Link to="/contact">contact</Link>
              </li>
            </ul>
            <div className={styles.social}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/FC-Bethel-International-1625123401061554"
              >
                <img src={facebook} alt="" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.twitter.com/fc_bethel"
              >
                <img src={twitter} alt="" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/fc___bethel_international"
              >
                <img src={instagram} alt="" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/FC-Bethel-International-1625123401061554"
              >
                <img src={linkedin} alt="" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/FC-Bethel-International-1625123401061554"
              >
                <img src={youtube} alt="" />
              </a>
            </div>
          </div>
        </div>
      </Slide>
    ) : null;

    return (
      <nav
        className={`${styles.Menu} ${
          this.state.background && styles.background
        }`}
      >
        <Link to="/">
          <img src={logo} alt="" />
          <p>
            FC BETHEL <br /> INTERNATIONAL
          </p>
        </Link>
        {window.innerWidth > 768 ? (
          <>
            <ul className={styles.nav}>
              <li>
                <a href="/">home</a>
              </li>
              <li>
                <a href="/#about">about us</a>
              </li>
              <li>
                <a href="/#partners">partners</a>
              </li>
              <li>
                <a href="/#news">news</a>
              </li>
              <li>
                <a href="/#players">our players</a>
              </li>
              <li>
                <NavLink to="/gallery">gallery</NavLink>
              </li>
              <li>
                <NavLink to="/contact">contact</NavLink>
              </li>
            </ul>
            <div className={styles.social}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/FC-Bethel-International-1625123401061554"
              >
                <img src={facebook} alt="" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.twitter.com/fc_bethel"
              >
                <img src={twitter} alt="" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/fc___bethel_international"
              >
                <img src={instagram} alt="" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/FC-Bethel-International-1625123401061554"
              >
                <img src={linkedin} alt="" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/FC-Bethel-International-1625123401061554"
              >
                <img src={youtube} alt="" />
              </a>
            </div>
          </>
        ) : (
          <button
            onClick={this.handleOpenMenu}
            ref="hamburger"
            className={styles.hamburger}
          >
            <span
              style={{
                backgroundColor: `${
                  this.props.location.pathname === "/" ||
                  this.props.location.pathname === "/news"
                    ? "#fff"
                    : "#000"
                }`,
              }}
            ></span>
            <span
              style={{
                backgroundColor: `${
                  this.props.location.pathname === "/" ||
                  this.props.location.pathname === "/news"
                    ? "#fff"
                    : "#000"
                }`,
              }}
            ></span>
            <span
              style={{
                backgroundColor: `${
                  this.props.location.pathname === "/" ||
                  this.props.location.pathname === "/news"
                    ? "#fff"
                    : "#000"
                }`,
              }}
            ></span>
          </button>
        )}
        {mobileMenu}
      </nav>
    );
  }
}

export default withRouter(Menu);
