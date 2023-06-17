import styles from "./HeaderSecction.module.css";
import { ButtonArrow } from "../..";

export const HeaderSecction = ({ title, description }) => {
  return (
    <div className={styles.headersecction}>
      <h2>{title}</h2>
      <div className={styles.group}>
        <p>{description}</p>
        <ButtonArrow name="Ver Todas las Especialidades" />
      </div>
    </div>
  );
};
