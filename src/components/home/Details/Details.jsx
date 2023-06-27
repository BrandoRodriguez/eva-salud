import styles from "./Details.module.css";
import decesos_details1 from "@assets/imgs/BannerInformative.webp";
import DetailsOptions from "./DetailsOptions/DetailsOptions";
import { Title45 } from "@UI/Tags/Titles";
import { useLanguage } from "@context/LanguageContext/useLanguage";
import { BannerInformativeText } from "@mocks/Pages/Home";
import { LogoColor } from "../../../components";
import { processBoldText } from "@utils/functions";

const Details = () => {
  const { language } = useLanguage();
  const content = BannerInformativeText[language];

  return (
    <section className={`${styles.details} container`}>
      {content.length !== 0 && (
        <>
          <img src={decesos_details1} alt={""} />

          <div className={styles.content}>
            {/* <Title45>{content.title}</Title45> */}
            <p>
              {processBoldText(content.description).map((word, index) => {
                if (word.type === "text") {
                  return word.content + " ";
                } else {
                  return <b key={index}>{word.content} </b>;
                }
              })}
            </p>
            <button className={styles.viewCenter}>{content.button_text}</button>
          </div>
        </>
      )}
    </section>
  );
};

export default Details;
