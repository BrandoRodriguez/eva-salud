import styles from "./Card.module.css";

export const CardSmall = ({
  image = "./oftalmologia.png",
  specialty = "Consulta de oftalmología",
  category = "Oftalmología",
}) => {
  return (
    <div
      className={styles.cardsmall}
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className={styles.content}>
        <h2 className={styles.specialty}>{specialty}</h2>
        <span className={styles.category}>{category}</span>
      </div>
    </div>
  );
};
