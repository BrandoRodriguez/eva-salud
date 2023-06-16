import styles from "./Layout.module.css";
import { Footer } from "../components";

export const Layout = ({ children }) => {
  return (
    <>
      {children}
      <Footer />
    </>
  );
};
