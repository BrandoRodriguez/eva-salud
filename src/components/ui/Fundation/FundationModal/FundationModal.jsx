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
import { useLanguage } from "@context/LanguageContext/useLanguage";
import { FundationModalText } from "@mocks/Pages/Home";

const FundationModal = ({ closeModal }) => {

  const url = {
    'universo_santi': 'https://universosanti.com/',
    'reforesando_andalucia': 'https://www.plant-for-the-planet.org/es/andalucia/'
  }

  const {language} = useLanguage()
  const content = FundationModalText[language]

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
                <Title45 style={{ marginBottom: '7px' }}>{content[0].title}</Title45>
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
              {content[0].description}
            </p>
            <a
              href={url['universo_santi']}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>{content[0].button_text}</Button>
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
                <Title45 style={{ marginBottom: '7px' }}>{content[1].title}</Title45>
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
            {content[1].description}
            </p>
            <div>
              {content[1].options.map((option, i) => {
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
              <Button>{content[1].button_text}</Button>
            </a>
          </div>

        </div>
        <img src={tree_reforestando_andalucia} alt="" />
      </div>

    </ModalStyle2>
  );
};

export default FundationModal;
