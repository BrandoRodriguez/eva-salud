import styles from "./Fundation.module.css";
import FundationCard from "./Card/FundationCard";
import fundation1_indio from "@assets/imgs/fundation_indio.webp";
import fundation1 from "@assets/imgs/fundation1.webp";
import fundation2 from "@assets/imgs/fundation2.webp";
import fundation3 from "@assets/imgs/fundation3.webp";
import { useState } from "react";
import { FundationText } from "@mocks/Pages/Home";
import { useLanguage } from "@context/LanguageContext/useLanguage";
import TopSection from "@UI/TopSection/TopSection";
import FundationModal from "./FundationModal/FundationModal";

const Fundation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { language } = useLanguage();
  const content = FundationText[language];

  const imgs = [
    language === 'hi' ? fundation1_indio : fundation1, 
    fundation2, 
    fundation3
  ];

  return (
    <section className={`${styles.fundation} container`}>
      <TopSection
        subtitle={content.title}
        description={content.description}
        button_text={content.buttons[0].text}
        button_onClick={() => {
          setIsOpen(true);
        }}
      />

      <div className={styles.cards_container}>
        {content.cards.map((card, index) => {
          return (
            <FundationCard
              key={index}
              delay={200 * index}
              img={imgs[index]}
              title={card.title}
              description={card.description}
            />
          );
        })}
      </div>

      {isOpen && (
        <FundationModal
          isOpen={isOpen}
          closeModal={() => {
            setIsOpen(false);
          }}
        />
      )}
    </section>
  );
};

export default Fundation;
