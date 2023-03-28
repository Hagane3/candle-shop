import React, { useState } from "react";
import classes from "./Navbar.module.scss";

import Logo from "../../components/UI/Logo/Logo";
import hamburger from "../../assets/icon/hamburger.svg";
import cart from "../../assets/icon/cart.svg";
import profile from "../../assets/icon/profile.svg";
import close from "../../assets/icon/close.svg";

const Navbar = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const toggleMenuHandler = () => {
    setIsMenuOpened((prevState) => !prevState);
  };

  return (
    <nav className={classes.root}>
      <div className={classes.wrapper}>
        <button className={classes.menu} onClick={toggleMenuHandler}>
          <img src={isMenuOpened ? close : hamburger} alt="menu button" />
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
      </div>
      <div
        className={`${classes.menu_list} ${isMenuOpened ? classes.active : ""}`}
      >
        <ul>
          <li>Discovery</li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
