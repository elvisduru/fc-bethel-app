import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import styles from "./Admin.module.css";
import axios from "axios";

import NavBar from "./NavBar/NavBar";
import TopBar from "./TopBar/TopBar";
import Footer from "./Footer/Footer";
import Contact from "./Forms/Contact/Contact";
import Subscribe from "./Forms/Subscribe/Subscribe";
import Partnership from "./Forms/Partnership/Partnership";

import Logo from "../../images/logo.png";
import { NewPost } from "./Blog/NewPost";
import { Blog } from "./Blog/Blog";
import { ViewPost } from "./Blog/ViewPost";
import { Gallery } from "./Gallery/Gallery";
import { Home } from "./Home/Home";

const Admin = () => {
  const [loggedIn, setLogin] = useState(false);
  const [error, setError] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const auth = async () => {
    try {
      const res = await axios.get("/authenticate", {
        auth: { username, password }
      });
      if (res.data.message === "success") {
        setLogin(true);
        setPassword(null)
      }
    } catch (e) {
      setError("Invalid Username or Password");
      console.log(e);
    }
  };

  const readCookie = async () => {
    try {
      const res = await axios.get("/read-cookie");
      if (res.data.authenticated) {
        setLogin(true);
      } else {
        setLogin(false);
      }
    } catch (e) {
      setLogin(false);
      console.log(e);
    }
  };

  useEffect(() => {
    readCookie();
  }, []);

  const deleteCookie = async () => {
    try {
      await axios.get("/clear-cookie");
      setLogin(false);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className={styles.Admin}>
      {loggedIn ? (
        <div className={styles.Dashboard}>
          <NavBar />
          <TopBar logout={deleteCookie} />
          <main>
            <Switch>
              <Route exact path="/admin" component={Home} />
              <Route exact path="/admin/blog" component={Blog} />
              <Route exact path="/admin/blog/new" component={NewPost} />
              <Route exact path="/admin/blog/:id" component={ViewPost} />
              <Route exact path="/admin/blog/edit/:id" component={NewPost} />
              <Route exact path="/admin/gallery" component={Gallery} />
              <Route exact path="/admin/contact" component={Contact} />
              <Route exact path="/admin/partnership" component={Partnership} />
              <Route exact path="/admin/subscribe" component={Subscribe} />
              <Redirect to="/admin" />
            </Switch>
          </main>
          <Footer />
        </div>
      ) : (
          <div className={styles.Login}>
            <div className={styles.header}>
              <img src={Logo} alt="" />
            </div>
            <div className={styles.body}>
              <div className={styles.form}>
                {error ? <p className={styles.error}>{error}</p> : null}
                <input
                  type="text"
                  name="username"
                  onChange={e => setUsername(e.target.value)}
                  placeholder="Username"
                />
                <input
                  type="password"
                  onChange={e => setPassword(e.target.value)}
                  placeholder="Password"
                />
                <button onClick={auth}>Login</button>
              </div>
            </div>
          </div>
        )}
    </div>
  );
};

export default Admin;
