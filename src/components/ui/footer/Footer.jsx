import styles from "./Footer.module.css";
import { Logo, Youtube, Facebook } from "../../ui";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.detail}></div>
        <div className={styles.newsletter}></div>
        <div className={styles.bottombar}></div>
      </div>
    </footer>
  );
};
