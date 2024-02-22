import styles from "./MainNavBar.module.css";

const MainNavBar = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.ul}>
        <div>
          <li>1</li>
        </div>
        <div className={styles.logoContainer}>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </div>
      </ul>
    </div>
  );
};

export default MainNavBar;
