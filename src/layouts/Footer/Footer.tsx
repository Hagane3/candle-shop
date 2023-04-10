import React from "react";
import Logo from "../../components/UI/Logo/Logo";
import classes from "./Footer.module.scss";

import facebook from "../../assets/icon/facebook.svg";
import instagram from "../../assets/icon/instagram.svg";
import youtube from "../../assets/icon/youtube.svg";

const Footer = () => {
  return (
    <footer className={classes.root}>
      <div className={classes.wrapper}>
        <div className={classes.bar}></div>
        <div className={classes.container}>
          <div className={classes.logo_container}>
            <Logo type="white" />
            <p>Your natural candle made for your home and for your wellness</p>
          </div>
          <div className={classes.footer_nav}>
            <div className={classes.footer_nav_item}>
              <h4>Discovery</h4>
              <ul>
                <li>
                  <a href="#">New season</a>{" "}
                </li>
                <li>
                  <a href="#">Most searched</a>{" "}
                </li>
                <li>
                  <a href="#">Most selled</a>{" "}
                </li>
              </ul>
            </div>
            <div className={classes.footer_nav_item}>
              <h4>Info</h4>
              <ul>
                <li>
                  <a href="#">Contact Us</a>{" "}
                </li>
                <li>
                  <a href="#">Privacy Policies</a>{" "}
                </li>
                <li>
                  <a href="#">Terms & Conditions</a>{" "}
                </li>
              </ul>
            </div>
            <div className={classes.footer_nav_item}>
              <h4>About</h4>
              <ul>
                <li>
                  <a href="#">Help</a>{" "}
                </li>
                <li>
                  <a href="#">Shipping</a>{" "}
                </li>
                <li>
                  <a href="#">Affiliate</a>{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.social_media}>
        <a href="#">
          <img src={facebook} alt="facebook" />
        </a>
        <a href="#">
          <img src={instagram} alt="instagram" />
        </a>
        <a href="#">
          <img src={youtube} alt="youtube" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
