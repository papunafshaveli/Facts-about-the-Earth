/* eslint-disable @typescript-eslint/no-unused-vars */
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Land from "./pages/land";
import Sky from "./pages/Sky";
import Footer from "./components/Footer";
import Ocean from "./pages/Ocean";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sky" element={<Sky />} />
          <Route path="/land" element={<Land />} />
          <Route path="/ocean" element={<Ocean />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
