import styles from "./ProductsOnline.module.css";
import { useLanguage } from "@context/LanguageContext/useLanguage";
import { ProductsOnlineText } from "@mocks/Pages/Home";
import { Card } from "../../../components";

export const ProductsOnline = () => {
  const { language } = useLanguage();
  const content = ProductsOnlineText[language];
  return (
    <div className={`${styles.cardlist} container`}>
      {content.map((item, index) => (
        <Card key={index} {...item} />
      ))}
    </div>
  );
};
