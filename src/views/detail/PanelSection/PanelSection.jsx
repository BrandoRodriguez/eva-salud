import user_panel_hero from "@assets/products/Ginecología.webp";
import styles from "./PanelSection.module.css";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
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
  const PoolPhone = 987564123;

  console.log({ panelSectionLanguage });
  console.log({ language });
  const panelSectionTxt = panelSectionLanguage[language];

  return (
    <div>
      <div className={styles.main}>
        <div className={styles.image_container}>
          <img src={user_panel_hero} alt="" />
        </div>
        <div className={styles.main_container}>
          <Title45>Consulta de Ginecología</Title45>
          <p className={styles.main_container_item}>
            En la consulta ginecológica el especialista procede a hacer una
            revisión rutinaria que consiste, en hacer la historia clínica, una
            exploración ginecológica en la consulta, una ecografía vaginal y una
            citología, si el profesional lo considera necesario.
          </p>
          <p className={styles.main_container_item}>
            A partir de los 25 años, se recomienda una revisión anual con toma
            de muestras para la detección temprana de enfermedades asociadas al
            cuello del útero y de transmisión sexual.
          </p>
          <div className={styles.button_wrapper}>
            <div className={styles.button_container}>
              <Link to={"/"}>
                <Button>Reservar</Button>
              </Link>
            </div>
            <AtencionTelefonica />
          </div>
          <div className={styles.pad}></div>
          <div className={styles.main_container2}>
            <h3>El servicio de Ginecología de Eva Salud incluye:</h3>
            <p className={styles.main_container_item2}>
              <Hoja /> Cada mujer inscrita en la tarjeta Eva Salud podrá acudir
              a una revisión anual con citología y ecografía no obstétrica
              (máximo 1 al año).
            </p>
            <p className={styles.main_container_item2}>
              <Hoja /> Cada mujer inscrita en la membresía podrá hacer uso de
              una consulta rutinaria a la semana con cita previa.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PanelSection;
