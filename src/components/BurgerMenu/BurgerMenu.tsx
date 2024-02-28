import { useState } from "react";
import styles from "./BurgerMenu.module.css";

interface BurgerMenuProps {
  handleClick: (element: string) => void;
}

const BurgerMenu = ({ handleClick }: BurgerMenuProps) => {
  const [isHidden, setHidden] = useState(true);
  const elements = ["About", "Experience", "Projects"];
  return (
    <>
      <nav className={styles.container} onClick={() => setHidden(!isHidden)}>
        <div className={styles.buttonBurger}></div>

        <ul className={isHidden ? styles.hidden : styles.burgerMenu}>
          {elements.map((element) => (
            <a>
              <li key={element} onClick={() => handleClick(element)}>
                {element}
              </li>
            </a>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default BurgerMenu;
