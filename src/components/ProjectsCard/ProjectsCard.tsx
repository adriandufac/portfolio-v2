import { useState } from "react";
import Tags from "../Tags/Tags";
import projects from "./Projects";
import styles from "./ProjectsCard.module.css";

const ProjectsCard = () => {
  const [idDisplayed, setIdDisplayed] = useState(1);

  return (
    <div className={styles.mainContainer}>
      <h2>Projects</h2>
      {projects.map((project) => (
        <div
          key={project.id}
          className={
            project.id != idDisplayed ? styles.hidden : styles.contentContainer
          }
        >
          <img className={styles.imgProject} src={project.img}></img>

          <h3 className={styles.title}>{project.title}</h3>
          <p className={styles.description}>{project.description}</p>
          <div className={styles.tagContainer}>
            <Tags></Tags>
          </div>
        </div>
      ))}
      <div className={styles.inputContainer}>
        {projects.map((project) => (
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
        ))}
      </div>
    </div>
  );
};

export default ProjectsCard;
