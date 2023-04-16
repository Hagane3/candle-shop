import image404 from "../../assets/img/404.webp";
import Button from "../../components/UI/Button/Button";
import { useNavigate } from "react-router-dom";

import classes from "./index.module.scss";
import Navbar from "../../layouts/Navbar/Navbar";
import Footer from "../../layouts/Footer/Footer";

const index = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <section className={classes.root}>
        <img src={image404} alt="404 image" />
        <h2>Oops! The page you requested was not found!</h2>
        <Button width={50} redirect={() => navigate("/")}>
          Back to Home
        </Button>
      </section>
      <Footer />
    </>
  );
};

export default index;
