import styles from "./Hero.module.css";
import { Shape, ChipPrimary, ChipBorder, CardSmall } from "../../../components";
import { Search } from "../search/Search";
import { HeroText } from "@mocks/Pages/Home";
import { ButtonPrimary } from "../../../components";
import { useLanguage } from "@context/LanguageContext/useLanguage";

export const Hero = () => {
  const { language } = useLanguage();
  const content = HeroText[language];
  return (
    <>
      <div className={styles.background}>
        <video
          src="./bg_hero.mp4"
          autoPlay={true}
          muted={true}
          loop={true}
          // poster="/bg-hero.webp"
        ></video>
        <div className={styles.over}></div>
        <Shape />
      </div>
      <div className={`${styles.content} container`}>
        <div className={styles.group} data-aos='fade-right'>
          <div className={styles.presentation}>
            <h1>{content.title}</h1>
            {/* <h2>{content.description}</h2> */}
            <div>
              <h2>{content.subtitle}</h2>
              <ButtonPrimary name={content.subscribe_button} />
            </div>
          </div>

          <div className={styles.ctn_search}>
            <Search />
          </div>

          {/* <div className={styles.ctn_chiplist}>
            <div className={styles.chiplist}>
              {content.categories.map((category, index) => {
                return <ChipBorder key={index} name={category} />;
              })}
            </div>
          </div> */}
        </div>

        <div className={styles.ctn_explore} data-aos= 'fade-right'>
          <div className={styles.explore}>
            <h3>{content.card_title}</h3>
          </div>
        </div>

        <div className={styles.scroll}>
          <div className={styles.cardlist}>
            {content.cards.map((item, index) => (
              <CardSmall key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
