import styles from "./Home.module.css";
import { Layout } from "../../layouts/Layout";
import Testimonial from "@UI/testimonial/Testimonial";
import Fundation from "@UI/Fundation/Fundation";
import {
  Hero,
  HeaderSecction,
  ProductsOnline,
  About,
  Application,
} from "../../components";
import { HeaderSectionText } from "@mocks/Pages/Home";
import { useLanguage } from "@context/LanguageContext/useLanguage";
import Details from "@components/home/Details/Details";
import CallAction from "@components/home/CallAction/CallAction";

const Home = () => {
  const { language } = useLanguage();
  const content = HeaderSectionText[language];

  return (
    <Layout>
      <main className={styles.fullpage}>
        <section className={styles.section_hero}>
          <Hero />
        </section>
        <section className={styles.section_about}>
          <HeaderSecction
            title={content.about.title}
            description={content.about.description}
          />
          <ProductsOnline />
        </section>
        {/* <Details /> */}
        {/* <section className={`${styles.section_products} container`}>
          <HeaderSecction
            title={content.products.title}
            description={content.products.description}
          />
          <Products />
        </section>
        <section className={styles.section_about}>
          <HeaderSecction
            title={content.about.title}
            description={content.about.description}
          />
          <About />
        </section>

        <CallAction />

        <section className={styles.application}>
          <Application />
        </section>
        <Testimonial />
        <Fundation /> */}
      </main>
    </Layout>
  );
};

export default Home;
