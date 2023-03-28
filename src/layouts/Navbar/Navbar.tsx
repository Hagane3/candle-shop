import React from "react";
import classes from "./Navbar.module.scss";

import Logo from "../../components/UI/Logo/Logo";
import hamburger from "../../assets/icon/hamburger.svg";
import cart from "../../assets/icon/cart.svg";
import profile from "../../assets/icon/profile.svg";

const Navbar = () => {
  return (
    <nav className={classes.root}>
      <button className={classes.menu}>
        <img src={hamburger} alt="hamburger button" />
      </button>
      <div className={classes.logo}>
        <Logo />
      </div>
      <div className={classes.user_container}>
        <button>
          <img src={profile} alt="profile button" />
        </button>
        <button>
          <img src={cart} alt="cart button" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
