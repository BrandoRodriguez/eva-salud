import DetailOption from "./DetailOption";
import styles from "./DetailsOptions.module.css";
import { LogoColor } from "../../../../components";

const DetailsOptions = ({ options }) => {
  return (
    <div className={styles.details_options}>
      {options.map((option, index) => {
        return (
          <DetailOption
            key={index}
            number={index + 1}
            title={option.title}
            description={option.description}
          />
        );
      })}
    </div>
  );
};

export default DetailsOptions;
