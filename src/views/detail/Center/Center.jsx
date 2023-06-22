import styles from "./Center.module.css";
import { StartYellow } from "../../../components";
import Button from "@UI/ButtonDecesos/Button";

const Center = () => {
  return (
    <div className={styles.center}>
      <div className={styles.rigth}>
        <h2>Centro Médico Averroes Arroyomolinos</h2>
        <div className={styles.detail}>
          <div>
            <StartYellow />
            <StartYellow />
            <StartYellow />
            <StartYellow />
            <StartYellow />
          </div>
          <div>4.9</div>
        </div>
      </div>
      <div>
        <Button>Reservar</Button>
      </div>
    </div>
  );
};

export default Center;
