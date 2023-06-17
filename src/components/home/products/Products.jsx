import styles from "./Products.module.css";
import { CardProduct } from "../../../components";

const products = [
  {
    specialty: "Pack pruebas de oftalmología",
    category: "oftalmologia",
    image: "/images/products/oftalmologia.png",
  },
  {
    specialty: "Pack pruebas de oftalmología",
    category: "oftalmologia",
    image: "/images/products/odontológico.png",
  },
  {
    specialty: "Pack pruebas de oftalmología",
    category: "oftalmologia",
    image: "/images/products/otorrinolaringología.png",
  },
];

export const Products = () => {
  return (
    <div className="">
      <div className={styles.products}>
        {products.map((product, index) => (
          <CardProduct key={index} {...product} />
        ))}
      </div>
    </div>
  );
};
