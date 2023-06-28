import styles from "./Application.module.css";
import { ButtonArrow, DoctorHome, MedicalCheck, VideoCall } from "../../ui";
import { useLanguage } from "@context/LanguageContext/useLanguage";
import { AplicationText } from "@mocks/Pages/Home";
import { processBoldText } from "@utils/functions";
export const Application = () => {
  const { language } = useLanguage();
  const content = AplicationText[language];

  const getImg = () => {
    switch (language) {
      case 'hi':
        return "phone_hindi.webp"
    
      default:
        return "phone.webp"
    }
  }

  return (
    <>
      <div className={`${styles.Appsection} container`}>

        <div className={styles.appImage} style={{ backgroundImage: `url("/images/application/${getImg()}")` }}>
        </div>

        <div className={styles.appDescription}>
          <h2 data-aos='fade-right'>
            {processBoldText(content.title).map(({ type, content }, index) => {
              switch (type) {
                case "text":
                  return content + " ";
                case "span":
                  return <b key={index}>{content} </b>;
              }
            })}
          </h2>

          <div className={styles.featureApp} data-aos='fade-right'>
            <VideoCall />
            <span>
              <p>{content.feature[0].title}</p>
              <p className={styles.textFeature}>
                {content.feature[0].description}
              </p>
              <ButtonArrow name={content.feature[0].button_text} />
            </span>
          </div>

          <div className={styles.featureApp} data-aos='fade-right' data-aos-delay='200'>
            <MedicalCheck />
            <span>
              <p>{content.feature[1].title}</p>
              <p className={styles.textFeature}>
                {content.feature[1].description}
              </p>
              <ButtonArrow name={content.feature[1].button_text} />
            </span>
          </div>

          <div className={styles.featureApp} data-aos='fade-right' data-aos-delay='400'>
            <DoctorHome />
            <span>
              <p>{content.feature[2].title}</p>
              <p className={styles.textFeature}>
                {content.feature[2].description}
              </p>
              <ButtonArrow name={content.feature[2].button_text} />
            </span>
          </div>

          <button className={styles.openApp}>Abrir la App</button>
        </div>
      </div>
    </>
  );
};
