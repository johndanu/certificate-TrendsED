import { Route, Routes } from "react-router-dom";

import { useState } from "react";
import "./App.css";
import CertificatePage from "./pages/certificatePage";
import NavBar from "./components/navbar";
import CodePage from "./pages/codePage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      {/* <CertificatePage /> */}
      <Routes>
        <Route path="/" element={<CertificatePage />} />
        <Route path="/code" element={<CodePage />} />
      </Routes>
    </>
  );
}

export default App;
