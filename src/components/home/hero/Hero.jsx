import styles from "./Hero.module.css";
import { Shape, ChipPrimary, ChipBorder, CardSmall } from "../../../components";
import { Search } from "../search/Search";
import { HeroText } from "@mocks/Pages/Home";
import { useLanguage } from "@context/LanguageContext/useLanguage";

export const Hero = () => {
  const { language } = useLanguage();
  const content = HeroText[language];

  return (
    <>
      <div className={styles.background}>
        <Shape />
      </div>
      <div className={`${styles.content} container`}>
        {/* <div className={styles.group}>
          <div className={styles.presentation}>
            <h1>{content.title}</h1>
            <h2>{content.description}</h2>
          </div>
          <div className={styles.ctn_search}>
            <Search />
          </div>
          <div className={styles.ctn_chiplist}>
            <div className={styles.chiplist}>
              {content.categories.map((category, index) => {
                return <ChipBorder key={index} name={category} />;
              })}
            </div>
          </div>
        </div> */}
        {/* <div className={styles.ctn_explore}>
          <div className={styles.explore}>
            <h3>{content.card_title}</h3>
          </div>
        </div> */}
        <div className={styles.cardlist}>
          {content.cards.map((item, index) => (
            <CardSmall key={index} {...item} />
          ))}
        </div>
      </div>
    </>
  );
};
