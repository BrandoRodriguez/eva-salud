import styles from "./header.module.css";
import {
  Logo,
  SearchPrimary,
  Phone,
  ButtonPrimarySmall,
  ButtonSecondarySmall,
} from "../../ui";
import { useLanguage } from "@context/LanguageContext/useLanguage";
import { NavBarText } from "@mocks/General";

export const Header = () => {

  const {language} = useLanguage()
  const content = NavBarText[language]

  return (
    <header className={`${styles.header} container`}>
      <nav className={styles.navegation}>
        <Logo />
        <ul className={styles.link}>
          
          {
            content.items.map((item, index)=> {
              return <li key={index}>{item}</li>
            })
          }
        
        </ul>
        <div className={styles.group}>
          <SearchPrimary />
          <Phone />
        </div>
        <div className={styles.group}>
          <ButtonSecondarySmall name={content.login_button} />
          <ButtonPrimarySmall name={content.register_button} />
        </div>
      </nav>
    </header>
  );
};
