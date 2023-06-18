import styles from "./Layout.module.css";
import {Header } from "../components";
import Footer from "@UI/FooterDecesos/Footer";


export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
