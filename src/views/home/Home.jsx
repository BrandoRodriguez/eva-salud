import { Layout } from "../../layouts/Layout";
import { Hero, HeaderSecction, Products } from "../../components";
import styles from './Home.module.css'
import Testimonial from "@UI/testimonial/Testimonial";

const Home = () => {
  return (
    <Layout>
      <main className={styles.fullpage}>
        <section className={styles.hero}>
          <Hero />
        </section>
        <section className={styles.products}>
          <HeaderSecction />
          <Products />
        </section>

        {/* Poner aqui */}
        <Testimonial/>
        
      </main>
    </Layout>
  );
};

export default Home;
