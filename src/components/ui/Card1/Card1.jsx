import Detail from "@views/detail/Detail";
import styles from "./Card1.module.css";

const Card1 = (props) => {
  console.log(props);

  return (
    <div className={styles.card}>
      <div className={styles.detail}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
          architecto eveniet, dolor quo repellendus pariatur.
        </p>
        <h4>Profesionales:</h4>
        <div></div>
      </div>
    </div>
  );
};

export default Card1;
