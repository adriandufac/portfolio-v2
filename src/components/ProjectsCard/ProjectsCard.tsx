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
    </article>
  );
};

export default ProjectsCard;
