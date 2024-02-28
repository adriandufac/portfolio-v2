import styles from "./SideNavBar.module.css";

interface SideNavBarProps {
  enlightenElement: string;
  handleClick: (element: string) => void;
}

const elements = ["About", "Experience", "Projects"];

const SideNavBar = ({ enlightenElement, handleClick }: SideNavBarProps) => {
  return (
    <nav className={styles.container}>
      <ul className={styles.ulSide}>
        {elements.map((element) => (
          <a>
            <li
              className={
                enlightenElement === element
                  ? [styles.sideBarLi, styles.enligthen].join(" ")
                  : styles.sideBarLi
              }
              key={element}
              onClick={() => handleClick(element)}
            >
              {element}
            </li>
          </a>
        ))}
      </ul>
    </nav>
  );
};

export default SideNavBar;
