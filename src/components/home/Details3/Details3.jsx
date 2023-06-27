import styles from "./Details3.module.css";
import decesos_details1 from "@assets/imgs/BannerInformativeAnimales.webp";
import DetailsOptions from "./DetailsOptions/DetailsOptions";
import { Title45 } from "@UI/Tags/Titles";
import { useLanguage } from "@context/LanguageContext/useLanguage";
import { BannerInformativeAnimalesText } from "@mocks/Pages/Home";

const Details3 = () => {
  const { language } = useLanguage();
  const content = BannerInformativeAnimalesText[language];
  return (
    <section className={`${styles.details} container`}>
      {
        <>
          <div className={styles.content}>
            {/* <Title45>Titulo Prueba</Title45> */}
            <p>{content.description}</p>
            {/* <button className={styles.viewCenter}>{content.button_text}</button> */}

            {/* <DetailsOptions
              options={[
                {
                  title: "CONSULTAS VETERINARIAS",
                },
                {
                  title: "INTERVENCIONES QUIRÚRGICAS",
                },
                {
                  title: "ESCUELA / GUARDERÍA",
                },
              ]}
            /> */}
          </div>
          <img src={decesos_details1} alt={""} />
        </>
      }
    </section>
  );
};

export default Details3;
