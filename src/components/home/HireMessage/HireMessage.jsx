import styles from "./HireMessage.module.css";
import { useMediaQuery } from "react-responsive";
import banner_desktop from "@assets/imgs/banner_desktop.webp";
import banner_mobile from "@assets/imgs/banner_mobile.webp";
import HireMessageModal from "./HireMessageModal/HireMessageModal";
import { useState } from "react";
import Button from "@UI/ButtonDecesos/Button";
import EvaMovilColor from "@assets/Logos/EvaMovilColor";
import { HireMessageText } from "@mocks/Pages/Home";
import { useLanguage } from "@context/LanguageContext/useLanguage";
import { processBoldText } from "@utils/functions";
import EvaMobileColor from "@assets/Logos/EvaMobileColor";

const HireMessage = () => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const { language } = useLanguage();
  // const { content } = useTraduction('functioning')

  const content = HireMessageText[language];

  const [isOpenModal, setIsOpenModal] = useState(false);

  const getEvaMovilLogo = () => {
    
    if (language === 'es'){
      return <EvaMovilColor />
    }
    else {
      return <EvaMobileColor />
    }
  }

  return (
    <section
      className={`${styles.hire_message} container`}
      data-aos="fade-left"
    >
      <div className={styles.content} data-aos="fade-left" data-aos-delay="300">
        <div className={styles.logo_container}>
          {
            getEvaMovilLogo()
          }
          
        </div>

        <p className={styles.title}>{content.title1}</p>

        <p className={styles.title2}>
          {processBoldText(content.title2).map((text, index) => {
            if (text.type === "text") {
              return text.content + " ";
            }

            return (
              <span key={index} className={styles.bold_title}>
                {text.content}{" "}
              </span>
            );
          })}
        </p>

        <div className={styles.button_container}>
          <Button
            rounded
            onClick={() => {
              setIsOpenModal(true);
            }}
          >
            {content.button}
          </Button>
        </div>
      </div>

      {isDesktop ? (
        <img src={banner_desktop} alt="" />
      ) : (
        <img src={banner_mobile} alt="" />
      )}

      {isOpenModal && (
        <HireMessageModal
          closeModal={() => {
            setIsOpenModal(false);
          }}
        />
      )}
    </section>
  );
};

export default HireMessage;
