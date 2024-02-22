import profilpic from "../../assets/profilpic.jpg";
import styles from "./AboutCard.module.css";
const AboutCard = () => {
  return (
    <>
      <h2>About</h2>
      <div className={styles.aboutcardcontainer}>
        <div className={styles.imgContainer}>
          <img
            src={profilpic}
            className={styles.profilpic}
            alt="Adrian Dufac"
          ></img>
        </div>
        <span>
          <p>
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
