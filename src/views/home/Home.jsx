import styles from "./Home.module.css"
import { Layout } from "../../layouts/Layout";
import { Hero, HeaderSecction, Products, Application } from "../../components";

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
        <Application/>
      </main>
    </Layout>
  );
};

export default Home;
