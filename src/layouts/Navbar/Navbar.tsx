import { useState } from "react";
import classes from "./Navbar.module.scss";

import CartIcon from "../../components/UI/CartIcon/CartIcon";

import Logo from "../../components/UI/Logo/Logo";
import hamburger from "../../assets/icon/hamburger.svg";
import profile from "../../assets/icon/profile.svg";
import close from "../../assets/icon/close.svg";

import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const toggleMenuHandler = () => {
    setIsMenuOpened((prevState) => !prevState);
  };

  return (
    <nav className={classes.root}>
      <div className={classes.wrapper}>
        <button className={classes.menu_btn} onClick={toggleMenuHandler}>
          <img src={isMenuOpened ? close : hamburger} alt="menu button" />
        </button>
        <div className={classes.logo}>
          <Logo />
        </div>
        <div className={classes.menu_desktop}>
          <ul className={classes.menu}>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
          </ul>
        </div>
        <div className={classes.cart_container}>
          <CartIcon />
        </div>
      </div>
      <div
        className={`${classes.menu_list} ${isMenuOpened ? classes.active : ""}`}
      >
        <ul className={classes.menu}>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
