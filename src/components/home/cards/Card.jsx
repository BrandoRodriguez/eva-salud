import { useLanguage } from "@context/LanguageContext/useLanguage";
import styles from "./Card.module.css";
import { CardProductText } from "@mocks/Pages/Home";

export const CardSmall = ({
  image = "./oftalmologia.png",
  specialty = "Consulta de oftalmología",
  category = "Oftalmología",
  price = "00€",
}) => {
  return (
    <div className={styles.freespecialties}>
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
          <button className={styles.viewCenter}>Ver Centros</button>
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
          <button className={styles.viewCenter}>Ver Centros</button>
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
  // image = "./images/products/Dental.webp",
  title = "Consulta Dental",
  description = "Incluye limpieza bucal gratuita.",
}) => {
  return (
    <div className={styles.cardbanner}>
      <div
        className={styles.bg_banner}
        // style={{
        //   backgroundImage: `url(${image})`,
        // }}
      >
        <div className={styles.banner_content}>
          <h2>{title}</h2>
          <h3>{description}</h3>
          <button className={styles.viewCenter}>Reservar Ahora</button>
        </div>
      </div>
    </div>
  );
};

export const CardBannerInformative = ({
  // image = "./images/products/Banner.webp",
  title = "¡Descubre nuestras especialidades no incluidas!",
  description = "Ofrecemos pruebas de diagnóstico, intervenciones quirúrgicas y  especialistas con descuentos de hasta el 40%. En Eva Salud, nuestra prioridad es ofrecerle atención médica y de calidad, a precios accesibles. ¡Contáctanos hoy mismo para más información y programar tu cita! Además, ofrecemos financiación de hasta 36 meses con un tipo de interés preferente. Tu bienestar es nuestra prioridad.",
}) => {
  return (
    <div className={styles.cardbannerinformative}>
      <div
        className={styles.bg_bannerinformative}
        // style={{
        //   backgroundImage: `url(${image})`,
        // }}
      >
        <div className={styles.banner_content}>
          <h2>{title}</h2>
          <h3>{description}</h3>
          <div className={styles.ctn_button_banner}>
            <button className={styles.viewCenter}>Ver Especialidades</button>
          </div>
        </div>
      </div>
    </div>
  );
};
