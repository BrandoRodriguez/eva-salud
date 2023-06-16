import styles from "./header.module.css";
import {
  Logo,
  Search,
  Phone,
  ButtonPrimarySmall,
  ButtonSecondarySmall,
} from "../../ui";

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <Logo />
        <ul>
          <li>Inicio</li>
          <li>Especialidades</li>
          <li>Centros destacados</li>
          <li>Atención al cliente</li>
        </ul>
        <div>
          <Search />
          <Phone />
        </div>
        <div>
          <ButtonPrimarySmall />
          <ButtonSecondarySmall />
        </div>
      </nav>
    </header>
  );
};
