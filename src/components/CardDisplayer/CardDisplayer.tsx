import style from "./CardDisplayer.module.css";
import AboutCard from "../AboutCard/AboutCard";
import ExperienceCard from "../ExperienceCard/ExperienceCard";
import ProjectsCard from "../ProjectsCard/ProjectsCard";

interface CardDisplayerProps {
  displayedElement: string;
}

const CardDisplayer = ({ displayedElement }: CardDisplayerProps) => {
  const cards = [
    {
      id: "About",
      content: <AboutCard />,
    },
    {
      id: "Experience",
      content: <ExperienceCard />,
    },
    {
      id: "Projects",
      content: <ProjectsCard />,
    },
  ];

  return (
    <>
      {cards.map((card) => (
        <div className={card.id != displayedElement ? style.hidden : ""}>
          {card.content}
        </div>
      ))}
    </>
  );
};

export default CardDisplayer;
