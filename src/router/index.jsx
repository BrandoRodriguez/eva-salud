import { Routes, Route } from "react-router-dom";
import Home from "@views/home/Home";
import Detail from "@views/detail/Detail";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail" element={<Detail />} />
    </Routes>
  );
};

export default Router;
