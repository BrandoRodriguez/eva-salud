import styles from "./Details.module.css";
import decesos_details1 from "@assets/imgs/BannerInformative.webp";
import DetailsOptions from "./DetailsOptions/DetailsOptions";
import { Title45 } from "@UI/Tags/Titles";
import { useLanguage } from "@context/LanguageContext/useLanguage";
import { DetailsText } from "@mocks/Pages/Home";
import { LogoColor } from "../../../components";

const Details = () => {
  const { language } = useLanguage();
  const content = DetailsText[language];

  return (
    <section className={`${styles.details} container`}>
      {content.length !== 0 && (
        <>
          <img src={decesos_details1} alt={""} />

          <div className={styles.content}>
            {/* <Title45>{content.title}</Title45> */}
            <p>
              ¡Obtén un asombroso descuento de hasta el 40% sobre el precio de
              venta al público (PVP) en especialidades médicas, pruebas de
              diagnóstico e intervenciones no gratuitas! Además, te ofrecemos
              una financiación de hasta 36 meses. ¡No pierdas esta increíble
              oportunidad y accede a los mejores servicios de salud con grandes
              beneficios económicos!.
            </p>
            <button className={styles.viewCenter}>Ver Especialidades</button>
          </div>
        </>
      )}
    </section>
  );
};

export default Details;
