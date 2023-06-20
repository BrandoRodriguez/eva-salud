import { BrowserRouter } from "react-router-dom";
import Router from "./router";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {

    AOS.init({
      duration: 2000,
      easing: 'ease-out-back',
      once: true,
    });
  }, []);

  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
