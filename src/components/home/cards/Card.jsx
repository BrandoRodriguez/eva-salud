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

export const CardProduct = ({
  image = "./images/products/oftalmologia.png",
  specialty = "Consulta de oftalmología",
  category = "Oftalmología",
  price = "00€",
}) => {
  return (
    <div
      className={styles.cardproduct}
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className={styles.content}>
        <h2 className={styles.specialty}>{specialty}</h2>
        <span className={styles.category}>{category}</span>
        <div className={styles.ctn_price}>
          <span className={styles.price}>{price}</span> / consulta
        </div>
      </div>
    </div>
  );
};

export const AboutCard = ({
  image = "./images/products/oftalmologia.png",
  title = "Consulta de oftalmología",
  description = "Oftalmología",
  price = "00€",
}) => {
  return (
    <div
      className={styles.aboutCard}
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className={styles.content}>
        <h2 className={styles.specialty}>{title}</h2>
        <span className={styles.category}>{description}</span>
      </div>
    </div>
  );
};
