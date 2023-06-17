import styles from "./Products.module.css";
import { CardProduct } from "../../../components";

export const Products = () => {
  return (
    <div className={`${styles.products} container`}>
      <CardProduct />
    </div>
  );
};
