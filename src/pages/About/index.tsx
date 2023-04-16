import classes from "./index.module.scss";
import aboutImage from "../../assets/img/about_image.webp";
import Button from "../../components/UI/Button/Button";

import freeDeliveryIcon from "../../assets/icon/free_delivery.svg";
import cashbackIcon from "../../assets/icon/cashback.svg";
import supportIcon from "../../assets/icon/support.svg";
import qualityIcon from "../../assets/icon/quality_prod.svg";

const About = () => {
  return (
    <div className={classes.root}>
      <div className={classes.photo_section}>
        <div className={classes.img_container}>
          <img src={aboutImage} alt="about" />
        </div>
        <div className={classes.text}>
          <h2>Know about our candles</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit
            necessitatibus, doloremque velit facere quibusdam atque nihil,
            fugiat, non nemo fuga qui provident? Soluta totam corporis omnis
            porro saepe maxime quidem. Itaque minus reprehenderit eveniet
            voluptas laudantium perferendis veritatis maxime fugit veniam!
            Voluptatem libero.
          </p>
          <Button width={50}>Contact us</Button>
        </div>
      </div>
      <div className={classes.features_section}>
        <h2>Our Features</h2>
        <div className={classes.features}>
          <div className={classes.feature}>
            <img src={freeDeliveryIcon} alt="free delivery icon" />
            <h4>Free Delivery</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              purus gravida
            </p>
          </div>
          <div className={classes.feature}>
            <img src={cashbackIcon} alt="free delivery icon" />
            <h4>100% Cash Back</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              purus gravida
            </p>
          </div>
          <div className={classes.feature}>
            <img src={qualityIcon} alt="free delivery icon" />
            <h4>Quality Product</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              purus gravida
            </p>
          </div>
          <div className={classes.feature}>
            <img src={supportIcon} alt="free delivery icon" />
            <h4>24/7 Support</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              purus gravida
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
