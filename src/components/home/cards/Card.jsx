import { useLanguage } from "@context/LanguageContext/useLanguage";
import styles from "./Card.module.css";
import { CardProductText, HeroText } from "@mocks/Pages/Home";

export const CardSmall = ({
  image = "./oftalmologia.png",
  specialty = "Consulta de oftalmología",
  category = "Oftalmología",
  price = "00€",
}) => {
  const { language } = useLanguage();
  const content = HeroText[language];

  return (
    <div className={styles.freespecialties} data-aos="fade-down">
      <div
        className={styles.bg_freespecialties}
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>
      <div className={styles.content}>
        <h2>{specialty}</h2>
        <h3>{category}</h3>
        <div className={styles.ctn_price}>
          Coste /<span className={styles.price}>{price}</span>
        </div>
        <div className={styles.ctn_button}>
          <button className={styles.viewCenter}>{content.card_button}</button>
        </div>
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
    <div className={styles.product}>
      <div
        className={styles.bg_product}
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>
      <div>
        <h2>{specialty}</h2>
        <h3>{category}</h3>
        <div className={styles.ctn_price}>
          <span className={styles.price}>{price}</span> / {content.concept}
        </div>
        <div className={styles.ctn_button}>
          <button className={styles.viewCenter}>{content.button_text}</button>
        </div>
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
        <div className={styles.ctn_button}>
          <button className={styles.viewCenter}>Reservar Ahora</button>
        </div>
      </div>
    </div>
  );
};

export const CardBanner = ({
  title = "Consulta Dental",
  description = "Incluye limpieza bucal gratuita.",
  button_text = "Reservar Ahora",
}) => {
  return (
    <div className={styles.cardbanner}>
      <div className={styles.bg_banner}>
        <div className={styles.banner_content} data-aos="fade-right">
          <h2>{title}</h2>
          <h3>{description}</h3>
          <div className={styles.ctn_button_banner}>
            <button className={styles.viewCenter}>{button_text}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const CardBannerInformative = ({
  title = "¡Descubre nuestras especialidades no incluidas!",
  description = "¡Obtén un asombroso descuento de hasta el 40% sobre el precio de venta al público (PVP) en especialidades médicas, pruebas de diagnóstico e intervenciones no gratuitas! Además, te ofrecemos una financiación de hasta 36 meses. ¡No pierdas esta increíble oportunidad y accede a los mejores servicios de salud con grandes beneficios económicos!.",
  button_text = 'Ver Especialidades'
}) => {
  return (
    <div className={styles.cardbannerinformative}>
      <div className={styles.bg_bannerinformative}>
        <div className={styles.banner_content} data-aos="fade-left">
          {/* <h2>{title}</h2> */}
          <h3>{description}</h3>
          <div className={styles.ctn_button_banner}>
            <button className={styles.viewCenter}>{button_text}</button>
          </div>
        </div>
      </div>
    </div>
  );
};
