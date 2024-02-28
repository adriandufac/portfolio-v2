import styles from "./MainNavBar.module.css";
import linkedin from "../../assets/linkedin.png";
import linkedinHover from "../../assets/linkedinHover.png";
import github from "../../assets/github.png";
import githubHover from "../../assets/githubHover.png";
import cvImage from "../../assets/CV.png";
import cvImageHover from "../../assets/CVHover.png";
import cv from "../../assets/CV_Adrian_Dufac.pdf";
import logo from "../../assets/logo.webp";
import logoHover from "../../assets/logohover.png";

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
              <div className={styles.logoContainer}>
                <img className={styles.logoImage} src={logo} alt="logo"></img>
                <img
                  className={styles.logoHoverImage}
                  src={logoHover}
                  alt="logo"
                ></img>
              </div>
            </a>
          </li>
        </div>
        <div className={styles.logoContainer}>
          <li>
            <a href="https://www.linkedin.com/in/adrian-dufac/" target="_blank">
              <div className={styles.linkedinContainer}>
                <img
                  className={styles.linkedinImage}
                  src={linkedin}
                  alt="linkedin"
                ></img>
                <img
                  className={styles.linkedinHoverImage}
                  src={linkedinHover}
                ></img>
              </div>
            </a>
          </li>
          <li>
            <a href="https://github.com/adriandufac" target="_blank">
              <div className={styles.gitContainer}>
                <img
                  className={styles.gitImage}
                  src={github}
                  alt="github"
                ></img>
                <img className={styles.gitHoverImage} src={githubHover}></img>
              </div>
            </a>
          </li>
          <li>
            <a href={cv} download>
              <div className={styles.cvContainer}>
                <img
                  className={styles.cvImage}
                  src={cvImage}
                  alt="curriculum vitae"
                ></img>
                <img className={styles.cvHoverImage} src={cvImageHover}></img>
              </div>
            </a>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default MainNavBar;
