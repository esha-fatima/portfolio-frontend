"use client";
import styles from "./nav.module.css";

interface navProps {
  onButtonClick: (buttonName: string) => void;
  selected: string;
}

export default function Nav({ onButtonClick, selected }: navProps) {
  const handleClick = (buttonName: string) => {
    onButtonClick(buttonName);
  };

  return (
    <div className={styles.navWrapper}>
      <div className={styles.navInnerWrapper}>
        <div
          onClick={(e) => {
            handleClick("about");
          }}
          className={`${styles.navButton} ${
            selected === "about" ? styles.selected : ""
          }`}
        >
          About
        </div>
        <div
          className={`${styles.navButton} ${
            selected === "work" ? styles.selected : ""
          }`}
          onClick={(e) => {
            handleClick("work");
          }}
        >
          Work
        </div>
        <div
          onClick={(e) => {
            handleClick("projects");
          }}
          className={`${styles.navButton} ${
            selected === "projects" ? styles.selected : ""
          }`}
        >
          Projects
        </div>
        <div
          onClick={(e) => {
            handleClick("contact");
          }}
          className={`${styles.navButton} ${
            selected === "contact" ? styles.selected : ""
          }`}
        >
          Contact
        </div>
      </div>
    </div>
  );
}
