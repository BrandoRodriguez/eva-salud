import styles from "./Layout.module.css";
import { Header, HeaderColor } from "../components";
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

export const Layout2 = ({ children }) => {
  return (
    <>
      <HeaderColor />
      {children}
      <Footer />
    </>
  );
};
