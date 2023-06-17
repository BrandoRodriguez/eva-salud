import styles from "./Search.module.css";
import {
  SearchIcon,
  SearchWhite,
  Location,
  Ubication,
  Star,
  Select,
} from "../../../components";

export const Search = () => {
  return (
    <div className={styles.search}>
      <div className={styles.imputSearch}>
        <SearchIcon />
        <div className={styles.text}>¿Qué estás buscando?</div>
      </div>
      <div className={styles.imputLocation}>
        <Location />
        <div className={styles.div}>
          <div className={styles.label}>ubicación</div>
          <div className={styles.text1}>Gotham, USA</div>
        </div>
        <div className={styles.formAction}>
          <Ubication />
        </div>
      </div>
      <div className={styles.imputSpecialties}>
        <Star />
        <div className={styles.div}>
          <div className={styles.label}>Especialidades</div>
          <div className={styles.text1}>Consulta de der..</div>
        </div>
        <Select />
      </div>
      <button className={styles.button}>
        <SearchWhite />
        <b className={styles.text3}>Buscar</b>
      </button>
    </div>
  );
};
