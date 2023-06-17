import styles from "./Chip.module.css";

export const ChipPrimary = ({ name = "Chip" }) => {
  return <div className={styles.chipprimary}>{name}</div>;
};

export const ChipBorder = ({ name = "Chip" }) => {
  return <div className={styles.chipborder}>{name}</div>;
};
