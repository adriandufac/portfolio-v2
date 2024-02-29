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
            Hi I'm Adrian, I'm a fullstack web developer looking for new
            opportunties. Let's work together !
          </p>
        </span>
      </div>
    </>
  );
};

export default AboutCard;
