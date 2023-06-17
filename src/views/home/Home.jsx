import styles from "./Home.module.css";
import { Layout } from "../../layouts/Layout";
import Testimonial from "@UI/testimonial/Testimonial";
import {
  Hero,
  HeaderSecction,
  Products,
  About,
  Application,
} from "../../components";
import Fundation from "@UI/Fundation/Fundation";

const Home = () => {
  return (
    <Layout>
      <main className={styles.fullpage}>
        <section className={styles.hero}>
          <Hero />
        </section>
        {/* <section className={styles.products}>
          <HeaderSecction
            title={"Pruebas médicas más populares en Madrid"}
            description={
              "“Tu bienestar nos mueve, Encuentra la especialidad adecuada para una vida plena”"
            }
          />
          <Products />
        </section>
        <section className={styles.about}>
          <HeaderSecction
            title={
              "Beneficios para una vida más fácil al pertenecer a Eva Salud"
            }
            description={
              "“Tu bienestar nos mueve, Encuentra la especialidad adecuada para una vida plena”"
            }
          />
          <About />
        </section>
        <section className={styles.application}>
          <Application />
        </section> */}

        {/* <Testimonial />
        <Fundation/> */}

      </main>
    </Layout>
  );
};

export default Home;
