import styles from "./Details.module.css";
import decesos_details1 from "@assets/imgs/decesos_details1.png";
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
          <div className={styles.content}>
            {/* <Title45>{content.title}</Title45> */}
            <LogoColor />
            <p>
              La única membresía que cuida de toda tu familia y colabora con un
              mundo mejor
            </p>
            <DetailsOptions options={content.list_info} />
          </div>
          <img src={decesos_details1} alt={""} />
        </>
      )}
    </section>
  );
};

export default Details;
