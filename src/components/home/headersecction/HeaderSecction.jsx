import styles from "./HeaderSecction.module.css";
import { ButtonArrow } from "../..";

export const HeaderSecction = () => {
  return (
    <div className={`${styles.headersecction} container`}>
      <h2>Pruebas médicas más populares en Madrid</h2>
      <div className={styles.group}>
        <p>
          “Tu bienestar nos mueve, Encuentra la especialidad adecuada para una
          vida plena”
        </p>
        <ButtonArrow name="Ver Todas las Especialidades" />
      </div>
    </div>
  );
};
