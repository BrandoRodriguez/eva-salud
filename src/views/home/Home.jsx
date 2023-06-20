import styles from "./Home.module.css";
import { Layout } from "../../layouts/Layout";
import Testimonial from "@UI/testimonial/Testimonial";
import Fundation from "@UI/Fundation/Fundation";
import {
  Hero,
  HeaderSecction,
  ProductsOnline,
  Products,
  About,
  Application,
  Banner,
  BannerInformative,
} from "../../components";
import { HeaderSectionText } from "@mocks/Pages/Home";
import { useLanguage } from "@context/LanguageContext/useLanguage";
import Details from "@components/home/Details/Details";
import CallAction from "@components/home/CallAction/CallAction";
import { useEffect, useState } from "react";
import PrincipalLoader from "@components/Loaders/PrincipalLoader";
import HireMessage from "@components/home/HireMessage/HireMessage";

const Home = () => {

  const [loadingPage, setLoadingPage] = useState(true);
  const [videoLoad, setVideoLoad] = useState(false)

  useEffect(() => {

    let interval, timer;
    
    timer = setTimeout(() => {

      if (videoLoad){
        setLoadingPage(false);
      } else {

        interval = setInterval(() => {
          
          if (videoLoad){
            setLoadingPage(false);
            clearInterval(interval)
          }

        }, 100);
      }
    }, 1000);

    return ()=> {
      clearTimeout(timer)
      clearInterval(interval)
    }

  }, [videoLoad]);

  return (
    <Layout>
      <main className={styles.fullpage}>
        <section className={styles.section_hero}>
          <Hero isLoadVideo={()=>{ setVideoLoad(true)}}/>
        </section>
        <section className={styles.section_banner} data-aos="fade-right">
          <Banner />
        </section>
        <section
          className={styles.section_bannerinformative}
          data-aos="fade-left"
        >
          <BannerInformative />
        </section>
        <section className={styles.section_callaction} data-aos="fade-left">
          <CallAction />
        </section>
        <section className={styles.application} data-aos="fade-right">
          <Application />
        </section>
        <HireMessage />
        <Testimonial />
        <Fundation />
      </main>

      {loadingPage && <PrincipalLoader />}
    </Layout>
  );
};

export default Home;
