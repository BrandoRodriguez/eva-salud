
import styles from "./Application.module.css";
import { ButtonArrow, DoctorHome, MedicalCheck, VideoCall } from "../../ui";
import { useLanguage } from "@context/LanguageContext/useLanguage";
import { AplicationText } from "@mocks/Pages/Home";
import { processBoldText } from "@utils/functions";
export const Application = () => {

    const { language } = useLanguage()
    const content = AplicationText[language]

    return (
        <>
            <div className={`${styles.Appsection} container`}>
                <div className={styles.appImage}>
                <div className={styles.scanQR}>
                    <img src="./images/application/logoBlue.png" className={styles.logo}/>
                    <p>Escanea el código y empieza a usarla.</p>
                    <img src="./images/application/qr.png" className={styles.qr}/>
                </div>
                </div>
                <div className={styles.appDescription}>

                    <h1>

                        {
                            processBoldText(content.title).map(({ type, content }, index) => {

                                switch (type) {
                                    case 'text':
                                        return content + ' '
                                    case 'span':
                                        return <b key={index}>{content} </b>
                                }
                            })
                        }

                    </h1>


                    <div className={styles.featureApp}>
                        <VideoCall />
                        <span>
                            <p>{content.feature[0].title}</p>
                            <p className={styles.textFeature}>{content.feature[0].description}</p>
                            <ButtonArrow name={content.feature[0].button_text} />
                        </span>
                    </div>
                    <div className={styles.featureApp}>
                        <MedicalCheck />
                        <span>
                            <p>{content.feature[1].title}</p>
                            <p className={styles.textFeature}>{content.feature[1].description}</p>
                            <ButtonArrow name={content.feature[1].button_text} />
                        </span>
                    </div>
                    <div className={styles.featureApp}>
                        <DoctorHome />
                        <span>
                            <p>{content.feature[2].title}</p>
                            <p className={styles.textFeature}>{content.feature[2].description}</p>
                            <ButtonArrow name={content.feature[2].button_text} />
                        </span>
                    </div>
                        <button className={styles.openApp}>Abrir la App</button>

                </div>
            </div>
        </>
    )
}
