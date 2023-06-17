import styles from "./Video.module.css";
import { Play } from "../../../components";

export const Video = () => {
  return (
    <div className={styles.video}>
      <div className={styles.content}>
        <div className={styles.play}>
          <Play />
        </div>
        <img src="./images/about/video.png" alt="" />
      </div>
    </div>
  );
};
