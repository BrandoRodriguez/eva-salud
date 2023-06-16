import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.detail}>Soy tu footer</div>
        <div className={styles.newsletter}></div>
        <div className={styles.bottombar}></div>
      </div>
    </footer>
  );
};
