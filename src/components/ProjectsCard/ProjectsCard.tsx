import { useState } from "react";
import Tags from "../Tags/Tags";
import projects from "./Projects";
import styles from "./ProjectsCard.module.css";
import { setUpAnimation } from "../Services/Animation";

const ProjectsCard = () => {
  const [idDisplayed, setIdDisplayed] = useState(1);
  setUpAnimation("Projects");
  return (
    <article className={styles.mainContainer}>
      <h2 className="Projects">Projects</h2>
      {projects.map((project) => (
        <div
          key={project.id}
          className={
            project.id != idDisplayed ? styles.hidden : styles.contentContainer
          }
        >
          <h3 className={styles.title}>{project.title}</h3>
          <p className={styles.description + " Projects"}>
            {project.description}
          </p>
          <div className={styles.tagContainer}>
            <Tags tagList={project.tags}></Tags>
          </div>
          <div className={styles.linksContainer}>
            <ul className={styles.ulLinks}>
              {project.links.map((link) => (
                <a href={link.href} target="blank" className={styles.link}>
                  <div className={styles.singleLinkContainer}>
                    <li className={styles.liLinks}>{link.name}</li>

                    <div className={styles.radientUnderline}></div>
                    <div className={styles.inverseRadientUnderline}></div>
                  </div>
                </a>
              ))}
            </ul>
          </div>
        </div>
      ))}
      <div className={styles.inputContainer}>
        {projects.map((project) => (
          <div className={styles.singleInputContainer}>
            <label className={styles.label}>
              <input
                name="carousel-slider"
                className={styles.input}
                onClick={() => setIdDisplayed(project.id)}
                type="radio"
                key={project.id}
                checked={project.id === idDisplayed ? true : false}
              ></input>
            </label>
          </div>
        ))}
      </div>
    </article>
  );
};

export default ProjectsCard;
