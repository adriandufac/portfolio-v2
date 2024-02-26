import styles from "./MainNavBar.module.css";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";
import cvImage from "../../assets/CV.png";
import cv from "../../assets/CV_Adrian_Dufac.pdf";
import logo from "../../assets/logo.webp";

interface MainNavBarProps {
  handleClick: () => void;
}
const MainNavBar = ({ handleClick }: MainNavBarProps) => {
  return (
    <nav className={styles.container}>
      <ul className={styles.ulMain}>
        <div>
          <li>
            <a onClick={handleClick} href="">
              <img src={logo} alt="logo"></img>
            </a>
          </li>
        </div>
        <div className={styles.logoContainer}>
          <li>
            <a href="https://www.linkedin.com/in/adrian-dufac/" target="_blank">
              <img src={linkedin} alt="linkedin"></img>
            </a>
          </li>
          <li>
            <a href="https://github.com/adriandufac" target="_blank">
              <img src={github} alt="github"></img>
            </a>
          </li>
          <li>
            <a href={cv} download>
              <img src={cvImage} alt="curriculum vitae"></img>
            </a>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default MainNavBar;
