import styles from "./FundationModal.module.css";
import universo_santi from "@assets/imgs/universo_santi.png";
import reforestando_andalucia from "@assets/imgs/reforestando_andalucia.png";
import tree_reforestando_andalucia from "@assets/imgs/tree_reforestando_andalucia.png";
import people_universo_santi from "@assets/imgs/people_universo_santi.png";
import { useEffect } from "react";
import Hoja from "@components/icons/Hoja";
import { Title45 } from "@UI/Tags/Titles";
import Button from "@UI/ButtonDecesos/Button";
import ModalStyle2 from "@UI/ModalStyle2/ModalStyle2";

const FundationModal = ({ closeModal }) => {
  const options = [
    "Reforestación Doñana, incendio 2017",
    "Creación Anillo Verde Granada / Restauración cerro",
    "Contra “la seca” en Alcalá de los Gazules",
  ];

  const url = {
    'universo_santi': 'https://universosanti.com/',
    'reforesando_andalucia': 'https://www.plant-for-the-planet.org/es/andalucia/'
  }

  useEffect(() => {

    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = 'unset'
    };
  }, []);

  return (
    <ModalStyle2 closeModal={closeModal}>

      <div className={`${styles.fundation_card_content} ${styles.reverse}`}>
        <div className={styles.company_description}>
          <div>
            <div className={styles.company}>
              <img src={universo_santi} alt="" />
              <div>
                <Title45 style={{ marginBottom: '7px' }}>UNIVERSO SANTI</Title45>
                <a
                  className={styles.link}
                  href={url['universo_santi']}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://universosanti.com/
                </a>
              </div>
            </div>
            <p className={styles.description}>
              La finalidad del restaurante Universo Santi es la de contribuir a
              la mejora de la calidad y de las condiciones de vida de las
              personas con discapacidad, para su plena vida autónoma e
              independiente, respetando el legado culinario del gran chef Santi
              Santamaría. Y lo hacemos en un lugar emblemático en Jerez de la
              Frontera: El Altillo.
            </p>
            <a
              href={url['universo_santi']}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>Ver más</Button>
            </a>
          </div>
        </div>
        <img src={people_universo_santi} alt="" />
      </div>

      <div className={styles.fundation_card_content}>
        <div className={styles.company_description}>
          <div>
            <div className={styles.company}>
              <img src={reforestando_andalucia} alt="" />
              <div>
                <Title45 style={{ marginBottom: '7px' }}>REFORESTANDO ANDALUCÍA</Title45>
                <a
                  className={styles.link}
                  href={url['reforesando_andalucia']}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Plant-for-the-planet.org/es/andalucia
                </a>
              </div>
            </div>
            <p className={styles.description}>
              Junto con nuestros socios queremos recuperar los bosques perdidos
              en los alrededores de Granada y Doñana. Nuestro objetivo es
              plantar un total de 1 Millón árboles hasta 2030.
            </p>
            <div>
              {options.map((option, i) => {
                return (
                  <div key={i} className={styles.option}>
                    <Hoja />
                    <p>{option}</p>
                  </div>
                );
              })}
            </div>
            <a
              href={url['reforesando_andalucia']}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>Ver más</Button>
            </a>
          </div>

        </div>
        <img src={tree_reforestando_andalucia} alt="" />
      </div>

    </ModalStyle2>
  );
};

export default FundationModal;
