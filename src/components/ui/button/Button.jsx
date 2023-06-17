import styles from "./Button.module.css";

export const ButtonPrimary = () => {
  return <div>Button</div>;
};

export const ButtonSecondary = () => {
  return <div>Button</div>;
};

export const ButtonPrimarySmall = ({ name = "Button" }) => {
  return <div className={styles.buttonprimarysmall}>{name}</div>;
};
export const ButtonSecondarySmall = ({ name = "Button" }) => {
  return <div className={styles.buttonsecondarysmall}>{name}</div>;
};
