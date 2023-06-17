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
} from "../../ui";
import { useLanguage } from "@context/LanguageContext/useLanguage";
import { NavBarText } from "@mocks/General";

export const Header = () => {
  const { language } = useLanguage();
  const content = NavBarText[language];

  return (
    <header className={`${styles.header} container`}>
      <nav className={styles.navegation}>
        <div className={styles.logo}>
          <EvaSalud fill={'#fff'}/>
        </div>
        <ul className={styles.link}>
          {content.items.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
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
