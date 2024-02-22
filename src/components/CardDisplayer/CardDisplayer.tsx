import style from "./CardDisplayer.module.css";
interface CardDisplayerProps {
  displayedElement: string;
}

const CardDisplayer = ({ displayedElement }: CardDisplayerProps) => {
  const cards = [
    {
      id: "About",
      header: "About",
      content: "I'm a Developper",
    },
    {
      id: "Experience",
      header: "Experience",
      content: "I worked at",
    },
    {
      id: "Projects",
      header: "Projects",
      content: " - ezaeazea",
    },
  ];

  return (
    <>
      {cards.map((card) => (
        <div className={card.id != displayedElement ? style.hidden : ""}>
          <h2>{card.header}</h2>
          <p>{card.content}</p>
        </div>
      ))}
    </>
  );
};

export default CardDisplayer;
