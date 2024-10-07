import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { Datenschutz } from "./pages/Datenschutz";
import { Impressum } from "./pages/Impressum";
import Layout from "./components/Layout";

function AppRouter() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutzerklaerung" element={<Datenschutz />} />
        </Routes>
      </Layout>
    </>
  );
}

export default AppRouter;
