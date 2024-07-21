import { useState } from "react";
import "./App.css";
import CertificatePage from "./pages/certificatePage";
import NavBar from "./components/navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <CertificatePage />
    </>
  );
}

export default App;
