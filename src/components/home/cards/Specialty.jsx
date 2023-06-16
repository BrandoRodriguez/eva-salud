import styles from "./Specialty.module.css";

export const Specialty = ({
  image = "./oftalmologia.png",
  specialty = "Consulta de oftalmología",
  category = "Oftalmología",
}) => {
  return (
    <div
      className={styles.card}
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
