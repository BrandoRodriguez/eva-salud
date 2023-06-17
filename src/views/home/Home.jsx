import styles from "./Home.module.css";
import { Layout } from "../../layouts/Layout";
import { Hero } from "../../components";

const Home = () => {
  return (
    <Layout>
      <Hero />
    </Layout>
  );
};

export default Home;
