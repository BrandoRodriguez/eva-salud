import styles from "./Products.module.css";
import { CardProduct } from "../../../components";
import { ProductsText } from "@mocks/Pages/Home";
import { useLanguage } from "@context/LanguageContext/useLanguage";

export const Products = () => {
  const { language } = useLanguage();
  const content = ProductsText[language];

  return (
    <div className="">
      <div className={styles.products}>
        {content.map((product, index) => (
          <CardProduct key={index} {...product} />
        ))}
      </div>
    </div>
  );
};
