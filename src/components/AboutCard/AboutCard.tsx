import profilpic from "../../assets/profilpic.jpg";
import styles from "./AboutCard.module.css";
const AboutCard = () => {
  return (
    <div className={styles.aboutcardcontainer}>
      <img
        src={profilpic}
        className={styles.profilpic}
        alt="Adrian Dufac"
      ></img>
      <span>
        <h2>About</h2>
        <p>My name is Adrian, I'm a fullstack developper </p>
      </span>
    </div>
  );
};

export default AboutCard;
