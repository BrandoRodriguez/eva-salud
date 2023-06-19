import { useLanguage } from "@context/LanguageContext/useLanguage";
import styles from "./Card.module.css";
import { CardProductText } from "@mocks/Pages/Home";

export const CardSmall = ({
  image = "./oftalmologia.png",
  specialty = "Consulta de oftalmología",
  category = "Oftalmología",
}) => {
  return (
    <div>
      <div
        className={styles.cardsmall}
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>
      <div className={styles.content}>
        <h2 className={styles.specialty}>{specialty}</h2>
        <p className={styles.category}>{category}</p>
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
  const { language } = useLanguage();
  const content = CardProductText[language];

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
          <span className={styles.price}>{price}</span> / {content.concept}
        </div>
        <button className={styles.viewCenter}>Ver Centros</button>
      </div>
    </div>
  );
};

export const AboutCard = ({
  image = "./images/products/oftalmologia.png",
  title = "Consulta de oftalmología",
  description = "Oftalmología",
}) => {
  return (
    <div
      className={styles.aboutCard}
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      {/* <div className={styles.content}>
        <h2 className={styles.specialty}>{title}</h2>
        <span className={styles.category}>{description}</span>
        <button className={styles.viewCenter}>Entérate cómo</button>
      </div> */}
    </div>
  );
};

export const Card = ({
  image = "./images/products/oftalmologia.png",
  title = "Consulta de oftalmología",
  description = "Oftalmología",
}) => {
  return (
    <div className={styles.productonline}>
      <div
        className={styles.bg}
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>
      <div>
        <h2>{title}</h2>
        <h3>{description}</h3>
        <button className={styles.viewCenter}>Entérate cómo</button>
      </div>
    </div>
  );
};
