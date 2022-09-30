import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";

const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={""} />
      </Routes>
    </>
  );
};

export default AppRouter;
