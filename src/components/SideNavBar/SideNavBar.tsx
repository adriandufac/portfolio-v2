import styles from "./SideNavBar.module.css";

interface SideNavBarProps {
  enlightenElement: string;
  handleClick: (element: string) => void;
}

const elements = ["About", "Experience", "Projects"];

const SideNavBar = ({ enlightenElement, handleClick }: SideNavBarProps) => {
  return (
    <div className={styles.container}>
      <ul className={styles.ul}>
        {elements.map((element) => (
          <a>
            <li
              className={enlightenElement === element ? styles.enligthen : ""}
              key={element}
              onClick={() => handleClick(element)}
            >
              {element}
            </li>
          </a>
        ))}
      </ul>
    </div>
  );
};

export default SideNavBar;
