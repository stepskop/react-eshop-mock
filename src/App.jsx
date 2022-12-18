import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import "../src/styles/App.css";
import Layout from "./pages/layout";
import Home from "./pages/home";
import Legal from "./pages/legal";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Legal" element={<Legal />} />
          {/* <Route path="contact" element={<Contact />} /> */}
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
