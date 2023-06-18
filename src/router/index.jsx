import { Routes, Route } from "react-router-dom";
import Home from "@views/home/Home";
import Detail from "@views/detail/Detail";
import Consultation from "@views/consultation/Consultation";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail" element={<Detail />} />
      <Route path="/consultation" element={<Consultation />} />
    </Routes>
  );
};

export default Router;
