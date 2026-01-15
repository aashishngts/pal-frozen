import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import About from "./pages/About";
import PalFresh from "./pages/PalFresh";
import GetInTouch from "./pages/GetInTouch";

/* TEMP PAGES */
const ComingSoon = ({ title }) => (
  <div className="min-h-screen flex items-center justify-center text-3xl text-green-800">
    {title} – Coming Soon
  </div>
);

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* MAIN PAGES */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blogs />} />

        {/* TEMP PAGES */}
        <Route path="/pal-fresh" element={<PalFresh/>} />
        <Route path="/frozzo" element={<ComingSoon title="Frozzo" />} />
        <Route path="/contact" element={<GetInTouch/>} />

        {/* FALLBACK (OPTIONAL but SAFE) */}
        <Route path="*" element={<ComingSoon title="Page Not Found" />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
