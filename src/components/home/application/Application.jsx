
import styles from "./Application.module.css";
import { ButtonArrow, DoctorHome, Logo, MedicalCheck, VideoCall } from "../../ui";
export const Application = () => {
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
                    <h2>Ten el control de tu bienestar con la <b>App de Eva Salud</b></h2>
                    <div className={styles.featureApp}>
                        <VideoCall/>
                        <span>
                            <p>Videoconsultas médicas sin costo</p>
                            <p className={styles.textFeature}>Accede a Clínica Internacional Digital y solicítalo para Medicina General y Pediatría según tu plan.</p>
                            <ButtonArrow name="Reserva tu cita" />
                        </span>
                    </div>
                    <div className={styles.featureApp}>
                        <MedicalCheck/>
                        <span>
                            <p>Chequeos preventivos sin costo</p>
                            <p className={styles.textFeature}>Obtén un chequeo preventivo anual sin costo y mantén tu salud bajo control.</p>
                            <ButtonArrow name="Entérate cómo" />
                        </span>
                    </div>
                    <div className={styles.featureApp}>
                        <DoctorHome/>
                        <span>
                            <p>Médico a domicilio</p>
                            <p className={styles.textFeature}>Recibe atención médica en casa y paga solo la consulta (Madrid Metropolitana y Barcelona).</p>
                            <ButtonArrow name="Programa la visita" />
                        </span>
                    </div>
                        <button className={styles.openApp}>Abrir la App</button>

                </div>
            </div>
        </>
    )
}
