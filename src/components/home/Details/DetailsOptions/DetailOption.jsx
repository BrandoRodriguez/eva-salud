import styles from "./DetailOption.module.css";
import { Title18 } from "@UI/Tags/Titles";
import { Text18 } from "@UI/Tags/Texts";
import CircleLine from "@UI/CircleLine/CircleLine";
import { ButtonArrow } from "@UI/button/Button";

const DetailOption = ({ number, title, description, line = true }) => {
  return (
    <div data-aos="fade-left" className={styles.detail_option}>
      <CircleLine number={number} line={line} />
      <div className={styles.subtitle_container}>
        <Title18>{title}</Title18>
        <Text18>{description}</Text18>
        <ButtonArrow name={"Ver más"} />
      </div>
    </div>
  );
};

export default DetailOption;
