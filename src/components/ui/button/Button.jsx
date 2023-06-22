import styles from "./Button.module.css";
import { Arrow } from "../../../components";

export const ButtonPrimary = ({ name = "Button" }) => {
  return <div className={styles.buttonprimary}>{name}</div>;
};

export const ButtonSecondary = () => {
  return <div>Button</div>;
};

export const ButtonArrow = ({ name = "Button" }) => {
  return (
    <div className={styles.buttonarrow}>
      {name} <Arrow />
    </div>
  );
};

export const ButtonPrimarySmall = ({ name = "Button" }) => {
  return <div className={styles.buttonprimarysmall}>{name}</div>;
};
export const ButtonSecondarySmall = ({ name = "Button" }) => {
  return <div className={styles.buttonsecondarysmall}>{name}</div>;
};

export const ButtonSecondarySmallColor = ({ name = "Button" }) => {
  return <div className={styles.buttonsecondarysmallcolor}>{name}</div>;
};
