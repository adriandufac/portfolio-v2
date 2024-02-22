import { useState } from "react";
import Tags from "../Tags/Tags";
import projects from "./Projects";
import styles from "./ProjectsCard.module.css";

const ProjectsCard = () => {
  const [idDisplayed, setIdDisplayed] = useState(1);

  return (
    <>
      {projects.map((project) => (
        <div
          key={project.id}
          className={
            project.id != idDisplayed ? styles.hidden : styles.contentContainer
          }
        >
          <img className={styles.imgProject} src={project.img}></img>
          <div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
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
    </>
  );
};

export default ProjectsCard;
