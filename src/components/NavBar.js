import React from "react";
import { Link } from "react-router-dom";
import classes from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={classes["nav-bar"]}>
      <Link className={classes.link} to="/">
        Home
      </Link>
      <Link className={classes.link} to="/likes">
        Liked
      </Link>
    </div>
  );
};

export default NavBar;
