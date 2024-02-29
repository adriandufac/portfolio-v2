import { setUpAnimation } from "../Services/Animation";
import styles from "./ExperienceCard.module.css";
const ExperienceCard = () => {
  setUpAnimation("Experience");
  return (
    <>
      <h2 className="Experience">Experience</h2>
      <p className="Experience">
        I graduated a web developer bachelor and then master from ENI school.
        <br></br>
        <br></br>I worked as a backend developer at Beetween Company during my
        alterned training for my master.<br></br>
        <br></br>I also worked on plenty of personal projects that you can check
        here or even more on my{" "}
        <a className={styles.linkExp} href="https://github.com/adriandufac">
          Github.
        </a>
      </p>
    </>
  );
};

export default ExperienceCard;
