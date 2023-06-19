import { useEffect } from "react";
import styles from "@UI/Fundation/FundationModal/FundationModal.module.css";
import free_line from "@assets/imgs/free_line.webp";
import ModalStyle2 from "@UI/ModalStyle2/ModalStyle2";
import { Title45 } from "@UI/Tags/Titles";
import { HireMessageModalText } from "@mocks/Pages/Home";
import { useLanguage } from "@context/LanguageContext/useLanguage";

const HireMessageModal = ({ closeModal }) => {
  const { language } = useLanguage();
  const content = HireMessageModalText[language];

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
              <div>
                <Title45 style={{ marginBottom: "7px" }}>
                  {content.title}
                </Title45>
              </div>
            </div>
            <p className={styles.description}>
              {content.description1[0]}
              <br />
              <br />
              {content.description1[1]}
            </p>

            <p className={styles.description2}>
              {content.description2[0]}
              <br />
              <br />
              {content.description2[1]}
            </p>
          </div>
        </div>
        <img src={free_line} alt="" />
      </div>
    </ModalStyle2>
  );
};

export default HireMessageModal;
