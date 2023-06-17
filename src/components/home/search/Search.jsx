import styles from "./Search.module.css";
import {
  SearchIcon,
  SearchWhite,
  Location,
  Ubication,
  Star,
  Select,
} from "../../../components";
import { useLanguage } from "@context/LanguageContext/useLanguage";
import { HeroText } from "@mocks/Pages/Home";

export const Search = () => {

  const {language} = useLanguage()

  const content = HeroText[language].search

  return (
    <div className={styles.search}>
      <div className={styles.imputSearch}>
        <SearchIcon />
        <div className={styles.text}>{content.input_placeholder}</div>
      </div>
      <div className={styles.imputLocation}>
        <Location />
        <div className={styles.div}>
          <div className={styles.label}>{content.location.title}</div>
          <div className={styles.text1}>{content.location.cities[0]}</div>
        </div>
        <div className={styles.formAction}>
          <Ubication />
        </div>
      </div>
      <div className={styles.imputSpecialties}>
        <Star />
        <div className={styles.div}>
          <div className={styles.label}>{content.specialty.title}</div>
          <div className={styles.text1}>{content.specialty.specialties[0]}</div>
        </div>
        <Select />
      </div>
      <button className={styles.button}>
        <SearchWhite />
        <b className={styles.text3}>{content.button_text}</b>
      </button>
    </div>
  );
};
