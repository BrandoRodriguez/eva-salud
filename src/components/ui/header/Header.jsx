import styles from "./header.module.css";
import {
  Logo,
  SearchPrimary,
  Phone,
  ButtonPrimarySmall,
  ButtonSecondarySmall,
} from "../../ui";

export const Header = () => {
  return (
    <header className={`${styles.header} container`}>
      <nav className={styles.navegation}>
        <Logo />
        <ul className={styles.link}>
          <li>Inicio</li>
          <li>Especialidades</li>
          <li>Centros destacados</li>
          <li>Atención al cliente</li>
        </ul>
        <div className={styles.group}>
          <SearchPrimary />
          <Phone />
        </div>
        <div className={styles.group}>
          <ButtonSecondarySmall name={"Iniciar sesión"} />
          <ButtonPrimarySmall name={"Registrarse"} />
        </div>
      </nav>
    </header>
  );
};
