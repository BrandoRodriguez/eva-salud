import user_panel_hero from "@assets/imgs/user_panel_hero.webp";
import styles from "./PanelSection.module.css";
import { useMediaQuery } from "react-responsive";
import { Link } from 'react-router-dom'
import { useLanguage } from "@context/LanguageContext/useLanguage";
import { Title45 } from "@UI/Tags/Titles";
import Button from "@UI/ButtonDecesos/Button";
import Phone from "@components/icons/Phone";
import Hoja from "@components/icons/Hoja";
import { panelSectionLanguage } from "@mocks/Pages/Detail";
import AtencionTelefonica from "@UI/AtencionTelefonica/AtencionTelefonica";

const PanelSection = () => {

  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const { language } = useLanguage();
  const PoolPhone = 987564123

  console.log({panelSectionLanguage})
  console.log({language})
  const panelSectionTxt = panelSectionLanguage[language];

  return (
    <div>
      <div className={styles.main}>
        <div className={styles.image_container}>
          <img src={user_panel_hero} alt="" />
        </div>

        <div className={styles.main_container}>
          <h4 className={styles.main_container_item}>{panelSectionTxt.deathInsurance}</h4>
          <Title45>
            {panelSectionTxt.title}
          </Title45>
          <p className={styles.main_container_item}>
            {panelSectionTxt.description}
          </p>

          <div className={styles.button_wrapper}>

            <div className={styles.button_container}>
              <Link to={'/'}>
                <Button
                >{panelSectionTxt.btnTxt}</Button>
              </Link>
            </div>

            <AtencionTelefonica/>

          </div>

          <div className={styles.pad}></div>
          <div className={styles.main_container2}>
            <p className={styles.main_container_item2}>
              <Hoja /> {panelSectionTxt.compareTxt}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PanelSection;
