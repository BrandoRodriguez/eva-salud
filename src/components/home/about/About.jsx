import styles from "./About.module.css";
import { AboutCard, Video } from "../../../components";
import { useLanguage } from "@context/LanguageContext/useLanguage";
import { AboutText } from "@mocks/Pages/Home";

export const About = () => {

  const {language } = useLanguage()
  const content = AboutText[language]

  return (
    <div className={`${styles.about} container`}>
      <Video />
      <div className={styles.cardlist}>
        {content.map((item, index) => (
          <AboutCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};
