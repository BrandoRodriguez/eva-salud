import styles from "./Header.module.css";
import {
  EvaSalud,
  Phone,
  PhoneDesktop,
  Menu,
  Acount,
  SearchPrimary,
  ButtonPrimarySmall,
  ButtonSecondarySmall,
  Spain,
  India,
  Portugal,
  UnitedStatesofAmerica,
} from "../../ui";
import { useLanguage } from "@context/LanguageContext/useLanguage";
import { NavBarText } from "@mocks/General";
import { getLogo } from "@utils/getLogo";

export const Header = () => {
  const { language } = useLanguage();
  const content = NavBarText[language];

  return (
    <header className={`${styles.header} container`}>
      <nav className={styles.navegation}>
        <div className={styles.logo}>

          { getLogo(language, 'white')}
        </div>
        <ul className={styles.link}>
          {content.items.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
        {/* <div className={styles.ctn_languages}>
          <div className={styles.languages}>
            <Spain /> <span>ESP</span>
          </div>
          <div className={styles.languages}>
            <UnitedStatesofAmerica /> <span>ENG</span>
          </div>
        </div> */}
        <div className={styles.group}>
          <div className={styles.group_desktop}>
            <SearchPrimary />
            <PhoneDesktop />
          </div>
          <div className={styles.group_button}>
            <ButtonSecondarySmall name={content.login_button} />
            <ButtonPrimarySmall name={content.register_button} />
          </div>
        </div>
        <div className={styles.group_mobile}>
          <Phone />
          <Acount />
          <Menu />
        </div>
      </nav>
    </header>
  );
};
