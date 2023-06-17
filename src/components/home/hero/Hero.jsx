import styles from "./Hero.module.css";
import { Shape, ChipPrimary, ChipBorder, CardSmall } from "../../../components";
import { Search } from "../search/Search";

const specialties = [
  {
    specialty: "Consulta de dermatología",
    category: "Dermatología",
    image: "/images/specialty/dermatologia.png",
  },
  {
    specialty: "Consulta de enfermería",
    category: "Enfermería",
    image: "/images/specialty/enfermeria.png",
  },
  {
    specialty: "Consulta de medicina general",
    category: "Medicina general",
    image: "/images/specialty/medicinageneral.png",
  },
  {
    specialty: "Consulta de oftalmología",
    category: "Oftalmología",
    image: "/images/specialty/dermatologia.png",
  },
  {
    specialty: "Consulta de pediatría",
    category: "Pediatría",
    image: "/images/specialty/pediatria.png",
  },
  {
    specialty: "Consulta de traumatología",
    category: "Traumatología",
    image: "/images/specialty/traumatologia.png",
  },
];

export const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.background}>
        <Shape />
      </div>
      <div className={`${styles.content} container`}>
        <div className={styles.group}>
          <div className={styles.presentation}>
            <h1>Juntos por tu bienestar</h1>
            <h2>
              Protejamos la salud de los que más quieres con los productos más
              innovadores del mercado.
            </h2>
          </div>
          <div className={styles.ctn_search}>
            <Search />
          </div>
          <div className={styles.ctn_chiplist}>
            <div className={styles.chiplist}>
              <ChipBorder name="Medicina general" />
              <ChipPrimary name="Dermatología" />
              <ChipBorder name="Ginecología" />
              <ChipBorder name="Oftalmología" />
              <ChipBorder name="Enfermería" />
            </div>
          </div>
        </div>
        <div className={styles.ctn_explore}>
          <div className={styles.explore}>
            <h3>Explore consultas incluidas en Eva Salud</h3>
          </div>
        </div>
        <div className={styles.cardlist}>
          {specialties.map((item, index) => (
            <CardSmall key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};
