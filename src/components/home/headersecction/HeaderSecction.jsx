import styles from "./HeaderSecction.module.css";
import { ButtonArrow } from "../..";
import { HeaderSectionText } from "@mocks/Pages/Home";
import { useLanguage } from "@context/LanguageContext/useLanguage";

export const HeaderSecction = ({ title, description }) => {

  const {language} = useLanguage()
  const content = HeaderSectionText[language]

  return (
    <div className={`${styles.headersecction} container`}>
      <h2>{title}</h2>
      <div className={styles.group}>
        <p>{description}</p>
        <ButtonArrow name={content.button_text} />
      </div>
    </div>
  );
};
