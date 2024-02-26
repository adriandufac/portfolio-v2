import profilpic from "../../assets/profilpic.jpg";
import { setUpAnimation } from "../Services/Animation";

import styles from "./AboutCard.module.css";

const AboutCard = () => {
  setUpAnimation("About");
  return (
    <>
      <h2 className="About">About</h2>
      <div className={styles.aboutcardcontainer}>
        <div className={styles.imgContainer}>
          <img
            src={profilpic}
            className={styles.profilpic}
            alt="Adrian Dufac"
          ></img>
        </div>
        <span>
          <p className="About">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum
            aperiam dolor ex, qui ipsam ea dolore doloremque nobis ad modi porro
            asperiores consequatur mollitia! Voluptates, itaque quis? Ad cum
            veritatis dolore, quasi alias, officia eos modi repellendus nostrum
            minima in.
          </p>
        </span>
      </div>
    </>
  );
};

export default AboutCard;
