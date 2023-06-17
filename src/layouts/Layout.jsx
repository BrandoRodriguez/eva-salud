import styles from "./Layout.module.css";
import { Header, Footer } from "../components";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
